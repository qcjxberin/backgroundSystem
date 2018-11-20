import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import {isEmpty} from '@/util/util'
import route from '@/router/routes'

Vue.use(Router)

const router: Router = new Router({
	routes: route,
	mode: 'history',
	base: process.env.BASE_URL,
	scrollBehavior: (to: any, from: any, savedPosition: any) => {
		return savedPosition || {x: 0, y: 0}
	}
})
// 未登录直接跳转登录界面
router.beforeEach((to: any, from: any, next: any) => {
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
