
function formDemo () {
  const form = document.getElementsByTagName('form')
  form[0].onsubmit = function (e) {
    e.preventDefault()
    // 1. 青铜
    // console.log(form[0].elements[0].getAttribute('name'))
    // console.log(form[0].elements[0].value)

    // 2. 白银
    var formdata = new FormData(form[0])
    let arr = []
    for (let i of formdata) {
      arr.push(i)
    }
    // console.log(arr)
    // 3. 黄金
    console.log(serializeJSON(arr))
    console.log(toUrl(serializeJSON(arr)))


    // ajaxGet(serializeJSON(arr))
    ajaxPost(serializeJSON(arr))
    // console.log($('form').serialize())
    // console.log($("form").serializeArray())
    // 4. 白金
    // console.log([...formdata])
  }
}
formDemo()
function serializeJSON (arr) {
  let result = {}
  result.hobby = []
  for (var i = 0; i < arr.length; i++) {
    const item = arr[i]
    const key = item[0]
    const value = item[1]
    if(key==='hobby'){
      result[key].push(value)
    }else {
      result[key] = value
    }
  }
  return result
}
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

function ajaxGet (formData) {
  const formUrl = 'http://localhost:3000/form' + toUrl(formData)
  var xhr = new XMLHttpRequest()
  xhr.open(
    'GET',
    formUrl,
    true
  )
  xhr.send(null)
  // 发送并接受返回值
  xhr.onreadystatechange = function () {
    // console.log(xhr.readyState)
    // 这步为判断服务器是否正确响应
    if (xhr.readyState == 4 && xhr.status == 200) {
      if (typeof xhr.responseText === 'string') {
        const array = JSON.parse(xhr.responseText)
        console.log('get请求成功', array)
        // insertTag(array.success)
      }
    }
  }
}
function ajaxPost (formData) {
  var xhr = new XMLHttpRequest()
  xhr.open('POST', 'http://localhost:3000/form', true)
  //发送合适的请求头信息
  xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8') // Mime-Type
  xhr.send(JSON.stringify(formData))
  // 发送并接受返回值
  xhr.onreadystatechange = function () {
    console.log(xhr.readyState)
    // 这步为判断服务器是否正确响应
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log('post请求成功', xhr.responseText)
    }
  }
}
