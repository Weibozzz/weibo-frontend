let tagId = document.getElementById('tag')
let tagClass = document.getElementsByClassName('tag')
let tagTagName = document.getElementsByTagName('div')

let tagList = document.getElementsByClassName('tag-list')

// console.log(tagTagName)
// console.log(tagClass[0])
// console.log(tagId)


console.log(tagId.className)
console.log(tagId.id)
console.log(tagId.innerText)
console.log(tagId.innerHTML)


// tagId.innerText = 'Ni hao'
// tagId.innerHTML = '<span>123</span>'
tagId.style.color = 'red'
// tagId.style.backgroundColor = 'red'
tagId.className = 'tagBg'
