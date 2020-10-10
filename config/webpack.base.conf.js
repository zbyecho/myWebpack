/*
 * @Date: 2020-10-10 14:10:00
 * @LastEditors: zhangbaoyan
 * @LastEditTime: 2020-10-10 15:19:13
 * @FilePath: /study/webpack/myWebpack/config/webpack.base.conf.js
 */

const path = require('path')

const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// 开启缓存
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')

// 进度条
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {

    // 入口
    entry: './src/main.js',

    // 出口
    output: {
        filename: 'js/[name][chunkhash].js',
        path: path.resolve(__dirname, '../dist')
    },

    // loader 
    module: {
        rules: [
            // VUE
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/, // 正则校验 以js结尾 都要经过loader处理
                exclude: /(node_modules|bower_components)/, // 不要处理的文件
                use: { // 注册loader
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            // CSS
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ]
            },
            {
                test: /\.less$/i,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                ]    
            },
            // img
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            esModule: false,  // 不加的话会有这种情况 img属性src="[object Module]
                            limit: 10240, // 当大于100kb时候，将文件打包到publicPath中 小于的时候会成为base64格式
                        }
                    },
                    // {
                    //     loader: 'file-loader',
                    //     options: {
                    //         outputPath: '/images', // 将文件打包到哪里
                    //         name: '[name].[ext]?[hash]'
                    //     }
                    // }
                ]
                
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            esModule: false,
                            limit: 10000,
                        }
                    },
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: '/fonts',
                            name: '[name].[ext]?[hash]'
                        }
                    }
                ]
              
                
            },
            
        ]
    },


    // 插件
    plugins: [
        // new webpack.ProgressPlugin(),
        new ProgressBarPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'vue',
            filename: 'index.html',
            template: 'src/plugin/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '/css/[name].css'
        }),
        new VueLoaderPlugin(),
        new HardSourceWebpackPlugin()
        
        
    ],

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
}