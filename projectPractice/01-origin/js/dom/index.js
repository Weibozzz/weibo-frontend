function insertBeforeFn() {
  //创建一个新的、普通的<span>元素
  var sp1 = document.createElement("span");
  sp1.innerText = 'weiboqianduan'

  //插入节点之前，要获得节点的引用
  var sp2 = document.getElementById("childElement");
  //获得父节点的引用
  var parentDiv = sp2.parentNode;

  //在DOM中在sp2之前插入一个新元素
  parentDiv.insertBefore(sp1, sp2);
}
function appendChildFn() {
  //创建一个新的、普通的<span>元素
  var sp1 = document.createElement("span");
  sp1.innerText = 'weiboqianduan appendChild'

  //插入节点之前，要获得节点的引用
  var sp2 = document.getElementById("parentElement");
  sp2.appendChild(sp1)
}

function removeChildFn() {
  // 先定位父节点,然后删除其子节点
  var d = document.getElementById("parentElement");
  var d_nested = document.getElementById("childElement2");
  var throwawayNode = d.removeChild(d_nested);
  console.log(throwawayNode)
  // // 无须定位父节点,通过parentNode属性直接删除自身
  // var node = document.getElementById("nested");
  // if (node.parentNode) {
  //   node.parentNode.removeChild(node);
  // }
}
// insertBeforeFn()
// appendChildFn()
// removeChildFn()

function getAttribute(){
  var childElement = document.getElementById("childElement");
  const title = childElement.getAttribute('title')
  console.log(title)
}
function setAttribute(){
  var childElement = document.getElementById("childElement");
  const title = childElement.setAttribute('title', 'title3')
  console.log(title)
}
// getAttribute()
// setAttribute()
function innerText(){
  var parentElement = document.getElementById("parentElement");
  console.log(parentElement.innerText)
}
function innerHTML(){
  var parentElement = document.getElementById("parentElement");
  console.log(parentElement.innerHTML)
}
// innerText()
// innerHTML()

function nodeType(){
  var childElement = document.getElementById("childElement");
  console.log(childElement.nodeType)
  console.log(childElement.nextSibling)
  console.log(childElement.nextSibling.nodeType)
  console.log(childElement.nextElementSibling)
  console.log(childElement.nextElementSibling.nodeType)
}
nodeType()
