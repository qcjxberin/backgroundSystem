import InitConfig from '@/util/ajax'

export default {
	login (params: object) {
		return new InitConfig({
			url: '/login',
			type: 'post',
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
