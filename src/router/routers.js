// import { createRouter } from "vue-router";
import {  createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: '/',
        component: () => import('@components/HelloWorld.vue')  // 首页组件
    }, {
        path: '/cream',
        component: () => import('@components/Cream.vue')  // 
    },{
        path: '/2',
        component: () => import('@components/Test.vue')  // 关于我们组件
    }
]

const router = createRouter({
    history: createWebHistory(), // 路由类型
    routes // short for `routes: routes`
})


export default router
