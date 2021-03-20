### 3.6 event(事件)
- click
- mouseover
- mouseout
#### 3.6.1
事件的写法
- dom.onclick
- dom.addEventListener(event, function (){},false)
#### 3.6.2
事件冒泡:原因子元素点击会冒泡到父级
- event.stopPropagation()
#### 3.6.3
事件委托
1. 避免重复多个事件
2. 未来元素也可以加上事件
#### 3.6.4
冒泡捕获区别
- 冒泡 从子到父冒泡
- 捕获 从父到子 用途（错误捕获会用到，后期再讲）
