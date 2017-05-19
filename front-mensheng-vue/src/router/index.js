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
import course_discussion from '@/pages/course/course_discussion'
import course_discussion_detail from '@/pages/course/course_discussion_detail'
import course_vedio from '@/pages/course/course_vedio'
import course_paper from '@/pages/course/course_paper'
import course_header from '@/pages/course/course_header'
import course_nav from '@/pages/course/course_nav'
import course_ware from '@/pages/course/course_ware'
import course_notice from '@/pages/course/course_notice'
import course_work from '@/pages/course/course_work'
// import course_exam from '@/pages/course/course_exam'
import course_exam_detail from '@/pages/course/course_exam_detail'
// import course_work_detail from '@/pages/course/course_work_detail'

import course from '@/pages/course/index'


import course_detail from '@/pages/introduce/course-detail'
import course_list from '@/pages/lists/course_list'


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
      path: '/course_header',
      name: 'course_header',
      component: course_header
    },
    {
      path: "/course_nav",
      name: 'course_nav',
      component: course_nav
    },
    {
      path: '/course_ware',
      name: 'course_ware',
      component: course_ware
    },
    {
      path: '/course',
      name: 'course',
      component: course,
      children: [
        {
          path: '/course/setting',
          component: course_setting
        },
        {
          path: '/course/vedio',
          component: course_vedio
        },
        {
          path: '/course/paper',
          component: course_paper,
        },
        {
          path: '/course/discussion',
          component: course_discussion
        },
        {
          path: '/course/discussion/detail',
          component: course_discussion_detail
        },
        {
          path: '/course/ware',
          component: course_ware
        },
        {
          path: '/course/notice',
          component: course_notice
        },
        {
          path: '/course/work',
          component: course_work
        },
        // {
        //   path: '/course/exam',
        //   component: course_exam
        // },
        // {
        //   path: '/course/work/detail',
        //   component: course_work_detail
        // },
        {
          path: '/course/exam/detail',
          component: course_exam_detail

        }
      ]},
	{
      path: '/course-detail',
      name: 'course-detail',
      component: course_detail
    },
    {
      path: '/course_list',
      name: 'course_list',
      component: course_list
    }
  ]
})
