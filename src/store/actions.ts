import types from './types'

const actions = {
    setToken: ( _vuex: any, data: any ) => {
        _vuex.commit(types.SET_TOKEN, data.token)
    }
}
export default actions
