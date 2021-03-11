var btn = document.getElementById('button')
// btn.onclick = function (){
//   btn.style.backgroundColor = 'green'
// }
// btn.onmouseover = function (){
//   btn.style.backgroundColor = 'green'
// }
// btn.onmouseout = function (){
//   btn.style.backgroundColor = 'yellow'
// }

btn.addEventListener('click', function (){
  btn.style.backgroundColor = 'green'
},false)
btn.addEventListener('mouseover', function (){
  btn.style.backgroundColor = 'green'
},false)
