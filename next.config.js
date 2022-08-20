module.exports = {
  plugin: (schema, documents, config) => {
    return ["typescript", "typescript-react-query", "typescript-react-apollo", config];
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    //this is to fix an issue with webpack not finding the electron module
    config.module.rules.push({
      test: /\.md$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "markdown-loader",
        },
      ],
    });

    return config;
  },
};
