import Vue from 'vue'
import Router from 'vue-router'
//引入路由
import approvalsRouter from './modules/approvals'
import structureRouter from './modules/structure'
import staffRouter from './modules/staff'
import setupRouter from './modules/setup'
import attendancesRouter from './modules/attendances'
import salarysRouter from './modules/salarys'
import settingRouter from './modules/setting'
import socialRouter from './modules/social'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [{
        path: '/login',
        component: () =>
            import ('@/views/login/index'),
        hidden: true
    },
    {
        path: '/404',
        component: () =>
            import ('@/views/404'),
        hidden: true
    },
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [{
            path: 'dashboard',
            name: 'Dashboard',
            component: () =>
                import ('@/views/dashboard/index'),
            meta: { title: 'Dashboard', icon: 'dashboard' }
        }]
    },
    { path: '*', redirect: '/404', hidden: true }
]

// 动态路由
export const asyncRoutes = [
    staffRouter,
    approvalsRouter,
    structureRouter,
    setupRouter,
    attendancesRouter,
    salarysRouter,
    settingRouter,
    socialRouter
]

const createRouter = () => new Router({
    mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: [...constantRoutes, ...asyncRoutes]
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
}

export default router