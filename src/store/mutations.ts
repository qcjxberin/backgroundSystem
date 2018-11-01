import types from './types'
import { setSession } from '@/util/util'

const mutations = {
    [types.SET_TOKEN] ( _state: any, token: string ) {
        setSession('sessionToken', token)
        _state.token = token
    },
}
export default mutations
