import React from "react";
import { Moon, Sun } from "react-feather";
import "twin.macro";
import { useTheme } from "../styles/theme";

export const ThemeSwitcher: React.FC = () => {
  const { colorMode, setColorMode } = useTheme();
  const toggleColorMode = () =>
    setColorMode(colorMode === "dark" ? "light" : "dark");

  return (
    <button
      tw="w-4 h-4 md:w-4 md:h-4 cursor-pointer hover:text-accent focus:outline-none"
      onClick={toggleColorMode}
    >
      {colorMode === "dark" ? (
        <Sun width="100%" height="100%" />
      ) : (
        <Moon width="100%" height="100%" />
      )}
    </button>
  );
};
