import { getSession, isEmpty } from '@/util/util'

const getters = {
    getToken: ( _state: any ) => {
        if (isEmpty(_state.token)) {
            return getSession('sessionToken')
        } else {
            return _state.token
        }
    }

}
export default getters
