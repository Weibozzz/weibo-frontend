//色系
const COLORS_ARR = [
  '#FF5F57',
  '#FFBD2E',
  '#28CA42',
  '#941966',
  '#1c2c36',
  '#2982ff',
  '#e0f0d8',
  '#0098c8',
  '#ba2d2a',
  '#de3803'
]
const STEP = 20
const MARGIN_TOPS = 2
const MARGIN_LEFTS = 5
const MAX_LENGTH_TXT = 6
const getRandomMarginTop = () => {
  return Math.floor(Math.random() * MARGIN_TOPS) * STEP
}
const getRandomMarginLeft = () => {
  return Math.ceil(Math.random() * MARGIN_LEFTS) * STEP
}
const arr = ['全部文章全部文章', 'javascript', 'htmlhtml', 'htmlhtml']
// let container = document.querySelectorAll('.container')[0]
let container = document.getElementsByClassName('container')[0]
// console.log(container)
for (var i = 0; i < arr.length; i++) {
  var item = arr[i]
  var span = document.createElement('span')
  span.innerText = getRandomTxt(item)
  span.className = 'item'
  span.style.marginLeft = getRandomMarginLeft() + 'px'
  span.style.marginTop = getRandomMarginTop() + 'px'
  span.style.backgroundColor = getRandomColor()
  container.appendChild(span)
}

function randomFn(min, max){
  var ran = Math.random()
  var result = ran*(max-min)+min
  return Math.floor(result)
}
function getRandomColor(){
  return COLORS_ARR[randomFn(0, COLORS_ARR.length)];
}

function getRandomTxt (text){
  let len = text.length
  var ran = randomFn(2, len)
  return text.slice(0, ran);
}
