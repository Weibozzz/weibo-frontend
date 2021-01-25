## jquery是什么
是一个js库，最主要是封装，比如dom操作，ajax

<https://jquery.cuishifeng.cn/>
## 举例
### 1. 选择器
```js
$(".myClass");
```
找到所有类名为 的dom元素，返回一个类数组
### 2. dom操作
```js
// 向所有段落中追加一些HTML标记。
$("p").append("<b>Hello</b>");
// 在所有段落之后插入一些HTML标记代码。
$("p").after("<b>Hello</b>");
// 从DOM中把所有段落删除
$("p").remove();
```
### 3. ajax
```js
$.ajax({
   type: "POST",
   url: "some.php",
   data: "name=John&location=Boston",
   success: function(msg){
     alert( "Data Saved: " + msg );
   }
});
```
### 4. 属性
```js
$("img").attr("src"); // 返回文档中所有图像的src属性值。
$("img").attr({ src: "test.jpg", alt: "Test Image" }); // 为所有图像设置src和alt属性。
$("img").attr("src","test.jpg"); // 为所有图像设置src属性。
$("img").attr("title", function() { return this.src }); // 把src属性的值设置为title属性的值。
```
### 5. css
```js
$("p").css("color"); // 取得第一个段落的color样式属性的值。
// 将所有段落的字体颜色设为红色并且背景为蓝色。
$("p").css({ "color": "#ff0011", "background": "blue" });
$("p").css("color","red"); // 将所有段落(p)字体设为红色
```
### 6. 效果

```js
$("p").fadeOut() // 所有的p元素淡出
$("p").fadeOut("fast",function(){
   alert("Animation Done.");
 });
```
### 7. 事件
```js
$(function($) {
  // 你可以在这里继续使用$作为别名...
});
$("p").on("click", function(){
  alert( $(this).text() );
});
$("p").click();
```
注意： on()方法绑定事件处理程序到当前选定的jQuery对象中的元素
