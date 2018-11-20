import axios from 'axios'
import {toLowerCase} from '@/util/util'

let _servers = ''
if (process.env.NODE_ENV === 'development') {
	_servers = 'http://192.168.0.22'
} else if (process.env.NODE_ENV === 'production') {
	_servers = 'http://139.196.115.177'
}
// 全局拦截请求，获取到错误
axios.interceptors.response.use((response: any) => {
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
				alert(err)
				// Toast(err)
				return Promise.reject(response)
			} else {
				return response
			}
		}
		return response
	}
}, (err: any) => {
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
	alert(err.message)
	// Toast(err.message)
	return Promise.reject(err)
})

class InitConfig {
	protected baseConfig: any = {
		url: '',
		method: 'post',
		baseURL: `${_servers}:8080`,
		headers: {
			'Content-Type': 'application/json;charset=UTF-8'
		},
		params: {},
		data: {},
		timeout: '',
		withCredentials: false,
		responseType: 'json',
		maxContentLength: 3600,
		validateStatus (status: any) {
			return status >= 200 && status < 300
		}
	}
	protected bool: boolean = false

	constructor (option: any) {
		this.baseConfig.url = option.url ? this.baseConfig.url + option.url : this.baseConfig.url
		this.baseConfig.method = option.type ? option.type : this.baseConfig.method
		this.baseConfig.params = option.params ? option.params : this.baseConfig.params
		this.baseConfig.headers = option.headers ? option.headers : this.baseConfig.headers
		this.bool = option.bool ? option.bool : false
		return this.http()
	}

	protected http = (): any => {
		if (toLowerCase(this.baseConfig.method) === 'post') {
			this.baseConfig.data = JSON.stringify(this.baseConfig.params)
		} else if (toLowerCase(this.baseConfig.method) === 'get' && this.bool) {
			this.baseConfig.url += '/' + this.baseConfig.params
		} else if (toLowerCase(this.baseConfig.method) === 'get' && !this.bool) {
			this.baseConfig.params = this.baseConfig.params
		}
		return new Promise((resolve: any, reject: any) => {
			axios(this.baseConfig).then((response: any) => {
				resolve(response.data)
			}).catch((error: any) => {
				reject(error)
			})
		})
	}
}

export default InitConfig
