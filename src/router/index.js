import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home = () => import('../views/home/Home')
const Classify = () => import('../views/classify/Classify')
const Categroy = () => import('../views/categroy/Categroy')
const Mine = () => import('../views/mine/Mine')
const Detail = () => import('../views/detail/Detail')
const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Categroy
  },
  {
    path:'/classify',
    component:Classify
  },
  {
    path:'/mine',
    component:Mine
  },
  {
    path:'/detail/:iid',
    component:Detail
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
