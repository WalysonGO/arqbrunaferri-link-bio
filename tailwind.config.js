module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["src/components/**/*.js", "src/pages/**/*.js"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 7s linear infinite",
        "spin-super-slow": "spin 50s linear infinite",
      },
      colors: {
        "arq-brown-200": "#E7B09A",
        "arq-brown-300": "#BE8274",
        "arq-green-100": "#EFF0E9",
        "arq-green-300": "#BDC9B8",
        "arq-green-400": "#9ea899",
        "arq-green-600": "#6B7774",
      },
      width: {
        68: "17rem",
      },
      height: {
        68: "17rem",
      },
      borderWidth: {
        20: "20px",
      },
      fontFamily: {
        rockwell: ["rockwell"],
        clear_sans_bold: ["clear_sans_bold"],
        clear_sans_medium: ["clear_sans_medium"],
        clear_sans_regular: ["clear_sans_regular"],
        clear_sans_thin: ["clear_sans_thin"],
        clear_sans_light: ["clear_sans_light"],
      },
      backgroundSize: {
        "50px": "50px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
