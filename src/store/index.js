import Vue from 'vue';
import Vuex from 'vuex';
import { setSession, getSession, isEmpty } from '@/util/util';
Vue.use(Vuex);
const types = {
    SET_TOKEN: 'SET_TOKEN',
    SET_DATA: 'SET_DATA',
    SET_ASIDESHOW: 'SET_ASIDESHOW',
    SET_ROUTERLIST: 'SET_ROUTERLIST'
};
const state = {
    token: 'null',
    data: {},
    asideShow: true,
    routerList: []
};
const mutations = {
    [types.SET_TOKEN](_state, token) {
        setSession('sessionToken', token);
        _state.token = token;
    },
    [types.SET_DATA](_state, data) {
        setSession('sessionData', data);
        _state.data = data;
    },
    [types.SET_ASIDESHOW](_state) {
        _state.asideShow = !_state.asideShow;
    },
    [types.SET_ROUTERLIST](_state, data) {
        setSession('routerList', data);
        _state.routerList = data;
    }
};
const actions = {
    setToken: (_vuex, data) => {
        _vuex.commit(types.SET_TOKEN, data.token);
    },
    setData: (_vuex, data) => {
        _vuex.commit(types.SET_DATA, data.data);
    },
    setAsideShow: (_vuex) => {
        _vuex.commit(types.SET_ASIDESHOW);
    },
    setRouterList: (_vuex, data) => {
        _vuex.commit(types.SET_ROUTERLIST, data.routerList);
    }
};
const getters = {
    getToken: (_state) => {
        if (isEmpty(_state.token)) {
            return getSession('sessionToken');
        }
        else {
            return _state.token;
        }
    },
    getData: (_state) => {
        if (isEmpty(_state.data)) {
            return getSession('sessionData');
        }
        else {
            return _state.data;
        }
    },
    getAsideShow: (_state) => {
        return _state.asideShow;
    },
    getRouterList: (_state) => {
        if (isEmpty(_state.routerList)) {
            return getSession('routerList') ? getSession('routerList') : [];
        }
        else {
            return _state.routerList;
        }
    }
};
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    strict: process.env.NODE_ENV !== 'production'
});
//# sourceMappingURL=index.js.map