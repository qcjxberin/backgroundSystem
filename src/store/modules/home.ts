/**
 * A模块
 * @type {{}}
 */
import { setSession, getSession, isEmpty } from '@/util/util'
const types = {
  SET_TOKEN: 'SET_TOKEN', // token
}
const state: any = {
  token: 'null',
}
const mutations = {
    [types.SET_TOKEN] ( _state: any, token: string ) {
        setSession('sessionToken', token)
        _state.token = token
    },
}
const actions = {
    setToken: ( _vuex: any, data: any ) => {
        _vuex.commit(types.SET_TOKEN, data.token)
    }
}
const getters = {
    getToken: ( _state: any ) => {
        if (isEmpty(_state.token)) {
            return getSession('sessionToken')
        } else {
            return _state.token
        }
    }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== 'production'
}
