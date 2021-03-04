## 1 html
- div
- h1
- ul
- li
- body
- a
- input
- select

### 1.1 引入css方式
- `<link rel="stylesheet" href="./index.css">`
### 1.2 自带边距和样式
- h1,ul,li,body,a
### 1.3 head 里标签
- meta
- title
## 2 css
- float
  - left
  - right
  - none
- position
  - static relative absolute fixed
  - top
- width
- margin(外边距)
    - padding-top
    - margin-top
- padding(内边距)
- min-height
- font-size
- font-weight
- text-align
- text-decoration
- background-color
- background-image
- background-size
- background-position
- background-repeat
- border-radius
- z-index
- cursor
- transition
- outline
- box-shadow
- vertical-align: middle;
- transform
  - translate

### 2.1 优先级
- id(唯一) 100
- class 10
- div 1
优先级相同，下面覆盖上面

### 2.2 水平居中
- 块元素 `margin: 0 auto`
- 行内元素 `text-align: center`

### 2.3 上下居中
```css
div{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```
### 2.4 行块转换
 - display
### 2.5 行块区别
`inline inline-block block` 区别
- margin
- padding


### 2.6 浮动
- 特点：内容撑开宽高
- 应用场景：1.文字环绕 2.横向排列
### 2.7 媒体查询
- 要定义meta
    - `  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">`
- 百分比布局
    - 相对于最近的父级的百分比
- rem em 布局
    - <https://developer.mozilla.org/zh-CN/docs/Web/CSS/length>
    - em 相对于最近的父级的比例，父级没定义继续向上找
    - rem 相对于根 `html` ，如果根没定义默认为 `16px`
- 媒体查询 语法
    ```css
    @media screen
    and (min-width: 481px)
    and (max-width: 900px) {
      .container {
        width: 80%;
      }
    }
    ```
## 3 js
### 3.1 变量
- 变量
- 数据类型
### 3.2 循环(流程控制)
- for
- if else
### 3.3 dom操作
- dom操作
- dom获取方式
### 3.4 对象
- date 取值
- function
    - 看5.5例子
- object
- number
- string
    - substring
- array
- Math
    - random
    - cell
    - floor
    - fround
    - max
    - min
### 3.5 计时器
- setInterval
### 3.6 event(事件)
事件冒泡 事件委托 1. 避免重复多个事件  2. 未来元素也可以加上事件
- click
- mouseover
- mouseout
### 3.7 form(表单)
- input
    - type
        - radio
        - checkbox
        - number
### 4 ajax
- typeof
- JSON.parse()
### 5 作用域 (代码封装)
可以看 ajax 源码
