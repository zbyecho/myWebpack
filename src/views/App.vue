<!--
 * @Date: 2020-10-01 09:53:33
 * @LastEditors: zhangbaoyan
 * @LastEditTime: 2020-10-10 10:55:24
 * @FilePath: /study/webpack/myWebpack/src/views/App.vue
-->
<template>
    <div class="app">
        {{msg}}
        <img src="../assets/img/logo.png" alt="" srcset="">
    </div>
</template>

<script>
    export default {
        name: 'index',
        data() {
            return {
                msg: 'hello world'
            }
        },
    }
</script>

<style lang="less" scoped>
    .app {
        color: red;
    }
</style>