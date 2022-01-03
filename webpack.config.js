let mode = "development";
let target = "web";

if (process.env.NODE_ENV === "production") {
  target = "browserlist";
  mode = "production";
}
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: mode,
  target: target,
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
  devtool: "source-map",
  devServer: {
    static: "./dist",
    hot: true,
  },
};
