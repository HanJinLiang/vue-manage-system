import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
//路由用来切换组件 单页面
export default new Router( {
    routes:[
        {
            path:'/',
            component: () => import('../views/Main.vue'),
            children:[
                {
                    path:'/',
                    name:'home',
                    component: () => import('../views/home/Home'),
                },
                {
                    path:'/user',
                    name:'user',
                    component: () => import('../views/user/UserManage'),
                },
                {
                    path:'/video',
                    name:'video',
                    component: () => import('../views/video/VideoManage'),
                },
                {
                    path:'/page1',
                    name:'page1',
                    component: () => import('../views/other/OtherPager1'),
                },
                {
                    path:'/page2',
                    name:'page2',
                    component: () => import('../views/other/OtherPager2'),
                }

            ]
        },
        {
            path:'/login',
            component: () => import('../views/login/Login'),
        }
    ]
})