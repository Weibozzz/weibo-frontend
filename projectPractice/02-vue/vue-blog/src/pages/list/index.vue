<template>
  <div class="container">
    <global-loading v-show="loading"></global-loading>
    <guitor-ad></guitor-ad>
    <!--  头部header-->
    <global-header />
    <!--  主题内容-->
    <div class="content-box">
      <!--    tips-->
      <div class="title-tips">
        <img class="smile-icon" src="~@/static/images/smile.png">
        关注公众平台：'伟波前端'，将是一个美好的邂逅哦!
        <span v-if="dailyData" class="daily-tip">({{dailyData}})</span>
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
      <!--    文章列表区域 todo 浮动自适应-->
      <div class="article">
        <!--      列表展示-->
        <div class="article-list">
          <!--        文章搜索框-->
          <div class="search-box">
            <span class="title"></span>
            <span class="input"></span>
            <span class="submit"></span>
          </div>
          <div class="article-box">
            <!--        提示-->
            <div class="article-list-tips">
          <span class="icon">
            <img class="smile-icon" src="~@/static/images/smile.png">
          </span>
              <span class="content">
            <div class="tips">技术文章提示</div>
            <div class="cont">
              本站只是为了展示 React SSR 的效果而搭建的一个博客平台， 前端技术博客知识体系移步这里 【
              <span class="mark">前端知识体系</span>
              】
            </div>
          </span>
            </div>
            <!--        文章-->
            <div class="article-list-item">
              <ul class="list">
                <li class="item"
                    v-for="(item, index) in blogList"
                    :key="item.id"
                >
                  <div class="item-left">
                    <div class="title-box">
                      <span class="title">{{ item.title }}</span>
                      <template v-if="item.type">
                        <span class="tag"
                              v-for="type in item.type.split(',')"
                              :key="type"
                        >{{ type }}</span>
                      </template>
                    </div>
                    <div class="extra-info">
                  <span class="time">
<!--                    2019-05-29 10:25 星期三-->
                    {{untilTime(item.createTime)}}
                  </span>
                      <span class="icon-info">
                    <img class="icon" src="~@/static/images/smile.png">
                    {{ item.like }}
                  </span>
                      <span class="icon-info">
                    <img class="icon" src="~@/static/images/smile.png">
                    {{ item.visitor }}
                  </span>
                    </div>
                  </div>
                  <div class="item-right">
                    <img class="article-type-icon" src="http://images.static.liuweibo.cn/image/icon/others.jpg">
                  </div>
                </li>
              </ul>
            </div>
            <!--        分页-->
            <div class="article-list-pages">
              <div class="tips">我说有底线的……</div>
              <div class="pagination">
                <span class="previous">previous</span>
                <ul class="list">
                  <li class="item"
                      v-for="(item, index) in  blogListTotal"
                      :class="{
                        active: num === index + 1
                      }"
                      :key="index"
                      @click="handlePagination(index)"
                  >{{ index + 1 }}</li>
                </ul>
                <span class="next">next</span>
              </div>
            </div>
          </div>
        </div>
        <!--      额外的信息-->
        <div class="article-extra">
        </div>
      </div>
    </div>
    <!--  页脚-->
    <global-footer />
  </div>
</template>

<script src="./index.js"></script>
<style>

body {
  background-color: #f0f2f5;
}
</style>
<style scoped lang="less">
@import "./index";
</style>
