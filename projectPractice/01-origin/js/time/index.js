window.onload = function () {
  let timer = setInterval(getTimes, 1000)
  getTimes()
  function getTimes () {
    var oClock = document.getElementById('clock')
    var aSpan = oClock.getElementsByTagName('span')
    var oDate = new Date()
    const h = oDate.getHours()
    const m = oDate.getMinutes()
    const s = oDate.getSeconds()
    aSpan[0].innerHTML = format(h)
    aSpan[1].innerHTML = format(m)
    aSpan[2].innerHTML = format(s)
    // if(s === 30){
    //   clearInterval(timer)
    // }
  }
  function format (num) {
    // if(num<10){
    //   return '0' + num;
    // }else {
    //   return num;
    // }
    // return num < 10 ? '0' + num : num;
    return String(num).padStart(2, 0)
  }
}
