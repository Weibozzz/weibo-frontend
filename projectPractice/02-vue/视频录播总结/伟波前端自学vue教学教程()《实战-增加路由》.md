# 总结
- https://router.vuejs.org/zh/guide/#html
## 安装
1. 定义 (路由) 组件。
2. 定义路由
3. 创建 router 实例，然后传 `routes` 配置
4. 创建和挂载根实例。

- beforeEach
- beforeResolve
- afterEach

```js
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
// 2. 定义路由
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]
// 3. 创建 router 实例，然后传 `routes` 配置
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
// 4. 创建和挂载根实例。
const app = new Vue({
  router
}).$mount('#app')
```
## vue-router

- router-view
- router-link
