function getYearAndMounth (time) {
  if (!time) return ''
  const tt = new Date(Number(time) * 1000)
  return tt.getFullYear() + '年' + String(+tt.getMonth() + 1)
    .padStart(2, 0) + '月'
}
// 数组去重
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
function getStrArr (arr){
  let strArr = [];
  for (let i = 0; i < arr.length; i++) {
    strArr.push(getYearAndMounth(arr[i].createTime))
  }
  return strArr;
}
const strArr = getStrArr(arr)
const result = cancelRepeat(strArr)
// console.log(result)
const keys = Object.keys(result)
const values = Object.values(result)
const container = document.getElementById('container')
for (let i = 0; i < keys.length; i++) {
  const item = keys[i]
  const div = document.createElement('div')
  div.innerHTML = `<span>${item}(${values[i]})</span>`
  container.appendChild(div)
}
