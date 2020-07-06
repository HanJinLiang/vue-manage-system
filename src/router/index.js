import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
//路由用来切换组件 单页面
export default new Router( {
    routes:[
        {
            path:'/',
            component: () => import('../views/Main.vue')
        }
    ]
})