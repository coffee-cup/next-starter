const colors = require("tailwindcss/colors");

const customColors = {
  fg: `var(--fg)`,
  bg: `var(--bg)`,
  article: `var(--article)`,
  accent: `var(--accent)`,
  accentDim: `var(--accentDim)`,
  gray: `var(--gray)`,
  dim: `var(--dim)`,
};

module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // 'media' or 'class'
  theme: {
    fontFamily: {
      sans: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
    },
    colors: {
      ...customColors,
      white: colors.white,
      black: colors.black,
    },
    extend: {
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme("colors.article"),

            a: {
              color: theme("colors.article"),
              textDecoration: "underline",
              fontWeight: theme("fontWeight.semibold"),

              "&:hover": {
                color: theme(`colors.accent`),
              },
            },

            hr: {
              borderColor: theme("colors.dim"),
            },

            h1: {
              color: theme("colors.fg"),
            },

            h2: {
              color: theme("colors.fg"),
            },

            h3: {
              color: theme("colors.fg"),
            },

            img: {
              boxShadow: theme("boxShadow.md"),
              borderRadius: theme("borderRadius.DEFAULT"),
            },

            blockquote: {
              color: theme("colors.fg"),
              borderLeftColor: theme("colors.dim"),
            },

            code: {
              color: theme("colors.accent"),
            },

            pre: {
              code: {
                "&::after": {
                  display: "none",
                },
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
