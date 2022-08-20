module.exports = {
  // darkMode: "class",
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "#00000",
            strong: {
              fontWeight: "800",
            },
            // ...
          },
        },
      },
      colors: {
        cDarkBlue: "#161F48",
        cLightBlue: "#275A8F",
        cGold: "#9F7748",
        cRed: "#E43727",
        cCream: "#EAE5DD",
        cLightCream: "#F4F1EC",
        cYellow: "#F19938",
      },
      maxWidth: {
        xxs: "15rem",
      },
    },
    screens: {
      sm: "460px",
      md: "768px",
      lg: "1024px",
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      innerFormSection:
        "inset 4px 4px 5px 3px rgba(0, 0, 0, 0.06), inset -4px -4px 7px 2px rgba(255,255,255, 0.8)",
      innerFormSectionDark:
        "inset 4px 4px 5px 3px rgba(0, 0, 0, 0.06), inset -4px -4px 7px 2px rgba(0,0,0, 0.08)",
      none: "none",
      reverse:
        "0 1px 0px 3px rgba(0, 0, 0, 0.1), 0 1px 0px 2px rgba(0, 0, 0, 0.06)",
      mdreverse:
        "0 4px 1px 6px rgba(0, 0, 0, 0.09), 0 2px 1px 4px rgba(0, 0, 0, 0.05)",
      lgreverse:
        "0 10px 3px 15px rgba(0, 0, 0, 0.07), 0 4px 2px 5px rgba(0, 0, 0, 0.04)",
      modal: "0 35px 60px -10px rgba(0, 0, 0, 0.5)",
      shareButton:
        "0 7px 10px 5px rgba(0, 0, 0, 0.1), 0 3px 5px 3px rgba(0, 0, 0, 0.07)",
    },
  },

  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
