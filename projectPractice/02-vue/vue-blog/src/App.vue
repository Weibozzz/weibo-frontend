<template>
  <div id="app">
    <IndexPage />
  </div>
</template>

<script>
import IndexPage from './pages/index/index'

export default {
  name: 'App',
  components: {
    IndexPage
  }
}
</script>

<style>
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
</style>
