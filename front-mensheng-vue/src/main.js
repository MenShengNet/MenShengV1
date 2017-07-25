// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'


import axios from 'axios'
import VueAxios from 'vue-axios'


//vuex引入
import store from './store/index.js'

//VeeValidate表单验证器 引入
import VeeValidate from 'vee-validate';


// //iview 引入
// import iView from 'iview'
// import 'iview/dist/styles/iview.css'
// // //iview主题
// import './my-theme/index.less'

//elementui引入
//import 'element-ui/lib/theme-default/index.css'
import './theme/index.css'
import ElementUI from 'element-ui'




import './pages/course/icon/iconfont.css'

Vue.config.productionTip = false
//Vue.prototype.$http = axios;

Vue.use(VueAxios, axios)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})



