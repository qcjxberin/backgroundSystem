import Vue from 'vue'
import Vuex from 'vuex'
import sideBar from './modules/sideBar'
import {getSession, isEmpty, setSession} from '@/util/util'

Vue.use(Vuex)
const types = {
	SET_TOKEN: 'SET_TOKEN' // token
}
const state = {
	token: 'null'
}
const mutations = {
	[types.SET_TOKEN] (_state: any, token: string) {
		setSession('stysmToken', token)
		_state.token = token
	}
}
const actions = {
	setToken: (_vuex: any, data: any) => {
		_vuex.commit(types.SET_TOKEN, data.token)
	}
}
const getters = {
	getToken: (_state: any) => {
		if (isEmpty(_state.token)) {
			return getSession('stysmToken')
		} else {
			return _state.token
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
