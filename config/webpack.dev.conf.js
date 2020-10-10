/*
 * @Date: 2020-09-30 19:08:03
 * @LastEditors: zhangbaoyan
 * @LastEditTime: 2020-10-10 15:04:24
 * @FilePath: /study/webpack/myWebpack/config/webpack.dev.conf.js
 */
const path = require('path')
const { merge } = require('webpack-merge')
const baseConf = require('./webpack.base.conf')

module.exports = merge(baseConf, {
    devtool: '#inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 9000,
        open: true
    },
})