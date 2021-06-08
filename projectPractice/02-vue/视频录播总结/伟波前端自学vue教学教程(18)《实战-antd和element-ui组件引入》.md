# 总结
`antd-design-vue` 和 `element-ui` 组件引入
## antd-design-vue
```shell
npm i --save ant-design-vue
# 按需加载
npm i babel-plugin-import -D 
```
```js
import Vue from 'vue'
import { Button } from 'ant-design-vue';
Vue.use(Button)
```

## element-ui
```shell
npm i --save element-ui
# 按需加载
npm i babel-plugin-component -D 
```
## 坑点
less 需要2.x版本
