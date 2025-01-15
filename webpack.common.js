const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      //   title: "Production",
      template: "./src/template.html",
    }),
    new FaviconsWebpackPlugin({
      logo: "./src/assets/img/favicon_io/favicon-32x32.png", // Path to your source image
      mode: "webapp", // optional can be 'webapp', 'light' or 'auto'
      devMode: "light", // optional can be 'webapp' or 'light'
      favicons: {
        appName: "Portfolio",
        appDescription: "Kevin Garcia Martin's portfolio",
        developerName: "Kevin Garcia Martin",
        developerURL: null, // prevent retrieving from the nearest package.json
        background: "#ddd",
        theme_color: "#333",
        icons: {
          coast: false,
          yandex: false,
        },
      },
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|webp|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
