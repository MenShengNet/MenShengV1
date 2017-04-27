import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/welcome/login'
import register from '@/pages/welcome/register'
import tool from '@/pages/welcome/tool'
import recommand from '@/pages/welcome/recommand'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/recommand',
      name: 'recommand',
      component: recommand
    },
    {
      path: '/tool',
      name: 'tool',
      component: tool
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})
