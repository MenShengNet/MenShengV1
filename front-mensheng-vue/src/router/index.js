import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/welcome/login'
import register from '@/pages/welcome/register'
import welcome from '@/pages/welcome/welcome'
import personal_detail from '@/pages/personal/personal_detail'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: welcome
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
      path: '/personal_detail',
      name: 'personal_detail',
      component: personal_detail
    }
  ]
})
