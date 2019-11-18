<template>
    <div>
        <h2>首页</h2>
        <div>
            <a href="/page1">页面1</a> |
            <a href="/page2">页面2</a> |
            <router-link to="login">登录</router-link> |
            <Back />
        </div>
        <img src="@/assets/logo.png" alt="vue">
    </div>
</template>

<script>
export default {
    name: 'home'
}
</script>

<style>

</style>
