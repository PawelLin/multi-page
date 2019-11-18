<template>
    <div>
        <h2>登录页面</h2>
        <div><input type="text"></div>
        <div><input type="password"></div>
        <button type="submit" @click="handleSubmit">登录</button>
    </div>
</template>

<script>
export default {
    name: 'login',
    methods: {
        handleSubmit () {
            this.$router.replace({ name: 'home' })
        }
    }
}
</script>

<style>

</style>
