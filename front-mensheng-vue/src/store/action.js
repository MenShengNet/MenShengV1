import {
  LOGIN_OUT,
  LOGIN_IN
} from './mutation-types'

export default {
  userLogin({
      commit
    },
    data) {
    commit(LOGIN_IN, data)
  },
  userLoginOut({
    commit
  }) {
    commit(LOGIN_OUT);
  }
}
