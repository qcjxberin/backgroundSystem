import {http} from '@/util/ajax'

export default {
    login(parma: any) {
        return http({
            uri: '/login',
            type: 'post',
            parmas: parma
        }) // 登录
    },
    me(parma: any) {
        return http({
            uri: '/me',
            type: 'get',
            parmas: parma
        }) // 获取个人信息
    },
    logout (parma: any) {
        return http({
            uri: '/logout',
            type: 'get',
            params: parma,
            bool: true
        })
    }
}
