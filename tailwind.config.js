/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: {
          DEFAULT: "#1e1d1e",
          "l-50": "#F2F2F2",
          "l-100": "#E6E5E6",
          "l-200": "#CDCBCD",
          "l-300": "#B4B1B4",
          "l-400": "#9B979B",
          "l-500": "#1E1D1E",
          "l-600": "#686468",
          "l-700": "#4E4B4E",
          "l-800": "#343234",
          "l-900": "#1A191A",
          "l-950": "#0D0D0D",
        },
        blue: {
          DEFAULT: "#6754e9",
          "l-50": "#EBE8FC",
          "l-100": "#D7D2F9",
          "l-200": "#AFA5F3",
          "l-300": "#8777EE",
          "l-400": "#5F4AE8",
          "l-500": "#6854E9",
          "l-600": "#2C17B5",
          "l-700": "#211188",
          "l-800": "#160C5A",
          "l-900": "#0B062D",
          "l-950": "#060317",
        },
        white: {
          DEFAULT: "#FFFFFF",
        },
      },
      fontFamily: {
        jost: ["Jost"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "100%",
          "2xl": "1620px",
        },
      },
      fontSize: {
        p: ["18px", { lineHeght: "24px", fontWeight: "500" }],
        a: ["16px", { lineHeght: "22px", fontWeight: "400" }],
      },
    },
  },
  plugins: [],
};
