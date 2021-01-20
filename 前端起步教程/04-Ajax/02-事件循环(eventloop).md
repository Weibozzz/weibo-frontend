## eventLoop
`JavaScript` 是一个单进程的语言，从上到下先执行同步，最后执行异步

```js
for(var i = 0;i<1000000000;i++){
    if(i===999999999){
        console.log('end')
    }
}
setTimeout(()=>{
    console.log('setTimeout')
},0)
```

```js
const syncFunc = () => {
  const time = new Date().getTime();
  while(true) {
    if(new Date().getTime() - time > 2000) {
      break;
    }
  }
  console.log(2);
}

```

## 宏任务 微任务
- setTimeout
- Promise
