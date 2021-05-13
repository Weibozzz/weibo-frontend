<template>
  <div>
    <!--    tips-->
    <div class="title-tips">
      <img class="smile-icon" src="~@/static/images/smile.png">
      <slot></slot>：'伟波前端'，将是一个美好的邂逅哦!
      <span v-if="dailyData" class="daily-tip">({{dailyData}})</span>
      <slot name="extra"></slot>
      <img class="close-icon" src="~@/static/images/close.png">
    </div>
    <!--    github-->
    <div class="github">
      <span class="github-title">
        <img class="smile-icon" src="~@/static/images/smile.png">
        github
      </span>
      <span class="github-star">200</span>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style scoped lang="less">
@import "./index";
</style>
