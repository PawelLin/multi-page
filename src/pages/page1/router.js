import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
    mode: 'history',
    base: '/page1',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./views/home.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./views/about.vue')
        }
    ]
})
