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
// eventTypes()
// 事件冒泡，事件委托
function eventList(){
  const list = document.getElementById('list')
  const ul = document.getElementById('ul')
  const myLink = document.getElementsByClassName('my_link')
  list.onclick = function () {
    list.style.backgroundColor = '#eeeeee'
  }
  // for (var i = 0; i < myLink.length; i++) {
  //   myLink[i].onclick = function (e) {
  //     e.stopPropagation() // 阻止冒泡
  //     // console.log(i)
  //     // console.log(myLink[i])
  //     // console.log(myLink[i].innerText)
  //     console.log(this.innerText)
  //   }
  // }
  ul.addEventListener('click', function (event) {
    event.stopPropagation()
    console.log(event.target)
    console.log(event.target.innerText)

  }, false)

}
// eventList()

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
