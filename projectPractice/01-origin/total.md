## 1 html
- div
- h1
- ul
- li
- body

### 1.1 引入css方式
- `<link rel="stylesheet" href="./index.css">`
### 1.2 自带边距和样式
- h1,ul,li,body
### 1.3 head 里标签
- meta
- title
## 2 css
- width
- margin(外边距)
    - padding-top
    - margin-top
- padding(内边距)
- min-height
- font-size
- font-weight
- text-align
- background-color
- background-image
- background-size
- background-position
- background-repeat
- border-radius

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

