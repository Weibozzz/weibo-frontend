
```js
for(var i = 0;i<1000000000;i++){
    if(i===999999900){
        console.log('end')
    }
}
setTimeout(()=>{
    console.log('setTimeout')
},0)
```
