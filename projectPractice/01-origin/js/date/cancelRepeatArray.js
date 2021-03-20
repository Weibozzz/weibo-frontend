// 数组去重
let arr = [1,2,3,4,6,1,1,1,2,4,9]
let arr2 = [1,1,1,2,2]
// let obj = {
//   a: 1,
//   b: 4,
//   4: 4,
//   '6': 9,
//   a:2,
// }


function cancelRepeat(arr){
  let newArr = []
  let obj = {}
  for (var i = 0; i < arr.length; i++) {
    if(!obj[arr[i]]){
      obj[arr[i]] = 1
    }else {
      obj[arr[i]]++
    }
  }
  newArr = Object.keys(obj)
  return obj;
}
console.log(cancelRepeat(arr))
