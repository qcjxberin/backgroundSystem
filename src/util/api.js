import { axiosHttp } from '@/util/ajax';
export default {
    login(parmas, bool) {
        return axiosHttp('/login', 'post', parmas, bool); // 登录
    },
    me(parmas, bool) {
        return axiosHttp('/me', 'get', parmas, bool); // 获取个人信息
    },
    logout(parmas, bool) {
        return axiosHttp('/logout', 'get', parmas, bool); // 登出
    }
};
//# sourceMappingURL=api.js.map