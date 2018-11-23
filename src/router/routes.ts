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
				path: '/doctorManagement/doctorManagementList',
				name: 'doctorManagementList',
				component: () => import('@/pages/doctorManagement/doctorManagementList.vue') // 医生管理List表
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
export default route
