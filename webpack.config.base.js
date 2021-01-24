const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  entry: "./src/js/index.js",
  module: {
    rules: [
      {
        test: /\.css$/,
        // loader执行顺序是从后向前
        // css-loader 言简意赅 把css模块内容加到js模块
        // css in js方式
        // style-loader 从js中提取css的loader在html中创建
        include: __dirname + "src", // 设置编译范围，构建更快
        use: ["style-loader", "css-loader"],
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
    // 查找第三方依赖
    modules: [path.resolve(__dirname, "./node_modules")],
    alias: {
      // 减少查找过程
      // 起别名
      "@": path.resolve(__dirname, "./src/css"),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
};
