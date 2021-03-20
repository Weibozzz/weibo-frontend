window.onload=function (){
  setInterval(run,1000)
  run()
  function run(){
    var date = new Date()
    var h = date.getHours()
    var m = date.getMinutes()
    var s = date.getSeconds()
    var spanList = document.getElementsByTagName('span')
    // console.log(spanList)
    spanList[0].innerText = format(h)
    spanList[1].innerText = format(m)
    spanList[2].innerText = format(s)
  }
  function format(num){
    // if(num<10){
    //   return '0' + num
    // }else {
    //   return num
    // }
    // return num < 10 ? '0' + num : num;
    return String(num).padStart(2, 0)
  }

}
