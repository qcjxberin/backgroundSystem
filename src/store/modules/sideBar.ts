/**
 * sideBar模块
 */
// import { isEmpty } from '@/util/util';
const types = {
  ACTIVE: 'ACTIVE' // 左侧激活状态
};
const state: any = {
  active: ''
};
const mutations = {
  [types.ACTIVE](_state: any, active: string) {
    _state.active = active;
  }
};
const actions = {
  setActive: (_vuex: any, data: any) => {
    _vuex.commit(types.ACTIVE, data.active);
  }
};
const getters = {
  getActive: (_state: any) => {
    return _state.active;
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== 'production'
};
