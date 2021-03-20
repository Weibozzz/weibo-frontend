const tagList = [
  {
    name: '全部文章',
    href: 'https://www.baidu.com'
  },
  {
    name: 'css',
    href: 'http://www.liuweibo.com'
  },
  {
    name: 'css',
  }
]

const tagListDom = document.getElementsByClassName('tag-list')[0]


for (let i = 0; i<tagList.length;i++){
  const item = tagList[i]
  console.log(item.href)
  const span = document.createElement('span')
  if(item.href!==undefined){
    span.innerHTML = `<a class="tag-name" href="${item.href}">${item.name}</a>`
  }else {
    span.innerText = item.name
    span.className = 'tag-name'
  }
  tagListDom.appendChild(span)
}

