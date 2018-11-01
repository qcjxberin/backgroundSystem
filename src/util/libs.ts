import Vue from 'vue'
import iView from 'iview'
import moment from 'moment'
import { sync } from 'vuex-router-sync'
import '@/registerServiceWorker'
import router from '@/router'
import store from '@/store'
import App from '@/App.vue'
import '@/filters'
import '@/util/viewPort.ts'
import 'iview/dist/styles/iview.css'

Vue.use(iView)
sync(store, router)
// Object.defineProperty(Vue.prototype, '$moment', {value: moment})
const libs: any = [
    {
        key: 'moment',
        value: moment
        // 时间处理函数
    }, {
        key: 'Router',
        value: router
    }
]
/**
 * 注册第三方库
 */
Vue.use({
    install ( _vue: any, options: any ) {
        libs.map(( i: any, index: number ) => {
            _vue.prototype['$' + i.key] = i.value
        })
    }
})
export const renderObj = {
    router,
    store,
    render: ( h: any ) => h(App)
}
