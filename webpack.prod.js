// cofiguraciones para webpack production
const HtmlWebpack = require("html-webpack-plugin");
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizer = require("css-minimizer-webpack-plugin");
const Terser = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  output: {
    clean: true, //borra y crea nuevamnte
    filename: "main.[contenthash].js", //nombro el archivo main
  },
  module: {
    rules: [
      //las reglas se hacen en secuencia
      {
        test: /\.html$/, // hecho con regexp
        loader: "html-loader",
        options: {
          sources: false,
        },
      },
      {
        test: /\.css$/, //para todos os archivos css
        exclude: /styles.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /styles.css$/, //para agregar este archivo especifico en div
        use: [MiniCssExtract.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/, //consulta por varios tipos de img
        loader: "file-loader",
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizer(), new Terser()],
  },
  plugins: [
    new HtmlWebpack({
      title: "Mi primera webpack app",
      filename: "index.html", //le pone el nombre a como se llamara el archivo
      template: "./src/index.html", // de donde se guie
    }),
    new MiniCssExtract({
      filename: "[name].[fullhash].css", // podria poner styles.css,  poner [name] usa el mismo nombre
      // poner stlyes.[fullhash].css daria un hash nuevo cada vez que ejecute
      ignoreOrder: false,
    }),
    new CopyPlugin({
      patterns: [{ from: "src/assets/", to: "assets/" }],
    }),
  ],
};
