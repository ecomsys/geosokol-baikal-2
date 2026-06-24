/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{js,ts}"],

  theme: {
    screens: {
      xs350: "21.875rem",
      // => @media (min-width: 21.875rem) { ... }

      xs380: "23.75rem",
      // => @media (min-width: 23.75rem) { ... }

      xs400: "25rem",
      // => @media (min-width: 25rem) { ... }

      xs440: "27.5rem",
      // => @media (min-width: 27.5rem) { ... }

      xs576: "36rem",
      // => @media (min-width: 36rem) { ... }

      sm: "40rem",
      // => @media (min-width: 40rem) { ... }

      md: "48rem",
      // => @media (min-width: 48rem) { ... }

      lg: "64rem",
      // => @media (min-width: 64rem) { ... }

      xl: "80rem",
      // => @media (min-width: 80rem) { ... }

      "2xl": "96rem",
      // => @media (min-width: 96rem) { ... }
    },
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        accent: "#00EEFF",
        siniy: "#35467e;",
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        monts: ["Montserrat", "sans-serif"],
      },
    },
  },

  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-none": {
          "scrollbar-width": "none",
          "-ms-overflow-style": "none",
          "&::-webkit-scrollbar": {
            display: "none",
            width: "0",
            height: "0",
          },
        },
      });
    },
  ],
};
