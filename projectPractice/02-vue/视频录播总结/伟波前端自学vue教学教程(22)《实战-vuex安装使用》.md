# 总结
`vuex` 是一个全局数据管理库
项目虽小 五脏俱全 <https://vuex.vuejs.org/zh/>
## 安装
```shell
npm i vuex -S
```
```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
new Vue({
  el: '#app',
  store
})
```
### store
全局数据
1. this.$store.state
2. computed 用 vuex 提供的 mapState 结构
### getters
方便组合数据
1. this.$store.getters
2. computed 用 vuex 提供的 mapState 结构
### mutations
提交同步数据
1. this.$store.commit('mutation-name', payload)
2. computed 用 vuex 提供的 mapMutations 结构
### actions
提交 mutation 一般用于异步修改数据
1. this.$store.dispatch('action-name', payload)
2. computed 用 vuex 提供的 mapActions 结构
## computed 的运用
学会使用 `computed`
