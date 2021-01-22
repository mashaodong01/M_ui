const HtmlWebpackPlugin = require("html-webpack-plugin"),
  path = require("path");
let utils = {
  assetsPath: function (_path) {
    const assetsSubDirectory = "static";
    return path.posix.join(assetsSubDirectory, _path);
  },
};
module.exports = {
  mode: "development",
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/index.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: __dirname + "node_modules",
        include: __dirname + "src",
        options: {
          presets: ["env"],
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              plugin: function () {
                return [autoprefixer("last 5 versions")];
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("img/[name].[hash:7].[ext]"),
        },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.tpl/,
        loader: "ejs-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
      filename: "index.html",
      template: path.resolve(__dirname, "src/index.html"),
      excludeChunks: ["node_modules"],
      files: {
        js: ["js/index.js"],
        chunks: {
          main: {
            entry: "dist/bundle.js",
          },
        },
      },
    }),
  ],
  devServer: {
    watchOptions: {
      ignored: /node_modules/,
    },
    host: "localhost",
    port: 3000,
  },
};

