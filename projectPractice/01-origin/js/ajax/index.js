const arr = [
  {
    index: 1,
    name: '全部文章',
    href: 'http://www.baidu.com',
    target: false
  },
  {
    index: 20,
    name: 'js'
  }
]
const formData = {
  hobby: ['ping-pong', 'Basketball'],
  nickname: '刘伟波',
  sex: 'man',
  email: '8888@qq.com',
  website: 'http://www.xxx.com',
  comment: '评论'
}
/*function toUrl (urlObj) {
  if (!urlObj) {
    return ''
  }
  return Object.keys(urlObj)
    .reduce((total, item, index) => {
      total += `${index ? '&' : '' }${item}=${urlObj[item]}`
      return total;
    },'?')
}*/
function toUrl (obj) {
  let str = '?'
  for (const objKey in obj) {
    const objValue = obj[objKey]
    if (typeof objValue !== 'string') {
      for (let i = 0; i < objValue.length; i++) {
        str += objKey + '=' + objValue[i] + '&'
      }
    } else {
      str += objKey + '=' + objValue + '&'
    }
  }
  return str.substring(0, str.length - 1)
}
// console.log(toUrl(formData))
ajaxGet()
// ajaxPost()
function ajaxGet () {
  const formUrl = 'http://localhost:3000/form' + toUrl(formData)
  const tagUrl = 'http://localhost:3000/tag'
  var xhr = new XMLHttpRequest()
  xhr.open(
    'GET',
    formUrl,
    true
  )
  xhr.send(null)
  // 发送并接受返回值
  xhr.onreadystatechange = function () {
    console.log(xhr.readyState)
    // 这步为判断服务器是否正确响应
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log(xhr.responseText)
      if (typeof xhr.responseText === 'string') {
        const array = JSON.parse(xhr.responseText)
        insertTag(array.success)
      }
    }
  }
}
function ajaxPost () {
  var xhr = new XMLHttpRequest()
  console.log('UNSENT', xhr.readyState) // readyState 为 0
  xhr.open('POST', 'http://localhost:3000/form', true)
  console.log('OPENED', xhr.readyState) // readyState 为 1
  //发送合适的请求头信息
  // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8') // Mime-Type
  xhr.send(JSON.stringify(formData))
  // 发送并接受返回值
  xhr.onreadystatechange = function () {
    console.log(xhr.readyState)
    // 这步为判断服务器是否正确响应
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log(xhr.responseText)
    }
  }
}
function insertTag (arr) {
  const tagContainer = document.getElementsByClassName('tag-list')[0]
  let target = '_self'
  for (let i = 0; i < arr.length; i++) {
    const span = document.createElement('span')
    const item = arr[i]
    // span.innerText = arr[i]
    span.className = 'tag-name'
    // span.innerHTML = '<span>' + item.name + '</span>'
    if (item.target) {
      target = '_blank'
    }
    if (item.href) {
      // span.innerHTML = '<a href="'+ item.href +'" target="'+ target+'">' + item.name + '</a>'
      span.innerHTML = `<a href="${item.href}" target="${target}">${item.name}</a>`
    } else {
      span.innerText = item.name
    }
    tagContainer.appendChild(span)
  }
}
// insertTag(arr)
