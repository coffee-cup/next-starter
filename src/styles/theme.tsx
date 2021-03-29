import React, { createContext, useContext, useMemo } from "react";
import { transformThemeToCustomProperties } from "theme-custom-properties";
import {
  ThemeProvider as NextThemeProvider,
  useTheme as useNextTheme,
} from "next-themes";
import Head from "next/head";
import { GlobalStyles } from "./GlobalStyles";

export type ColorMode = "light" | "dark";
export const defaultColorMode: ColorMode = "light";

export interface Theme {
  bg: string;
  fg: string;
  article: string;
  accent: string;
  accentDim: string;
  dim: string;
  gray: string;
}

export const themes: Record<ColorMode, Theme> = {
  light: {
    bg: "#f8f9fa",
    fg: "#212529",
    article: "#495057",
    accent: "#e41b61",
    accentDim: "#fcc2d7",
    gray: "#9CA3AF",
    dim: "#b9bdc1",
  },
  dark: {
    bg: "#000000",
    fg: "#f8f9fa",
    article: "#dee2e6",
    accent: "#ff1769",
    accentDim: "#9a2d55",
    gray: "#8b9198",
    dim: "#67778a",
  },
};

export const { bodyCSS, transformedThemes } = transformThemeToCustomProperties(
  themes,
  {
    defaultTheme: defaultColorMode,
    attribute: "class",
  },
);

export interface ThemeState {
  colorMode: ColorMode;
  theme: Theme;
  setColorMode: (mode: ColorMode) => void;
}

const ThemeContext = createContext<ThemeState>({} as ThemeState);

export const useTheme = () => useContext(ThemeContext);

export const WrappedThemeProvider: React.FC = ({ children }) => {
  const { resolvedTheme, setTheme } = useNextTheme();
  const colorMode = resolvedTheme as ColorMode;

  const themeState: ThemeState = {
    theme: transformedThemes[colorMode],
    colorMode,
    setColorMode: value => {
      setTheme(value);
    },
  };

  return (
    <ThemeContext.Provider value={themeState}>
      <Head>
        <style>{bodyCSS}</style>
      </Head>

      <GlobalStyles />

      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeProvider: React.FC = props => (
  <NextThemeProvider
    defaultTheme={"system"}
    enableSystem={true}
    disableTransitionOnChange={true}
    attribute="class"
  >
    <WrappedThemeProvider {...props} />
  </NextThemeProvider>
);
