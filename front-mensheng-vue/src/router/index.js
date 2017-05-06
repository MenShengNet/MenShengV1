import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/welcome/login'
import register from '@/pages/welcome/register'
import tool from '@/pages/welcome/tool'
import recommend from '@/pages/welcome/recommend'
import video from '@/pages/welcome/video'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/recommend',
      name: 'recommend',
      component: recommend
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
    },
    {
      path: '/video',
      name: 'video',
      component: video
    }
  ]
})
