/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import UserList from '@/components/UserList'
import AddUser from '@/components/AddUser'
import UpdateUser from '@/components/UpdateUser'
import Login from '@/components/Login'
import Welcome from '@/components/Welcome'
import Home from '@/components/Home'
import Directory from '@/components/Directory'
import NewsDetail from '@/components/NewsDetail'
import EventDetail from '@/components/EventDetail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/adduser',
      name: 'AddUser',
      component: AddUser
    },
    {
      path: '/updateuser/:userId',
      name: 'UpdateUser',
      component: UpdateUser
    },
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/directory',
      name: 'Directory',
      component: Directory
    },
    {
      path: '/newsdetail',
      name: 'NewsDetail',
      component: NewsDetail
    },
    {
      path: '/eventdetail',
      name: 'EventDetail',
      component: EventDetail
    },
  ]

})