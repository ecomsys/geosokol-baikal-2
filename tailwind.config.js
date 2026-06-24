/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{js,ts}"],

  theme: {
    screens: {
      xs350: "350px",
      // => @media (min-width: 350px) { ... }

      xs380: "380px",
      // => @media (min-width: 380px) { ... }

      xs400: "400px",
      // => @media (min-width: 400px) { ... }

      xs440: "440px",
      // => @media (min-width: 440px) { ... }

      xs576: "576px",
      // => @media (min-width: 576px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
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
