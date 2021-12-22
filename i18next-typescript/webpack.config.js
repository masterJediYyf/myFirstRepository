const path = require('path');
const basepath = __dirname; // 项目的根路径
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    context: path.resolve(basepath, 'src'), // 打包上下文
    resolve: {
        // 自动解析一下拓展，当我们要引入src/index.ts的时候，只需要写src/index即可
        // 后面我们讲TS模块解析的时候，写src也可以
        extensions: ["ts",".tsx",".js"]
    },
    entry: {
        app: ["./index.tsx"]
    },
    output: {
        filename: "[name].[chunkhash].js"
        // filename: "[name].js"
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "babel-loader",
            exclude: /node_modules/ // 排除
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.html",
            scriptLoading: "blocking",
        }),

    ]
}