const route: any[] = [
    {
        path: '/',
        component: (resolve: any) => require(['@/views/Home.vue'], resolve),
        children: [
            {
                path: '/',
                redirect: 'dash'
            },
            {
                path: '/dash',
                name: 'dash',
                component: (resolve: any) => require(['@/components/dash.vue'], resolve)
            },
            {
                path: '/users',
                name: 'users',
                component: (resolve: any) => require(['@/pages/user/users.vue'], resolve)
            },
            {
                path: '/roles',
                name: 'roles',
                component: (resolve: any) => require(['@/pages/role/roles.vue'], resolve)
            },
            {
                path: '/account',
                name: 'account',
                component: (resolve: any) => require(['@/pages/account/account.vue'], resolve)
            },
            {
                path: '/jurisdiction',
                name: 'jurisdiction',
                component: (resolve: any) => require(['@/pages/jurisdiction/jurisdiction.vue'], resolve)
            },
            {
                path: '/settlement',
                name: 'settlement',
                component: (resolve: any) => require(['@/pages/settlement/settlement.vue'], resolve)
            },
            {
                path: '/version',
                name: 'version',
                component: (resolve: any) => require(['@/pages/version/version.vue'], resolve)
            },
            {
                path: '/feedback',
                name: 'feedback',
                component: (resolve: any) => require(['@/pages/feedback/feedback.vue'], resolve)
            }

        ]
    }, {
        path: '/login',
        name: 'login',
        component: (resolve: any) => require(['@/components/login.vue'], resolve)
    },
    {
        path: '/401',
        name: 'errorDenied',
        meta: {},
        component: (resolve: any) => require(['@/pages/errorPage/errorDenied.vue'], resolve)
    },
    {
        path: '/500',
        name: 'errorServer',
        meta: {},
        component: (resolve: any) => require(['@/pages/errorPage/errorServer.vue'], resolve)
    },
    {
        path: '*',
        name: 'errorNotFind',
        meta: {},
        component: (resolve: any) => require(['@/pages/errorPage/errorNotFind.vue'], resolve)
    }
]
export default route
