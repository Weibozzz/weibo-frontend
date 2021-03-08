const tagList = document.getElementsByClassName('tag-list')[0]

const span = document.createElement('span')
span.innerText = '你好'
span.className = 'new_tag'
console.log(span)
tagList.appendChild(span)
// tagList.innerHTML = '<span class="new_tag">你好2</span>'
