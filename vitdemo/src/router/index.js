import { createRouter, createWebHistory } from "vue-router";

// 路由规则：存储路由数组,每个路由是一个对象，对象里path 是访问路径；component 是实际位置
const routes = [
    {
        path:"/",
        component: () => import("@/views/index.vue")
    },
    {
        path:"/content",
        component: () => import("../views/content.vue")
    },
]

const router = createRouter({
    history: createWebHistory(),
    // 路由规则
    routes
})

export default router