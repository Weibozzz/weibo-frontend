<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
@import "~@/assets/reset.less";
@import "~@/assets/common.less";
body {
  background-color: #f0f2f5 !important;
}

.content-box {
  margin-top: 64px;
  padding: 0 160px;
}
@media (min-width: 0px) and (max-width: 900px){
  .content-box{
    padding: 0;
  }
}
@media (min-width: 900px) and (max-width: 1200px) {
  .content-box{
    padding: 0 80px;
  }
}
</style>
