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
        a: ["16px", { lineHeght: "22px", fontWeight: "400" }],
        p: ["18px", { lineHeght: "24px", fontWeight: "500" }],
        h1: [
          " clamp(2rem, 1.625rem + 1.875vw, 3.5rem)",
          {
            lineHeight: "clamp(3rem, 2.6563rem + 1.7188vw, 4.375rem)",
            fontWeight: "700",
          }, //56
        ],
        h2: [
          "clamp(1.75rem, 1.4375rem + 1.5625vw, 3rem)",
          {
            lineHeight: "clamp(2.625rem, 2.3125rem + 1.5625vw, 3.875rem)",
            fontWeight: "500",
          }, //48 28
        ],
        h3: [
          "clamp(1.625rem, 1.4063rem + 1.0938vw, 2.5rem)",
          {
            lineHeight: "clamp(2.375rem, 2.1563rem + 1.0938vw, 3.25rem)",
            fontWeight: "500",
          }, //40 26
        ],
        h4: [
          "clamp(1.5rem, 1.3125rem + 0.9375vw, 2.25rem)",
          {
            lineHeight: "clamp(2.125rem, 1.9375rem + 0.9375vw, 2.875rem)",
            fontWeight: "500",
          }, //36 24
        ],
        h5: [
          "clamp(1.375rem, 1.2813rem + 0.4688vw, 1.75rem)",
          {
            lineHeight: "clamp(2rem, 1.9375rem + 0.3125vw, 2.25rem)",
            fontWeight: "500",
          }, //28 22
        ],
        h6: [
          "clamp(1.25rem, 1.1875rem + 0.3125vw, 1.5rem)",
          {
            lineHeight: "clamp(1.875rem, 1.8125rem + 0.3125vw, 2.125rem)",
            fontWeight: "500",
          }, //24 20
        ],
      },
      screens: {
        xxsm: "375px",
        xsm: "450px",
        sm: "640px",
        md: "768px",
        xmd: "860px",
        xlg: "991px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      keyframes: {
        flot: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        flot: "flot 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
