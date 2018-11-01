import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import { isEmpty } from '@/util/util'

Vue.use(Router)
const route: any[] = [
    {
        path: '/',
        component: () => import('@/views/Home.vue'),
        children: [
            {
                path: '/',
                redirect: 'dash'
            },
            {
                path: '/dash',
                name: 'dash',
                component: () => import('@/components/dash.vue')
            },
            {
                path: '/users',
                name: 'users',
                component: () => import('@/pages/user/users.vue')
            },
            {
                path: '/roles',
                name: 'roles',
                component: () => import('@/pages/role/roles.vue')
            },
            {
                path: '/account',
                name: 'account',
                component: () => import('@/pages/account/account.vue')
            },
            {
                path: '/jurisdiction',
                name: 'jurisdiction',
                component: () => import('@/pages/jurisdiction/jurisdiction.vue')
            },
            {
                path: '/settlement',
                name: 'settlement',
                component: () => import('@/pages/settlement/settlement.vue')
            },
            {
                path: '/version',
                name: 'version',
                component: () => import('@/pages/version/version.vue')
            },
            {
                path: '/feedback',
                name: 'feedback',
                component: () => import('@/pages/feedback/feedback.vue')
            }

        ]
    }, {
        path: '/login',
        name: 'login',
        component: () => import('@/components/login.vue')
    },
    {
        path: '/401',
        name: 'errorDenied',
        meta: {},
        component: () => import('@/pages/errorPage/errorDenied.vue')
    },
    {
        path: '/500',
        name: 'errorServer',
        meta: {},
        component: () => import('@/pages/errorPage/errorServer.vue')
    },
    {
        path: '*',
        name: 'errorNotFind',
        meta: {},
        component: () => import('@/pages/errorPage/errorNotFind.vue')
    }
]
const router: Router = new Router({
    routes: route,
    mode: 'history',
    scrollBehavior: ( to: any, from: any, savedPosition: any ) => {
        return savedPosition || {x: 0, y: 0}
    }
})
// 未登录直接跳转登录界面
router.beforeEach(( to: any, from: any, next: any ) => {
    const isload = store.getters.getToken
    if (!isEmpty(isload)) {
        next()
    } else {
        if (to.path === '/login') { // 这就是跳出死循环的关键
            next()
        } else {
            next('/login')
        }
    }
})
export default router
