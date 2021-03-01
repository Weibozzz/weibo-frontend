// const arr = ['全部文章', 'js', 'html', 'css']
const arr = [
  {
    index: 1,
    name: '全部文章',
    href: 'http://www.baidu.com',
    target: false,
  },
  {
    index: 20,
    name: 'js',
  },
]
const tagContainer = document.getElementsByClassName('tag-list')[0]
let target = '_self'
for (let i = 0; i < arr.length; i++) {
  const span = document.createElement('span')
  const item = arr[i]
  // span.innerText = arr[i]
  span.className = 'tag-name'
  // span.innerHTML = '<span>' + item.name + '</span>'
  if(item.target){
    target = '_blank'
  }
  if(item.href){
    // span.innerHTML = '<a href="'+ item.href +'" target="'+ target+'">' + item.name + '</a>'
    span.innerHTML = `<a href="${item.href}" target="${target}">${item.name}</a>`
  } else {
    span.innerText = item.name
  }
  tagContainer.appendChild(span)
}
