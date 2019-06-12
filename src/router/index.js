import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import '../assets/styles/iconfont.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
