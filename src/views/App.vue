<!--
 * @Date: 2020-10-01 09:53:33
 * @LastEditors: zhangbaoyan
 * @LastEditTime: 2020-10-01 10:28:55
 * @FilePath: /study/webpack/myWebpack/src/views/App.vue
-->
<template>
    <div class="app">
        {{msg}}
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