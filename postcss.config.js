module.exports = {
  plugins: [
    "tailwindcss",
    [
      "postcss-preset-env",
      {
        stage: 1,
        features: {
          "focus-within-pseudo-class": false, // Breaks shit if true... (https://github.com/tailwindlabs/tailwindcss/discussions/2462)
        },
      },
    ],
  ],
};
