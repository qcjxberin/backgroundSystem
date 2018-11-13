import axios from 'axios'
import { baseConfig, baseURL } from '@/util/config'
import { toLowerCase } from '@/util/util'
import store from '@/store/index'
// 网络请求处理
/**
 *
 * @param option
 * 网络请求参数
 */
export function http ( option: any ) {
    const options = {
        uri: option.uri ? option.uri : '', // 路由
        type: option.type ? option.type : 'post', // 请求类型
        params: option.params ? option.params : '', // 数据
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
    return new Promise(( resolve, reject ) => {
        axios(baseConfig).then(( response: any ) => {
            resolve(response.data)
        }).catch(( error: any ) => {
            reject(error)
        })
    })
}
