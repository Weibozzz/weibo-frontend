<template>
  <input placeholder="请输入"
         :style="styleInput"
         @input="handleInput"
         @blur="handleInputBlur"
  >
</template>

<script src="./index.js"></script>

<style scoped lang="less">
@import "./index";
</style>
