// 事件定义方式
function eventTypes(){
  const btn = document.getElementById('button')
  // btn.onclick = function () {
  //   btn.className = 'btn'
  // }
  window.addEventListener('click', function () {
    btn.className = 'btn'
  }, false)
}

var list = document.getElementById('list')
var ul = document.getElementById('ul')
var liList = ul.getElementsByTagName('li')
var body = document.getElementsByTagName('body')[0]
// list.onclick = function (){
//   console.log('list')
// }
// ul.onclick = function (event){
//   event.stopPropagation()
//   console.log('ul')
// }
// for (let i = 0;i<liList.length;i++){
//   liList[i].addEventListener('click', function (){
//     console.log(liList[i].innerText)
//   }, false)
// }

ul.addEventListener('click', function (e){
  var tar = e.target
  console.log(tar.innerText)
  }, false)
var newLi = document.createElement('li')
newLi.innerHTML = '<li><a href="javascript:;" class="my_link">超链接四</a></li>'
ul.appendChild(newLi)
var newLi2 = document.createElement('li')
newLi2.innerHTML = '<li><a href="javascript:;" class="my_link">超链接5</a></li>'
ul.appendChild(newLi2)

// window.addEventListener('click',function (){
//   console.log('冒泡 window')
// },false)
// body.addEventListener('click',function (e){
//   console.log('冒泡 body')
// },false)
// document.addEventListener('click',function (){
//   console.log('冒泡 document')
// },false)

window.addEventListener('click',function (){
  console.log('捕获 window')
},true)
body.addEventListener('click',function (){
  console.log('捕获 body')
},true)
document.addEventListener('click',function (){
  console.log('捕获 document')
},true)

function eventHover(){
  const hover = document.getElementById('hover')
  hover.onmouseover = function () {
    this.style.backgroundColor = '#017e66'
  }
  hover.onmouseout = function () {
    this.style.backgroundColor = '#000'
  }
}
eventHover()
