import { createRouter, createWebHistory } from "vue-router";

// 路由规则：存储路由数组,每个路由是一个对象，对象里path 是访问路径；component 是实际位置
const routes = [
    {
        path:"/",
        // 定义别名，都可以跳转到对应页面
        alias:"/home",
        component: () => import("@/views/index.vue")
    },
    {
        path:"/content",
        // 定义多个别名
        alias:["/cont","/con"],
        component: () => import("../views/content.vue")
    },
    {
        path:"/user/:id/:title",
        // 定义路径名称
        name:"member",
        component: () => import("../views/content.vue")
    },
]

const router = createRouter({
    history: createWebHistory(),
    // 路由规则
    routes
})

export default router