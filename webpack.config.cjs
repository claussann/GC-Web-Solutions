const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/**
 * Configurazione di compilazione.
 *
 * Webpack sostituisce Vite e trasforma React + TypeScript in file statici.
 * `publicPath: ""` mantiene i collegamenti relativi: il sito funziona sia in
 * locale sia dentro la sottocartella usata da GitHub Pages.
 */
module.exports = (_environment, argv) => {
  const isProduction = argv.mode === "production";

  return {
    mode: isProduction ? "production" : "development",
    entry: path.resolve(__dirname, "src/main.tsx"),
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "assets/js/[name].[contenthash:8].js",
      publicPath: "",
      clean: true,
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: "ts-loader",
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public/index.html"),
      }),
      // Copia favicon, robots.txt e .nojekyll nella build finale.
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "public"),
            to: path.resolve(__dirname, "build"),
            globOptions: { ignore: ["**/index.html"] },
            noErrorOnMissing: true,
          },
        ],
      }),
    ],
    devtool: isProduction ? false : "source-map",
    devServer: {
      static: path.resolve(__dirname, "public"),
      // Il server di sviluppo resta raggiungibile soltanto dal PC locale.
      host: "127.0.0.1",
      port: 3000,
      open: true,
      hot: true,
      historyApiFallback: true,
    },
    performance: {
      hints: false,
    },
  };
};
