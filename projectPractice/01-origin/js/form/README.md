### 3.6 event(事件)
- input
- blur
- focus
- change
- submit
#### 3.6.1
事件的写法
- dom.onclick
- dom.addEventListener(event, function (){},false)
### form
- `form` 里面的 `button` 自带提交功能
- 有必要清除默认刷新
- `select` 多选要写 `multiple`
- 每一个输入或者选择必须有 `name` 属性
- `label` 的 `for` 必须和 `id` 对应
- `getElementsByName` 获取 `form` 里面的元素

### form
- reset 清除

### 获取 form 的值
1. dom.elements 大家可以用循环尝试写
2. new FormData 这个了解
3. for in 循环
4. jquery 后面讲 先不管
5. [...formdata] 高级用法 后面讲

### 数据处理
- 想一想 `get` `post` 传参区别 回顾一下 `ajax` `get` 和 `post`
