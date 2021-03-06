const webpack = require("webpack")

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  webpackFinal: async (config, { configType }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        SC_DISABLE_SPEEDY: true
      })
    );

    return config;
  },
}