const baseConfig = require("./webpack.config.base.js");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require("path");

const proConfig = {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[chunkhash].js",
    publicPath: "./",
    // publicPath: "http://... ...",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // loader执行顺序是从后向前
        // css-loader 言简意赅 把css模块内容加到js模块
        // css in js方式
        // style-loader 从js中提取css的loader在html中创建
        include: path.resolve(__dirname, "./src"), // 设置编译范围，构建更快
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugin: function () {
                return [autoprefixer("last 5 versions")];
              },
            },
          },
        ],
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
      },
      // 推荐用url-loader   因为它支持limit
      {
        // url-loader有file-loader中所有的功能，完全可替代它，还增加了自己的功能
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name]_[hash:6].[ext]", // 打包后文件名————原名_6位hash.原后缀
            outputPath: "static/images/", // 设置一个文件夹路径
            limit: 2 * 1024, // 小于2k的图片被转成Base64格式
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // 解析es6
          options: {
            // 语法转换插件 preset-env
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    // 兼容浏览器版本
                    edge: "17",
                    firefox: "60",
                    chrome: "67",
                    safari: "11.1",
                  },
                  corejs: 2,
                  useBuiltIns: "usage",
                },
              ],
            ],
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      // 把css提取成独立的css文件，同时上面的style-loader要换成MiniCssExtractPlugin.loader
      filename: "[name].[hash].css",
    }),
    new HtmlWebpackPlugin({
      // 常用配置
      title: "首页", // 还需要在title标签中设置<title><%= htmlWebpackPlugin.options.title%></title>
      template: "./src/index.html",
      filename: "index.html",
      hash: true,
      favicon: path.resolve("src/favicon.ico"),
      // 压缩HTML文件
      minify: {
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: true, // 删除空白符和换行
        minisyCSS: true, // 压缩内联css
      },
    }),
    // 压缩css，利用cssnano
    new OptimizeCSSAssetsPlugin({
      cssProcessor: require("cssnano"),
      cssProcessorOptions: {
        discardComments: {
          removeAll: true,
        },
      },
    }),
  ],
};
module.exports = merge(baseConfig, proConfig);
