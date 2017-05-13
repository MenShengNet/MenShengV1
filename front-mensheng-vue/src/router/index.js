import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/welcome/login'
import register from '@/pages/welcome/register'
import welcome from '@/pages/welcome/welcome'
import personal from '@/pages/personal/personal'

import myCourseOption from '@/pages/personal/myCourse_option'
import settingOption from '@/pages/personal/setting_option'
import messageCenterOption from '@/pages/personal/messageCenter_option'
import liveList from '@/pages/personal/liveList'
import lessonInform from '@/pages/personal/lessonInform'
import sysInform from '@/pages/personal/sysInform'
import basicSetting from '@/pages/personal/basicSetting'
import identify from '@/pages/personal/identify'
import headChange from '@/pages/personal/headChange'
import recharge from '@/pages/personal/recharge'
import feedback from '@/pages/personal/feedback'
import follow from '@/pages/personal/follow'

import course_setting from '@/pages/course/course_setting'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/welcome'},
    {path:'/personal',redirect:'/personal/myCourseOption/liveList'},
    {path:'/personal/myCourseOption',redirect:'/personal/myCourseOption/liveList'},
    {path:'/personal/messageCenterOption',redirect:'/personal/messageCenterOption/lessonInform'},
    {path:'/personal/settingOption',redirect:'/personal/settingOption/basicSetting'},
    {
      path: '/welcome',
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
      path: '/personal',
      name: 'personal',
      component: personal,
      children:[
        {
          path:'/personal/myCourseOption',
          component:myCourseOption,
          children:[
            {path:'/personal/myCourseOption/liveList',component:liveList},
            {path:'/personal/myCourseOption/video',component:liveList},
            {path:'/personal/myCourseOption/finished',component:liveList}
          ]
        },
        {
          path:'/personal/settingOption',
          component:settingOption,
          children:[
            {path:'/personal/settingOption/basicSetting',component:basicSetting},
            {path:'/personal/settingOption/identify',component:identify},
            {path:'/personal/settingOption/headChange',component:headChange},
            {path:'/personal/settingOption/recharge',component:recharge},
            {path:'/personal/settingOption/feedback',component:feedback},
          ]
        },
        {
          path:'/personal/messageCenterOption',
          component:messageCenterOption,
          children:[
            {path:'/personal/messageCenterOption/lessonInform',component:lessonInform},
            {path:'/personal/messageCenterOption/sysInform',component:sysInform}
          ]
        },
        {
          path: '/personal/follow',
          name: 'follow',
          component: follow
        }
      ]
    },
    {
      path: '/course_setting',
      name: 'course_setting',
      component: course_setting
    }
    
  ]
})
