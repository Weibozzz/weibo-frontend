<template>
  <div class="container">
     <span
         class="item"
         v-for="(item, index) in arr"
         :index="index"
         :style="{
           marginLeft: getRandomMarginLeft() + 'px',
           marginTop: getRandomMarginTop() + 'px',
           backgroundColor: getRandomColor(),
         }"
     >
       {{item}}
     </span>
  </div>
</template>

<script src="./index.js"></script>

<style scoped lang="less">
@import "./index";
</style>
