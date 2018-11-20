import Vue from 'vue'
import Vuex from 'vuex'
import sideBar from './modules/sideBar'
import {getSession, isEmpty, setSession} from '@/util/util'

Vue.use(Vuex)
const types = {
	SET_TOKEN: 'SET_TOKEN', // token
	SET_USER_INFO: 'SET_USER_INFO'
}
const state = {
	token: '',
	userInfo: ''
}
const mutations = {
	[types.SET_TOKEN] (_state: any, token: string) {
		setSession('token', token)
		_state.token = token
	},
	[types.SET_USER_INFO] (_state:any, userInfo: any){
		setSession('userInfo', userInfo)
		_state.userInfo = userInfo
	}
}
const actions = {
	setToken: (_vuex: any, data: any) => {
		_vuex.commit(types.SET_TOKEN, data.token)
	},
	setUserInfo: (_vuex: any, data: any) => {
		_vuex.commit(types.SET_USER_INFO, data.userInfo)
	},
}
const getters = {
	getToken: (_state: any) => {
		if (isEmpty(_state.token)) {
			return getSession('token')
		} else {
			return _state.token
		}
	},
	getUserInfo: (_state: any) => {
		if (isEmpty(_state.userInfo)) {
			return getSession('userInfo')
		} else {
			return _state.userInfo
		}
	}

}
const store = new Vuex.Store({
	state,
	mutations,
	actions,
	getters,
	modules: {
		sideBar
	},
	strict: process.env.FE_ENV !== 'production'
})

export default store
