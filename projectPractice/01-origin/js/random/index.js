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
const getRandomTxt = (text) => {
  let len = text.length
  let random = Math.random() * len
  //最少截取4个字符
  let result = Math.max(Math.ceil(random), 4)
  if (len > MAX_LENGTH_TXT) {
    return text.slice(0, result)
  }
  return text
}
function getRandomColor () {
  let ran = Math.random() * COLORS_ARR.length | 0
  let color = COLORS_ARR[ran]
  return color;
}
const container = document.querySelectorAll('.container')[0]
const arr = ['全部文章全部文章', 'javascript', 'htmlhtml', 'htmlhtml']
for (let i = 0; i < arr.length; i++) {
  const item = arr[i]
  const span = document.createElement('span')
  span.innerText = getRandomTxt(item)
  span.className = 'item'
  span.style.backgroundColor = getRandomColor()
  span.style.marginLeft = getRandomMarginLeft() + 'px'
  span.style.marginTop = getRandomMarginTop() + 'px'
  container.appendChild(span)
}
