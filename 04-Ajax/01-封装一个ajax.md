## Ajax 的概念
在浏览器中，我们可以在不刷新页面的情况下，通过ajax的方式去
获取一些新的内容,来实现局部刷新。

Ajax 的核心是 js 对象：
**XMLHttpRequest**。

## 案例
### GET

```js
var xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  'http://localhost:3000/daily?url=https://www.mxnzp.com/api/jokes/list/random',
  true
);

xhr.send(null);
// 发送并接受返回值
xhr.onreadystatechange = function () {
  console.log(xhr.readyState)
  // 这步为判断服务器是否正确响应
  if (xhr.readyState == 4 && xhr.status == 200) {
    console.log(xhr.responseText);
  }
};
```
### POST
```js
var xhr = new XMLHttpRequest();
console.log('UNSENT', xhr.readyState); // readyState 为 0
xhr.open("POST", 'http://localhost:3000/daily', true);
console.log('OPENED', xhr.readyState); // readyState 为 1

//发送合适的请求头信息
// xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8"); // Mime-Type

xhr.send(JSON.stringify({
  url:'https://www.mxnzp.com/api/jokes/list/random'
}));
// 发送并接受返回值
xhr.onreadystatechange = function () {
  console.log(xhr.readyState)
  // 这步为判断服务器是否正确响应
  if (xhr.readyState == 4 && xhr.status == 200) {
    console.log(xhr.responseText);
  }
};
```
## 事件

### onreadystatechange
只要 `readyState` 属性发生变化，就会调用相应的处理函数
### readyState
<https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/readyState>

### status
返回了 `XMLHttpRequest` 响应中的数字状态码。`status` 的值是一个无符号短整型。
在请求完成前，`status` 的值为0。值得注意的是，如果 `XMLHttpRequest` 出错，浏览器返回的 `status` 也为0

- 200
- 400
- 404
- 500
## 封装

```js

  function toUrl (urlObj) {
    if (!urlObj) {
      return ''
    }
    return Object.keys(urlObj)
      .reduce((total, item, index) => {
        total += `${index ? '&' : '' }${item}=${urlObj[item]}`
        return total;
      },'?')
  }
  function ajax(url, options){
    return new Promise((resolve, reject) => {
      let {
        method = 'GET',
        ContentType = "application/json; charset=utf-8",
        params = {}
      } = options
      method = method.toUpperCase()
      var xhr = new XMLHttpRequest();
      xhr.open(
        method,
        `${url}${toUrl(params)}`,
        true
      );
      if(method==='POST'){
        xhr.setRequestHeader("Content-Type", ContentType);
      }
      xhr.send(method==='POST' ? JSON.stringify(toUrl(params)) : null);
      // 发送并接受返回值
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
          resolve(xhr.responseText)
        }
      };
    });
  }
  ajax('http://localhost:3000/daily', {
    method: 'get',
    params: {
      url:'https://www.mxnzp.com/api/jokes/list/random'
    }
  }).then(res => {
    console.log('请求成功', res)
  })
```
