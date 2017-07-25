import {LOGIN_OUT,LOGIN_IN } from './mutation-types'

import {setStore, getStore, removeStore} from '../config/Utils'

export default {
    [LOGIN_OUT](state) {
        state.userInfo.name = {};
		state.isLogin = false;
        localStorage.removeItem('user');
    },
    [LOGIN_IN](state,data){
        state.user = data.name;
        state.isLogin = true;
        localStorage.setItem('user','loginture');
    }
}