function inputDemo () {
  const inputDemo = document.getElementById('input-demo')
  const tip = document.getElementById('tip')
  const focus = document.getElementById('focus')
  // inputDemo.oninput = function (e) {
  //   console.log(e.target.value)
  // }
  window.addEventListener('input', function (e) {
    console.log(e.target.value)
  }, false)
  inputDemo.onblur = function (e) {
    if (e.target.value === '123') {
      tip.innerText = '输入正确'
      tip.style.color = 'green'
    } else {
      tip.innerText = '输入错误'
      tip.style.color = 'red'
    }
  }
  inputDemo.onfocus = function (e) {
    focus.style.display = 'block'
  }
}
function selectDemo () {
  const select = document.getElementById('select')
  select.onchange = function (e) {
    console.log(e.target.value)
  }
}
function formDemo () {
  const form = document.getElementsByTagName('form')
  form[0].onsubmit = function (e) {
    // 1. 青铜
    // console.log(form[0].elements[0].getAttribute('name'))
    // console.log(form[0].elements[0].value)
    // 2. 白银
    var formdata = new FormData(form[0])
    let arr = []
    for (let i of formdata) {
      arr.push(i)
    }
    // 3. 黄金
    // console.log(serialize(arr))
    console.log(serializeJSON(arr))
    console.log(JSON.stringify(serializeJSON(arr)))
    e.preventDefault()
    // console.log($('form').serialize())
    // console.log($("form").serializeArray())
    // 4. 白金
    // console.log([...formdata])
  }
}
function serialize (arr) {
  let result = ''
  for (var i = 0; i < arr.length; i++) {
    const item = arr[i]
    result += item[0] + '=' + item[1]
    if (i < arr.length - 1) {
      result += '&'
    }
  }
  return result
}
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
formDemo()
