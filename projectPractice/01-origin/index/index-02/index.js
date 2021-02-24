const BG_INDEX = [
  {
    key: '西安钟楼',
    value: 'http://images.static.liuweibo.cn/image/index/zhoulou.jpg'
  },
  {
    key: '上海东方明珠',
    value: 'http://images.static.liuweibo.cn/image/index/dongfangmingzhu.jpg'
  },
  {
    key: '华山',
    value: 'http://images.static.liuweibo.cn/image/index/huashan.jpg'
  },
  {
    key: '明德楼',
    value: 'http://images.static.liuweibo.cn/image/index/mindelou.jpg'
  },
  {
    key: '韩城古城',
    value: 'http://images.static.liuweibo.cn/image/index/hanchegngucheng.jpg'
  }
  // {
  //   key: '韩城司马迁',
  //   value: 'http://images.static.liuweibo.cn/image/index/simaqina.jpg'
  // },
  // {
  //   key: '韩城美食',
  //   value: 'http://images.static.liuweibo.cn/image/index/hanchegnmeishi.jpg'
  // },
]
function getRandom () {
  return Math.random() * BG_INDEX.length | 0
}
const defaultIndexBg = 0
const body = document.getElementsByTagName('body')[0]
setInterval(()=>{
  let random = getRandom()
  if (random === defaultIndexBg) {
    random = getRandom()
  }
  body.style.backgroundImage = `url(${BG_INDEX[random].value})`
}, 3000)
