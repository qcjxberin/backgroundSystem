import axios from 'axios'
import {baseConfig, baseURL} from '@/util/config'
import {toLowerCase} from '@/util/util'
import store from '@/store/index'

interface HttpTypes {
	uri: string,
	type?: string,
	params?: object,
	bool?: boolean,
	header?: object
}

// 全局拦截请求，获取到错误
axios.interceptors.response.use((response: any) => {
	// 业务错误处理
	if (response && response.hasOwnProperty('data')) {
		const data = response.data
		if (data && data.hasOwnProperty('code')) {
			const code = (parseInt as any)(data.code)
			if (code !== 1000) {
				let err = ''
				switch (code) {
					case 4995:
						err = '参数错误'
						break
					case 4996:
						err = '请重新登录'
						break
					case 4997:
						err = '签名错误'
						break
					case 4998:
						err = '系统错误'
						err = `${data.msg}(${data.code})`
						break
					default:
						err = `未知错误 code:${data.code}`
						break
				}
				// Toast(err)
				return Promise.reject(response)
			} else {
				return response
			}
		}
		return response
	}
}, (err: any) => {
	// 系统错误
	if (err && err.response) {
		switch (err.response.status) {
			case 400:
				err.message = '请求错误(400)'
				break
			case 401:
				err.message = '未授权，请重新登录(401)'
				break
			case 403:
				err.message = '拒绝访问(403)'
				break
			case 404:
				err.message = '请求出错(404)'
				break
			case 408:
				err.message = '请求超时(408)'
				break
			case 500:
				err.message = '服务器错误(500)'
				break
			case 501:
				err.message = '服务未实现(501)'
				break
			case 502:
				err.message = '网络错误(502)'
				break
			case 503:
				err.message = '服务不可用(503)'
				break
			case 504:
				err.message = '网络超时(504)'
				break
			case 505:
				err.message = 'HTTP版本不受支持(505)'
				break
			default:
				err.message = `连接出错(${err.response.status})!`
		}
	} else {
		err.message = '连接服务器失败!'
	}
	// Toast(err.message)
	return Promise.reject(err)
})
export const http = (option: HttpTypes): any => {
	const options = {
		uri: option.uri ? option.uri : '', // 路由
		type: option.type ? option.type : 'post', // 请求类型
		params: option.params ? option.params : {}, // 数据
		bool: option.bool ? option.bool : false,
		header: option.header ? option.header : {}
	}
	const token = store.getters.getToken
	console.log(store.getters.getToken)
	baseConfig.url = baseURL + options.uri
	baseConfig.method = options.type ? options.type : baseConfig.method
	baseConfig.headers.Authorization = token ? token : 'null'
	if (toLowerCase(baseConfig.method) === 'post') {
		baseConfig.data = JSON.stringify(option)
	} else if (toLowerCase(baseConfig.method) === 'get' && options.bool) {
		baseConfig.url += '/' + options.params
	} else if (toLowerCase(baseConfig.method) === 'get' && !options.bool) {
		baseConfig.params = options.params
	}
	return new Promise((resolve: any, reject: any) => {
		axios(baseConfig).then((response: any) => {
			resolve(response.data)
		}).catch((error: any) => {
			reject(error)
		})
	})
}
