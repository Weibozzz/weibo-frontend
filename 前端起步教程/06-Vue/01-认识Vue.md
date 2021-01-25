## vue 是什么？
`Vue` (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，
`Vue` 被设计为可以自底向上逐层应用。`Vue` 的核心库只关注视图层，
不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种
支持类库结合使用时，`Vue` 也完全能够为复杂的单页应用提供驱动。

## 示例
```html
<div id="app-5">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">反转消息</button>
</div>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
  var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Hello Vue.js!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  })
</script>
```
