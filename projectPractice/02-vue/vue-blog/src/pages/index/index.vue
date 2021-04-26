<template>
  <div class="container">
    <!--  头部标题-->
    <div class="header">
      <h1>xxxx的个人网站</h1>
      <div class="sub-title">Liu WeiBo's Personal Website</div>
    </div>
    <!--  主题内容-->
    <div class="content">
      <ul class="list">
        <li class="item">
          <a href="../../list/list-04/index.html">》》技术文章(BLog)</a>
        </li>
        <li class="item">
          <a href="../../list/list-04/index.html">》》生活感想</a>
        </li>
        <li class="item last-item">》》文档中心</li>
      </ul>
    </div>
    <!--  页脚-->
    <div class="footer">
      Contact | http://www.liuweibo.cn
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
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
  }
}
</script>

<style scoped>
/*--------------------清除默认样式 start----------------------------*/
h1, ul, li, body {
  margin: 0;
  padding: 0;
  font-size: 16px;
}
li{
  list-style: none;
}
h1 {
  font-weight: normal;
}

/*-------------------清除默认样式 end-------------------------------*/
body {
  /*todo vh*/
  min-height: 100vh;
  background-image: url('http://images.static.liuweibo.cn/image/index/zhoulou.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: All 2s ease;
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 800px;
  /*margin-top: 100px; todo 超出隐藏*/
  font-size: 14px;
  color: white;
  background-color: rgba(0, 0, 0, .3);
  border-radius: 20px;
  transform: translate(-50%, -50%);
}


.header {
  padding-top: 26px;
  margin-bottom: 38px;
}

h1 {
  font-size: 18px;
  text-align: center;
}

.sub-title {
  margin-top: 16px;
  text-align: center;
}

.content {
  margin-left: 20px;
  margin-right: 20px;
  padding-top: 22px;
  padding-bottom: 12px;
  border-top: 1px solid #ffffff;
  border-bottom: 1px solid #ffffff;
}
.list{
  width: 690px;
  margin: 0 auto;
}
.item {
  font-size: 14px;
  padding: 5px 2px;
  margin-bottom: 15px;
  background-color: rgba(0, 0, 0, .5);
  border-radius: 6px;
}
.item a{
  color: white;
  text-decoration: none;
}
.last-item{
  margin-bottom: 0;
}
.footer {
  padding: 10px 20px;
  text-align: right;
}

</style>
