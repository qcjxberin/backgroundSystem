import {http} from '@/util/ajax'

export default {
    login(params: object) {
        return http({
            uri: '/login',
            type: 'post',
            params
        }) // 登录
    },
    me(params: object) {
        return http({
            uri: '/me',
            type: 'get',
            params
        }) // 获取个人信息
    },
    logout (params: object) {
        return http({
            uri: '/logout',
            type: 'get',
            params,
            bool: true
        })
    }
}
