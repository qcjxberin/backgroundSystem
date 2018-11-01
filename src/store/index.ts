import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import homeModule from './modules/home'

Vue.use(Vuex)

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {
        homeModule
    },
    strict: process.env.FE_ENV !== 'online'
})

export default store
