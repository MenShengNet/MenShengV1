import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'

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
import course_video from '@/pages/course/course_video'
import course_paper from '@/pages/course/course_paper'
import course_header from '@/pages/course/course_header'
import course_nav from '@/pages/course/course_nav'
import course_ware from '@/pages/course/course_ware'
import course_notice from '@/pages/course/course_notice'
import course_work from '@/pages/course/course_work'
import course_exam from '@/pages/course/course_exam'
import course_exam_detail from '@/pages/course/course_exam_detail'
import course_work_detail from '@/pages/course/course_work_detail'

import course from '@/pages/course/index'

import course_detail from '@/pages/introduce/course-detail'
import course_list from '@/pages/lists/course_list'


import teacher from '@/pages/teacher_course/index'
import teacher_publish_notification from '@/pages/teacher_course/publish_notification'
import teacher_manage_notification from '@/pages/teacher_course/manage_notification'
import teacher_notification from '@/pages/teacher_course/notificatioin'

import teacher_work from '@/pages/teacher_course/work'
import teacher_publish_work from '@/pages/teacher_course/publish_work'
import teacher_manage_work from '@/pages/teacher_course/manage_work'

import teacher_manage_ware from '@/pages/teacher_course/ware'
import teacher_manage_content from '@/pages/teacher_course/manage_content'


Vue.use(VueAwesomeSwiper)

Vue.use(Router)


const routes = [{
    path: '/',
    redirect: '/welcome'
  },
  {
    path: '/personal/messageCenterOption',
    redirect: '/personal/messageCenterOption/lessonInform'
  },
  {
    path: '/personal/settingOption',
    redirect: '/personal/settingOption/basicSetting'
  },
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
    meta: {
      requireLogin: true, // 添加该字段，表示进入这个路由是需要登录的
    },
    path: '/personal',
    name: 'personal',
    redirect: '/personal/myCourseOption/liveList',
    component: personal,
    children: [{
        path: 'myCourseOption',
        redirect: '/personal/myCourseOption/liveList',
        component: myCourseOption,
        children: [{
            path: 'liveList',
            component: liveList
          },
          {
            path: 'video',
            component: liveList
          },
          {
            path: 'finished',
            component: liveList
          }
        ]
      },
      {
        path: '/personal/settingOption',
        component: settingOption,
        children: [{
            path: 'basicSetting',
            component: basicSetting
          },
          {
            path: 'identify',
            component: identify
          },
          {
            path: 'headChange',
            component: headChange
          },
          {
            path: 'recharge',
            component: recharge
          },
          {
            path: 'feedback',
            component: feedback
          },
        ]
      },
      {
        path: '/personal/messageCenterOption',
        component: messageCenterOption,
        children: [{
            path: '/personal/messageCenterOption/lessonInform',
            component: lessonInform
          },
          {
            path: '/personal/messageCenterOption/sysInform',
            component: sysInform
          }
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
    path: '/course',
    redirect: '/course/notice',
    name: 'course',
    component: course,
    children: [{
        path: 'setting',
        component: course_setting
      },
      {
        path: 'video',
        component: course_video
      },
      {
        path: 'paper',
        component: course_paper,
      },
      {
        path: 'discussion',
        component: course_discussion
      },
      {
        path: 'discussion/detail',
        component: course_discussion_detail
      },
      {
        path: 'ware',
        component: course_ware
      },
      {
        path: 'notice',
        component: course_notice,
      },
      {
        path: 'work',
        meta: {
          requireLogin: true, // 添加该字段，表示进入这个路由是需要登录的
        },
        component: course_work
      },
      {
        path: 'exam',
        meta: {
          requireLogin: true, // 添加该字段，表示进入这个路由是需要登录的
        },
        component: course_exam
      },
    ],
  },
  {
    path: '/teacher',
    component: teacher,
    redirect: "/teacher/manageNotification/notificatin",
    children: [{
        path: 'manageNotification',
        redirect: "/teacher/manageNotification/notificatin",
        component: teacher_manage_notification,
        children: [{
            path: 'publishNotification',
            component: teacher_publish_notification
          },
          {
            path: 'notificatin',
            component: teacher_notification
          }
        ]
      },
      {
        path: 'manageContent',
        component: teacher_manage_content
      },
      {
        path: 'manageWork',
        redirect: "/teacher/manageWork/work",
        component: teacher_manage_work,
        children: [{
            path: 'publishWork',
            component: teacher_publish_work
          },
          {
            path: 'work',
            component: teacher_work
          }
        ]
      },
      {
        path: 'manageWare',
        redirect: "/teacher/manageWare",
        component: teacher_manage_ware,
      }
    ]
  },
  {
    path: '/course_list',
    name: 'course_list',
    component: course_list
  }
]

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin)) {
    if (store.state.isLogin) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})

export default router;
