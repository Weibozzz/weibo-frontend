// 1. 函数声明上下都可以调用
var result = fun(1, 8)
var result1 = fun(2, 56)
function fun(a, b){
  return a + b
}
console.log(result)
console.log(result1)


// 2. 函数表达式必须定义后调用
var fun2 = function (){
  return 'fun2'
}
var result2 = fun2(2, 56)
console.log(result2)

// 3. 箭头函数
var fun3 = () => {
  return 'fun3'
}
var result3 = fun3(2, 56)
console.log(result3)

// 4. 作用域
let name = 'xiaoming'

function scope(){
  let name = 'xiaohu'
  function scope2(){
    let name = 'weibo'
    console.log(name)
  }
  scope2()
}
scope()
