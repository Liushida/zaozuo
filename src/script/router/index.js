import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/list/Index.vue'
import Home from '../components/list/Home.vue'
import Search from '../components/list/Search.vue'
import Detail from '../components/detail/Detail.vue'
import DetailIndex from '../components/detail/DetailIndex.vue'
import Mine from '../components/mine/mine.vue'
import Lr from '../components/mine/Lr.vue'
import Login from '../components/mine/Login.vue'
import Register from '../components/mine/Register.vue'
import Scene from '../components/list/Scene.vue'
import We from '../components/list/We.vue'
import Buycart from '../components/buycart/Buycart.vue'


//测试,删除
import Test from '../components/detail/test/Test.vue'
import DetailParameter from "../components/detail/DetailParameter.vue"
import DetailCanshu from "../components/detail/DetailCanshu.vue"

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
          path: 'furniture/:type',
          component: Home
        },
        {
          path: 'house/:type',
          component: Home
        },
        {
          path: 'scene',
          component: Scene
        },
        {
          path: 'we',
          component: We
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
      path: '/detail/:id',
      component: Detail
    //   ,
    //   redirect:Detail,
    //   children:[
    //       {
    //           path:"detail_index",
    //           component:DetailIndex
    //       }
    //   ]
    },
    {
        //测试
        path:"/test",
        component:Test
    },
    {
        path:"/parameter",
        component:DetailParameter
    },
    {
        path:"/canshu",
        component:DetailCanshu
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
    },
    {
      path:'/buycart',
      component:Buycart
    }
  ]
})
