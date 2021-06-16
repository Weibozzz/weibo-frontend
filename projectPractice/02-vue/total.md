# 总结
项目虽小 五脏俱全

## npm install
- -D(--dev--save)   devDependencies
- -S(--save)   dependencies
## vue 知识点
### 1. 生命周期
- created (一般可以请求数据)
- mounted (可操作 dom 元素)
- beforeDestroy (一般用于清除定时器等操作)
### 2. data
- this 的使用,模板的使用
- import export数据的导入导出
- 扩展运算符的使用
###　3. methods
### 4. v-for
- key
### 5. class
### 6. style
动态 style
### 7. v-if
- v-show
### 8. props
### 9. 指令
### 10. watch
### 11. v-modal
### 12. 事件
- @click
- @input @blur
- $emit('event', payload)
- debounce 的使用
### 13. v-html
### 14. 插槽 slot
- 默认插槽 default
- 具名插槽
### computed 的运用
学会使用 `computed`
### 组件
- 注册全局组件
- 注册局部组件
- 组件传值
- 事件传值
- 组件插槽
- props 运用(style注意保留属性作为key)
- vue.component('el-name',component)
### 其他
### 媒体查询
- @media
### 1. String
- split
## vue-router
- https://router.vuejs.org/zh/guide/#html
### 安装
1. 定义 (路由) 组件。
2. 定义路由
3. 创建 router 实例，然后传 `routes` 配置
4. 创建和挂载根实例。

### vue-router
- router-view
- router-link
- router.beforeEach 必须调用 next()
- props 传值
- 代码健壮性
### axios
- https://github.com/axios/axios
  
学会 axios 封装
### 跨域处理 
什么是跨域？为什么会跨域？如何解决？

### 安装
```shell
npm install axios -S
```
## ui组件库和 markdown 渲染使用
- ant-design-vue 使用和按需加载
- element-ui  api 使用，组件插槽的使用，浏览器报错及时解决
- marked <https://github.com/markedjs/marked>
- highlight.js <https://github.com/highlightjs/highlight.js/>
## vuex
`vuex` 是一个全局数据管理库
<https://vuex.vuejs.org/zh/>
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
## 重要提醒
学会 公共组件拆分 js如此，css亦如此，html亦如此
## git
`git` 版本之间穿梭 `git checkout <commitId>`
## 安装错误
### 1. 安装 antd-design-vue 错误
> 我采用的降低 less 版本

- https://github.com/ant-design/ant-motion/issues/44
### 2. 增加 less
> 目前 less-loader 最新的不兼容 webpack4,所以请使用 v7.x.x
>
```
npm i less less-loader@7.1.0 -D
```
- 卸载 依赖
`npm uninstall <包名>`
## 作业
记得交作业 只看不写等于没学哦，一定要自己写，可以看到我自己写了多遍都有
各种各样的问题，只有发现了才能解决，先自己尝试写修改不要看我写的，实在不行，
在看我的，也可以评论留言或者公众号联系我哦
## 提醒
自己动手写，主播自己写的时候都出现各种错误,所以自己不写永远不会提高.

不用做复制粘贴工程师，每一次都去手写，看别人可以，但是不允许复制； 自己多去试试，多练习

关注+三连 是对我做视频最大的支持
