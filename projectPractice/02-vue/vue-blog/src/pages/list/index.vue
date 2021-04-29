<template>
  <div class="container">
    <global-loading v-show="loading"></global-loading>
    <guitor-ad></guitor-ad>
    <!--  头部header-->
    <global-header />
    <!--  主题内容-->
    <div class="content-box">
      <global-tips :dailyData="dailyData"></global-tips>
      <a-button type="primary">按钮</a-button>
      <!--    文章列表区域 todo 浮动自适应-->
      <div class="article">
        <!--      列表展示-->
        <div class="article-list">
          <!--        文章搜索框-->
          <w-input
              :styleInput="{
                width: '100%'
              }"
              @input="handleSearch"
          ></w-input>
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
            <div class="article-list-item clear">
              <ul class="list">
                <li class="item"
                    v-for="(item, index) in blogList"
                    :key="item.id"
                >
                  <div class="item-left">
                    <div class="title-box">
                      <span class="title"
                            @click="handleDetail(item)"
                      >{{ item.title }}</span>
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
              <div class="tab">
                <div class="tab-title">
                  <span
                      class="tab-title-item"
                      :class="{
                        active: tabActive === 'new'
                      }"
                      @click="handleToggleTab('new')"
                  >最近更新</span>
                  <span
                      class="tab-title-item"
                      @click="handleToggleTab('rank')"
                      :class="{
                        active: tabActive === 'rank'
                      }">排行榜</span>
                </div>
                <!--      最近更新-->
                <ul class="tab-list" v-show="tabActive === 'new'">
                  <li class="tab-list-item clear">
                    <span class="title fl">最近更新-技巧</span>
                    <span class="time fr">07-22</span>
                  </li>
                </ul>
                <!--      排行榜-->
                <ul class="tab-list" v-show="tabActive === 'rank'">
                  <li class="tab-list-item clear">
                    <span class="title fl">排行榜-技巧</span>
                    <span class="time fr">07-22</span>
                  </li>
                </ul>
              </div>
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
<style scoped lang="less">
@import "./index";
</style>
