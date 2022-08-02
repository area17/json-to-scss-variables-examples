const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const DartScss = require('sass');

module.exports = {
  entry: {
    "application": './webpack.scss',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  plugins: [
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: DartScss
            }
          },
          {
            loader: "@epegzz/sass-vars-loader",
            options: {
              syntax: 'scss',
              files: [
                path.resolve(__dirname, 'frontend.config.json')
              ]
            }
          },
        ],
      },
    ],
  }
};
