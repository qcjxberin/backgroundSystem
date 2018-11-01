import axios from 'axios';
import { baseConfig, baseURL } from '@/util/config';
import { toLowerCase } from '@/util/util';
import store from '@/store/index';
// 网络请求处理
export function axiosHttp(url, type, option, bool) {
    const token = store.getters.getToken;
    console.log(store.getters.getToken);
    baseConfig.url = baseURL + url;
    baseConfig.method = type ? type : baseConfig.method;
    baseConfig.headers.Authorization = token ? token : 'null';
    if (toLowerCase(baseConfig.method) === 'post') {
        baseConfig.data = JSON.stringify(option);
    }
    else if (toLowerCase(baseConfig.method) === 'get' && bool) {
        baseConfig.url += '/' + option;
    }
    else if (toLowerCase(baseConfig.method) === 'get' && !bool) {
        baseConfig.params = option;
    }
    return new Promise((resolve, reject) => {
        axios(baseConfig).then((response) => {
            resolve(response.data);
        }).catch((error) => {
            reject(error);
        });
    });
}
//# sourceMappingURL=ajax.js.map