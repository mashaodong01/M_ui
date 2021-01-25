const HtmlWebpackPlugin = require("html-webpack-plugin"),
    path = require("path");
let utils = {
    assetsPath: function(_path) {
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
        rules: [{
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
                use: [{
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugin: function() {
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
                    name: utils.assetsPath("images/[name].[hash:7].[ext]"),
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
    resolve: {
        // 查找第三方依赖
        modules: [path.resolve(__dirname, "./node_modules")],
        alias: {
            // 减少查找过程
            // 起别名
            "@": path.resolve(__dirname, "./src"),
        },
        // 设置在加载模块时，可以不写后缀，按下面的顺序依次查找
        // 会消耗一些性能，推荐写代码直接写上后缀名
        extensions: [".js", ".json", ".jsx"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            },
            filename: "index.html",
            template: path.resolve(__dirname, "src/index.html"),
            favicon: path.resolve('src/favicon.ico'),
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