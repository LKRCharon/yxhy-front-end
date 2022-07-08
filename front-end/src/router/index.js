//引入路由对象
import { createRouter, createWebHistory } from 'vue-router'

//vue2 mode history vue3 createWebHistory
//vue2 mode  hash  vue3  createWebHashHistory
//vue2 mode abstact vue3  createMemoryHistory

const routes = [
    {
        path: '/',
        name:'home',
        component: () => import('../pages/homePage.vue')
    }, 
    {
        path:'/drawboard',
        name:'drawboard',
        component:()=>import('../pages/drawboard.vue')
    }
]

const router = createRouter({
    history: createWebHistory('/yxhy-front-end'),
    routes
})

//导出router
export default router