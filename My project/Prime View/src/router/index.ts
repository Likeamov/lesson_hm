import { createRouter, createWebHistory } from "vue-router";
/*
import type 语法：这是 TypeScript 3.8 引入的新语法，其目的是把类型导入和值导入区分开。
RouteRecordRaw 类型：这是 vue-router 库定义的一个类型，代表路由记录的原始格式。
*/
import type { RouteRecordRaw} from 'vue-router'

// : 声明一个类型 RouteRecordRaw 一个route 类型 RouteRecordRaw[] route数组
const rootRoutes :RouteRecordRaw[] = [
    {
        path: 'home',
        name: 'Home',
        meta:{
            title: '首页',
            cache:true
        },
        component: () => import('@/views/Home/Home.vue')
    },
    {
        path: 'assistant',
        name: 'Assistant',
        meta:{
            title: 'ai助手',
            cache:true
        },
        component: () => import('@/views/Assistant/Assistant.vue')
    },
    {
        path:'video',
        name: 'Video',
        meta:{
            title: '好片',
            cache:true
        },
        component: () => import('@/views/Video/Video.vue')
    },
    {
        path:'mine',
        name: 'Mine',
        meta:{
            title: '个人中心',
            cache:false
        },
        component: () => import('@/views/Mine/Mine.vue')
    }

]

const routes :RouteRecordRaw[] = [
    {
        path: '/',
        name: 'App',
        component: () => import('@/views/KeepAlive.vue'),
        redirect: '/home',
        children: rootRoutes
    },
    {
        path:'/login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
         // 每次路由切换时，将页面滚动到顶部
        return { top: 0 }
    }
})

router.beforeEach((to, from, next)=>{
    
    document.title = to.meta.title as string;
    next()
})

export default router
