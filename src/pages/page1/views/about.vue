<template>
    <div>
        <h2>页面1-关于</h2>
        <div>
            <a href="/">首页</a> |
            <a href="/page2">页面2</a> |
            <router-link to="/">页面1-首页</router-link> |
            <Back />
        </div>
        <img src="@/assets/logo.png" alt="vue">
    </div>
</template>

<script>
export default {
    name: 'about',
    methods: {
        back () {
            this.$router.go(-1)
        }
    }
}
</script>

<style>

</style>
