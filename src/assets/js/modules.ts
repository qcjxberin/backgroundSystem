const modules = [
	{
		content: '用户管理',
		iconfont: '',
		leval: 1,
		child: [
			{
				leval: 2,
				content: '用户列表',
				url: '/users'
			}
		]
	},
	{
		content: '角色管理',
		iconfont: '',
		leval: 1,
		child: [
			{
				leval: 2,
				content: '角色列表',
				url: '/roles'
			}
		]
	},
	{
		content: '账户管理',
		iconfont: '',
		leval: 1,
		child: [
			{
				leval: 2,
				content: '账户列表',
				url: '/account'
			}
		]
	},
	{
		leval: 1,
		content: '权限管理',
		iconfont: '',
		child: [
			{
				leval: 2,
				content: '权限列表',
				url: '/jurisdiction'
			}
		]
	},
	{
		leval: 1,
		content: '结算管理',
		iconfont: '',
		child: [
			{
				leval: 2,
				content: '结算列表',
				url: '/settlement'
			}
		]
	},
	{
		leval: 1,
		content: '版本管理',
		iconfont: '',
		child: [
			{
				leval: 2,
				content: '版本列表',
				url: '/version'
			}
		]
	},
	{
		content: '意见反馈',
		iconfont: '',
		leval: 1,
		child: [
			{
				leval: 2,
				content: '反馈列表',
				url: '/feedback'
			}
		]
	}
]
export default modules
