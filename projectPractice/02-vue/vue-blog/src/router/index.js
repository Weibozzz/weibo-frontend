import Vue from 'vue'
import VueRouter from 'vue-router'
import PageIndex from '@/pages/index/index'
import ListIndex from '@/pages/list/index.vue'
import Page404 from '@/pages/404/index.vue'

const routes =  [
  {
    path: '/',
    component: PageIndex,
    meta: {
      title: "首页"
    }
  },
  {
    path: '/list',
    component: ListIndex
  },
  // {
  //   path: '*',
  //   component: Page404
  // },
]


Vue.use(VueRouter)
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
router.beforeEach((to, from, next) => {
  /* 必须调用 `next` */
  if(!to.matched.length){
    next({
      path: '/',
    })
    return
  }
  next()
})

router.beforeResolve((to, from, next) => {
  /* 必须调用 `next` */
  next()
})

router.afterEach((to, from) => {})
export default router
