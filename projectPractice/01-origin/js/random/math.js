// console.log(Math.ceil(0.5))
// console.log(Math.floor(0.5))
// console.log(Math.round(0.5))
// console.log(Math.max(1,2,3,4))
// console.log(Math.min(1,2,3,4))
// console.log(Math.random())

// 写一个1到20的随机数


function randomFn(min, max){
  var ran = Math.random()
  var result = ran*(max-min)+min
  return Math.floor(result)
}
// console.log(randomFn(1,20))
console.log(randomFn(3,100))
