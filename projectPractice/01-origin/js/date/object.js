var obj = {
  a: 1,
  b: "你好",
  c: {},
  d: []
}
// console.log(obj.c)

// for(let i in obj){
//   console.log(i)
//   console.log(obj[i])
// }

const keys = Object.keys(obj)
const values = Object.values(obj)
console.log(keys)
console.log(values)
