import Vue from 'vue'
import router from './router'
import importComponent from '@/components'
import App from './App.vue'
import '@/common/main.css'

Vue.config.productionTip = false
importComponent(Vue)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
