import Vue from 'vue'
import Vuex from 'vuex'
import sideBar from './modules/sideBar'
import {getSession, isEmpty, setSession} from '@/util/util'

const types = {
	SET_TOKEN: 'SET_TOKEN', // token
	SET_USER_INFO: 'SET_USER_INFO',
	SELECT_ARRAY: 'SELECT_ARRAY', // 激活的模块
	SET_ACTIVES: 'SET_ACTIVES', // 当前激活的模块path
	SET_SIDEBAR_FLAG: 'SET_SIDEBAR_FLAG' // 左侧导航状态栏
}
const state = {
	token: '',
	userInfo: '',
	selectArray: [],
	actives: '',
	siderBarFlag: false
}
const mutations = {
	[types.SET_TOKEN] (_state: any, token: string) {
		setSession('token', token)
		_state.token = token
	},
	[types.SET_USER_INFO] (_state: any, userInfo: any) {
		setSession('userInfo', userInfo)
		_state.userInfo = userInfo
	},
	[types.SELECT_ARRAY] (_state: any, selectArray: any) {
		setSession('selectArray', selectArray)
		_state.selectArray = selectArray
		console.log(_state.selectArray)
	},
	[types.SET_ACTIVES] (_state: any, actives: any) {
		setSession('actives', actives)
		_state.actives = actives
	},
	[types.SET_SIDEBAR_FLAG] (_state: any, siderBarFlag: boolean) {
		setSession('siderBarFlag', siderBarFlag)
		_state.siderBarFlag = siderBarFlag
	}
}
const actions = {
	setToken: (_vuex: any, data: any) => {
		_vuex.commit(types.SET_TOKEN, data.token)
	},
	setUserInfo: (_vuex: any, data: any) => {
		_vuex.commit(types.SET_USER_INFO, data.userInfo)
	},
	setSelectArray: (_vuex: any, data: any) => {
		console.log(data)
		_vuex.commit(types.SELECT_ARRAY, data.selectArray)
	},
	setActives: (_vuex: any, data: any) => {
		_vuex.commit(types.SET_ACTIVES, data.actives)
	},
	setSiderBarFlag: (_vuex: any, data: any) => {
		_vuex.commit(types.SET_SIDEBAR_FLAG, data.siderBarFlag)
	}
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
	},
	getSelectArray: (_state: any) => {
		if (isEmpty(_state.selectArray)) {
			return getSession('selectArray')
		} else {
			return _state.selectArray
		}
	},
	getActives: (_state: any) => {
		if (isEmpty(_state.actives)) {
			return getSession('actives')
		} else {
			return _state.actives
		}
	},
	getSiderBarFlag: (_state: any) => {
		if (isEmpty(_state.siderBarFlag)) {
			return getSession('siderBarFlag')
		} else {
			return _state.siderBarFlag
		}
	}

}
Vue.use(Vuex)
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
