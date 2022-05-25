const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: {
        main: "./src/index.js",
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          use: ["html-loader"]
        },
        {
          test: /\.(svg|png|jpg|gif)$/,
          type: 'asset/resource'
        }
      ]
    }
};