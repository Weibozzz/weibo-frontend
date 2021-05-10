<template>
  <div>
<!--    <global-loading v-show="loading"></global-loading>-->
    <guitor-ad></guitor-ad>
    <!--  头部header-->
    <global-header />
    <div class="content-box">
      <global-tips></global-tips>
      <div class="article clear">
        <!--        左边icon-->
        <div class="left-icon-wrapper fl">
          <span class="like-num">12</span>
          <a-tooltip placement="right">
            <template slot="title">
             赞一个吧!
            </template>
            <a-button class="icon-item">
              <a-icon type="like" :style="{fontSize: '20px'}" />
            </a-button>
          </a-tooltip>
          <a-icon class="icon-item" type="weibo" :style="{fontSize: '20px'}" />
          <a-tooltip placement="right">
            <template slot="title">
              来评论吧
            </template>
            <a-icon class="icon-item"
                    type="message"
                    :style="{
                    fontSize: '20px',
                  }" />
          </a-tooltip>
        </div>
        <!--        右边文章区域-->
        <div class="article-wrapper fr">
          <!--        文章标题区域-->
          <div class="article-title-wrapper clear">
            <div class="left fl">
              <h1 class="title">shell简单脚本</h1>
              <a-divider></a-divider>
            </div>
            <div class="right fr">
              <div class="ad fr">
                <DetailAd></DetailAd>
              </div>
            </div>
          </div>
          <!--        文章区域-->
          <div class="article-detail-wrapper" v-html="content">
          </div>
        </div>
      </div>
      <!--  评论-->
      <Comments />
    </div>
    <!--  页脚-->
    <global-footer />
  </div>
</template>

<script src="./index.js"></script>

<style>
@import "~@/assets/markdown.less";
</style>
<style scoped lang="less">
@import "./index";
</style>
