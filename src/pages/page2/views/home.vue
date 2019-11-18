<template>
    <div>
        <h2>页面2-首页</h2>
        <div>
            <a href="/">首页</a> |
            <a href="/page1">页面1</a> |
            <router-link to="/about">页面2-关于</router-link> |
            <Back />
        </div>
        <img src="@/assets/logo.png" alt="vue">
    </div>
</template>

<script>
export default {
    name: 'home',
    methods: {
        back () {
            this.$router.go(-1)
        }
    }
}
</script>

<style>

</style>
