<template>
  <div id="app">
    <ListPage />
  </div>
</template>

<script>
import IndexPage from './pages/index/index'
import ListPage from './pages/list/index.vue'

export default {
  name: 'App',
  components: {
    // IndexPage,
    ListPage
  }
}
</script>

<style>
@import "~@/assets/reset.less";
</style>
