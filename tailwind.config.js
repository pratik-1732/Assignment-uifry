/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        whitesmoke: "#f2f2f2",
        black: "#000",
        darkslategray: "#333",
        gray: {
          "100": "#888b92",
          "200": "#82848a",
          "300": "#262626",
          "400": "#191d2a",
          "500": "rgba(22, 22, 22, 0)",
          "600": "rgba(0, 0, 0, 0.5)",
        },
        tomato: "#ff5555",
        red: "#ff0000",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "clash-display": "'Clash Display'",
        "dm-sans": "'DM Sans'",
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
        "nunito-sans": "'Nunito Sans'",
      },
      borderRadius: {
        "76xl-9": "95.9px",
        "28xl-9": "47.9px",
        "smi-3": "12.3px",
      },
    },
    fontSize: {
      "13xl": "32px",
      base: "16px",
      "7xl": "26px",
      lgi: "19px",
      "8xs-2": "4.2px",
      "2xs-5": "10.5px",
      "xs-8": "11.8px",
      lg: "18px",
      "29xl": "48px",
      "19xl": "38px",
      "10xl": "29px",
      "9xl": "28px",
      "3xl": "22px",
      "2xs-4": "10.4px",
      "8xs-8": "4.8px",
      "smi-7": "12.7px",
      "11xs": "2px",
      "4xs-6": "8.6px",
      "5xs-4": "7.4px",
      "mini-8": "14.8px",
      "45xl": "64px",
      "32xl": "51px",
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
