import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/list/Index.vue'
import Home from '../components/list/Home.vue'
import Search from '../components/list/Search.vue'
import Furniture from '../components/list/Furniture.vue'
import Detail from '../components/detail/Detail.vue'
import Mine from '../components/mine/mine.vue'
import Lr from '../components/mine/Lr.vue'
import Login from '../components/mine/Login.vue'
import Register from '../components/mine/Register.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: Index,
      children: [
        {
          path: 'home',
          component: Home
        },
        {
          path: 'furniture',
          component: Furniture
        }
      ]
    },
    {
      path: '/search',
      component: Search
    },
    {
      path:'/mine',
      component: Mine
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path:'/lr',
      component:Lr
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/register',
      component:Register
    }
  ]
})
