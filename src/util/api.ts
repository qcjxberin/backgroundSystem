import InitConfig from '@/util/ajax'

export default {
	login (params: object) {
		return new InitConfig({
			url: '/login',
			type: 'post',
			params
		})
	},
	me (params: object) {
		return new InitConfig({
			url: '/me',
			type: 'get',
			params
		})
	},
	logout (params: object) {
		return new InitConfig({
			url: '/logout',
			type: 'get',
			params,
			bool: true
		})
	}
}
