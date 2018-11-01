import { axiosHttp } from '@/util/ajax'

export default {
    login ( parmas: any, bool?: boolean ) {
        return axiosHttp('/login', 'post', parmas, bool) // 登录
    },
    me ( parmas: any, bool?: boolean ) {
        return axiosHttp('/me', 'get', parmas, bool) // 获取个人信息
    },
    logout ( parmas: any, bool?: boolean ) {
        return axiosHttp('/logout', 'get', parmas, bool) // 登出
    }
}
