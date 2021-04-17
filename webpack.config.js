const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/app.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/dist/",
        filename: "js/app.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "env", 'react'
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }, {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    // 将 JS 字符串生成为 style 节点
                    fallback: "style-loader",
                    use: [
                        // 将 CSS 转化成 CommonJS 模块
                        "css-loader",
                        // 将 Sass 编译成 CSS
                        "sass-loader"
                    ]
                })
            }, {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: "resource/[name].[ext]"
                        },
                    },
                ],
            }, {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: "resource/[name].[ext]"
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        // 处理html 文件
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        // 独立css文件
        new ExtractTextPlugin("css/[name].css"),
        //提出公共模块
        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            filename: "js/base.js"
        })
    ],
    devServer: {
        port: 8086
    }

}
