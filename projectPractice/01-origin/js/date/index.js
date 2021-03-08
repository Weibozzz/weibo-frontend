// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i].createTime)
// }
console.log(arr)
let strArr = []
arr.forEach(function (item){
  let crt = item.createTime
  let date = new Date(crt * 1000)
  // console.log(date)
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  let d = date.getDate()
  const strDate = `${y}年${m}月${d}日`
  strArr.push(strDate)
})
console.log(strArr)

function cancelRepeat (arr) {
  let newArr = []
  let obj = {}
  for (let i in arr) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1
      newArr.push(arr[i])
    } else {
      obj[arr[i]]++
    }
  }
  return obj
}
var resultObj = cancelRepeat(strArr)
const keys = Object.keys(resultObj)
const values = Object.values(resultObj)

const dom = document.getElementById('container')
keys.forEach(function (item,index){
  const div = document.createElement('div')
  div.innerHTML = `<span class="time-item">${item}(${values[index]})</span>`
  dom.appendChild(div)
})
