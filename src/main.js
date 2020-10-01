/*
 * @Date: 2020-10-01 08:39:09
 * @LastEditors: zhangbaoyan
 * @LastEditTime: 2020-10-01 09:57:55
 * @FilePath: /study/webpack/myWebpack/src/main.js
 */

import Vue from 'vue'
import App from './views/App.vue'
new Vue({
    render: h => h(App)
}).$mount('#app')