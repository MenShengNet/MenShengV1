import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/welcome/login'
import register from '@/pages/welcome/register'
import welcome from '@/pages/welcome/welcome'

import personal_detail from '@/pages/personal/personal_detail'
import sidebar from '@/pages/personal/sidebar'
import myCourse_option from '@/pages/personal/myCourse_option'
import messageCenter_option from '@/pages/personal/messageCenter_option'
import setting_option from '@/pages/personal/setting_option'
import liveList from '@/pages/personal/liveList'
import lessonInform from '@/pages/personal/lessonInform'
import sysInform from '@/pages/personal/sysInform'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import course_setting from '@/pages/course/course_setting'
import course_discussion from '@/pages/course/course_discussion'
import course_discussion_detail from '@/pages/course/course_discussion_detail'
import course_vedio from '@/pages/course/course_vedio'
import course_paper from '@/pages/course/course_paper'

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
    },
    {
      path: '/sidebar',
      name: 'sidebar',
      component: sidebar
    },
    {
      path: '/myCourse_option',
      name: 'myCourse_option',
      component: myCourse_option
    },
    {
      path: '/messageCenter_option',
      name: 'messageCenter_option',
      component: messageCenter_option
    },
    {
      path: '/setting_option',
      name: 'setting_option',
      component: setting_option
    },
    {
      path: '/course_setting',
      name: 'course_setting',
      component: course_setting
    },
    {
      path: '/course_discussion',
      name: 'course_discussion',
      component: course_discussion
    },
    {
      path: '/course_discussion_detail',
      name: 'course_discussion_detail',
      component: course_discussion_detail
    },
    {
      path: '/course_vedio',
      name: 'course_vedio',
      component: course_vedio
    },
    {
      path: '/course_paper',
      name: 'course_paper',
      component: course_paper
    },
    {
      path: '/liveList',
      name: 'liveList',
      component: liveList
    },
    {
      path: '/lessonInform',
      name: 'lessonInform',
      component: lessonInform
    },
    {
      path: '/sysInform',
      name: 'sysInform',
      component: sysInform
    }
  ]
})
