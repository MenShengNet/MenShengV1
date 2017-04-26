import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/welcome/login'
import register from '@/pages/welcome/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dl',
      name: 'login',
      component: login
    },
    {
      path: '/zc',
      name: 'register',
      component: register
    }
  ]
})
