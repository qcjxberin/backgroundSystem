import Vue from 'vue'
import Vuex from 'vuex'
import { setSession, getSession, isEmpty } from '@/util/util'

Vue.use(Vuex)
const types = {
    SET_TOKEN: 'SET_TOKEN', // token
    SET_DATA: 'SET_DATA', // userData
    SET_ASIDESHOW: 'SET_ASIDESHOW', // 侧边栏显示
    SET_ROUTERLIST: 'SET_ROUTERLIST'
}
const state: any = {
    token: 'null',
    data: {},
    asideShow: true,
    routerList: []
}
const mutations = {
    [types.SET_TOKEN] ( _state: any, token: string ) {
        setSession('sessionToken', token)
        _state.token = token
    },
    [types.SET_DATA] ( _state: any, data: any ) {
        setSession('sessionData', data)
        _state.data = data
    },
    [types.SET_ASIDESHOW] ( _state: any ) {
        _state.asideShow = !_state.asideShow
    },
    [types.SET_ROUTERLIST] ( _state: any, data: any ) {
        setSession('routerList', data)
        _state.routerList = data
    }
}
const actions = {
    setToken: ( _vuex: any, data: any ) => {
        _vuex.commit(types.SET_TOKEN, data.token)
    },
    setData: ( _vuex: any, data: any ) => {
        _vuex.commit(types.SET_DATA, data.data)
    },
    setAsideShow: ( _vuex: any ) => {
        _vuex.commit(types.SET_ASIDESHOW)
    },
    setRouterList: ( _vuex: any, data: any ) => {
        _vuex.commit(types.SET_ROUTERLIST, data.routerList)
    }
}
const getters = {
    getToken: ( _state: any ) => {
        if (isEmpty(_state.token)) {
            return getSession('sessionToken')
        } else {
            return _state.token
        }
    },
    getData: ( _state: any ) => {
        if (isEmpty(_state.data)) {
            return getSession('sessionData')
        } else {
            return _state.data
        }
    },
    getAsideShow: ( _state: any ) => {
        return _state.asideShow
    },
    getRouterList: ( _state: any ) => {
        if (isEmpty(_state.routerList)) {
            return getSession('routerList') ? getSession('routerList') : []
        } else {
            return _state.routerList
        }
    }
}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    strict: process.env.NODE_ENV !== 'production'
})
