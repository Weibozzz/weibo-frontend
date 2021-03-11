var xhr = new XMLHttpRequest()

xhr.open('post', 'http://localhost:3000/tag')

xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8') // Mime-Type
xhr.send(null)

xhr.onreadystatechange = function (){
  if(xhr.readyState === 4 && xhr.status === 200){
    const result = JSON.parse(xhr.responseText)
    const data = result.success
    console.log(data)
    insertTag(data)
  }
}
function insertTag (arr) {
  const tagContainer = document.getElementsByClassName('tag-list')[0]
  let target = '_self'
  for (let i = 0; i < arr.length; i++) {
    const span = document.createElement('span')
    const item = arr[i]
    // span.innerText = arr[i]
    span.className = 'tag-name'
    // span.innerHTML = '<span>' + item.name + '</span>'
    if (item.target) {
      target = '_blank'
    }
    if (item.href) {
      // span.innerHTML = '<a href="'+ item.href +'" target="'+ target+'">' + item.name + '</a>'
      span.innerHTML = `<a href="${item.href}" target="${target}">${item.name}</a>`
    } else {
      span.innerText = item.name
    }
    tagContainer.appendChild(span)
  }
}
