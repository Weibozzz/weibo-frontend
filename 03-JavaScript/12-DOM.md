## JavaScript的组成

JavaScript基础分为三个部分：

- ECMAScript：JavaScript的语法标准。包括变量、表达式、运算符、函数、if语句、for语句等。

- **DOM**：文档对象模型（Document object Model），操作**网页上的元素**的API。比如让盒子移动、变色、轮播图等。

- **BOM**：浏览器对象模型（Browser Object Model），操作**浏览器部分功能**的API。比如让浏览器自动滚动。

## DOM

在文档树中一切都是节点

### 节点访问关系

- nextSibling
- nextElementSibling
- previousSibling
- previousElementSibling

### 操作

- createElement
- appendChild
- insertBefore
- removeChild
- cloneNode

### 节点属性

- src
- class
- id 
- title

### 节点方法

- innerHTML
- innerText
- getAttribute
- setAttribute

### 节点类型 nodeType

- **nodeType == 1  表示的是元素节点**（标签） 。记住：在这里，元素就是标签。

- nodeType == 2  表示是属性节点。

- nodeType == 3  是文本节点。
