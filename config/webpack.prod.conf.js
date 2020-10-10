/*
 * @Date: 2020-10-10 14:10:53
 * @LastEditors: zhangbaoyan
 * @LastEditTime: 2020-10-10 15:06:30
 * @FilePath: /study/webpack/myWebpack/config/webpack.prod.conf.js
 */
const { merge } = require('webpack-merge')
const baseConf = require('./webpack.base.conf')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(baseConf, {
    mode: 'production',
    
    plugins: [
        new UglifyjsWebpackPlugin()
    ]
   
    // 提取第三方库和样板代码
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all',
    //     }
    // },
})