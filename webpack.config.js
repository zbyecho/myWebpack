/*
 * @Date: 2020-09-30 19:08:03
 * @LastEditors: zhangbaoyan
 * @LastEditTime: 2020-10-01 10:29:38
 * @FilePath: /study/webpack/myWebpack/webpack.config.js
 */

const path = require('path')

const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    // 模式
    mode: 'development', 

    // 入口
    entry: './src/main.js',

    // 出口
    output: {
        filename: 'js/[name][chunkhash].js',
        path: path.resolve(__dirname, 'dist')
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
                loader: 'style-loader!css-loader!postcss-loader',
            },
            {
                test: /\.less$/i,
                loader: 'style-loader!css-loader!less-loader'
                    
                
            },
            // img
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10240
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            },
            
        ]
    },

    // 插件
    plugins: [
        // new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'vue',
            filename: 'index.html',
            template: 'src/plugin/index.html'
        }),
        new VueLoaderPlugin()
    ],

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },

    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 9000,
        open: true
    }

}