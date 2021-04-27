<template>
  <div class="container">
    <img class="guiter" src="~@/static/images/guiter.png">
    <!--  头部header-->
    <div class="header">
      <ul class="list">
        <li class="item">
          <a href="../../index/index-02/index.html" target="_blank">网站首页</a>
        </li>
        <li class="item active">文章列表</li>
        <li class="item">关于我</li>
      </ul>
    </div>
    <!--  主题内容-->
    <div class="content-box">
      <!--    tips-->
      <div class="title-tips">
        <img class="smile-icon" src="~@/static/images/smile.png">
        关注公众平台：'伟波前端'，将是一个美好的邂逅哦!
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
                <li class="item">
                  <div class="item-left">
                    <div class="title-box">
                      <span class="title">文章文章1</span>
                      <span class="tag">JavaScript</span>
                      <span class="tag">react</span>
                    </div>
                    <div class="extra-info">
                  <span class="time">
                    2019-05-29 10:25 星期三
                  </span>
                      <span class="icon-info">
                    <img class="icon" src="~@/static/images/smile.png">
                    12
                  </span>
                      <span class="icon-info">
                    <img class="icon" src="~@/static/images/smile.png">
                    12
                  </span>
                    </div>
                  </div>
                  <div class="item-right">
                    <img class="article-type-icon" src="http://images.static.liuweibo.cn/image/icon/others.jpg">
                  </div>
                </li>
                <li class="item">
                  <div class="item-left">
                    <div class="title-box">
                      <span class="title">文章文章1</span>
                      <span class="tag">JavaScript</span>
                      <span class="tag">react</span>
                    </div>
                    <div class="extra-info">
                  <span class="time">
                    2019-05-29 10:25 星期三
                  </span>
                      <span class="icon-info">
                    <img class="icon" src="~@/static/images/smile.png">
                    12
                  </span>
                      <span class="icon-info">
                    <img class="icon" src="~@/static/images/smile.png">
                    12
                  </span>
                    </div>
                  </div>
                  <div class="item-right">
                    <img class="article-type-icon" src="http://images.static.liuweibo.cn/image/icon/others.jpg">
                  </div>
                </li>
                <li class="item">
                  <div class="item-left">
                    <div class="title-box">
                      <span class="title">文章文章1</span>
                      <span class="tag">JavaScript</span>
                      <span class="tag">react</span>
                    </div>
                    <div class="extra-info">
                  <span class="time">
                    2019-05-29 10:25 星期三
                  </span>
                      <span class="icon-info">
                    <img class="icon" src="~@/static/images/smile.png">
                    12
                  </span>
                      <span class="icon-info">
                    <img class="icon" src="~@/static/images/smile.png">
                    12
                  </span>
                    </div>
                  </div>
                  <div class="item-right">
                    <img class="article-type-icon" src="http://images.static.liuweibo.cn/image/icon/others.jpg">
                  </div>
                </li>
                <li class="item">
                  <div class="item-left">
                    <div class="title-box">
                      <span class="title">文章文章1</span>
                      <span class="tag">JavaScript</span>
                      <span class="tag">react</span>
                    </div>
                    <div class="extra-info">
                  <span class="time">
                    2019-05-29 10:25 星期三
                  </span>
                      <span class="icon-info">
                    <img class="icon" src="~@/static/images/smile.png">
                    12
                  </span>
                      <span class="icon-info">
                    <img class="icon" src="~@/static/images/smile.png">
                    12
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
                  <li class="item active">1</li>
                  <li class="item">2</li>
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
    <div class="footer">
      <p class="copy-name">
        Power & Designed by
        <a class="name" href="../../index/index.html">weiboqianduan</a>
      </p>
      <p class="copy-num">
        © 2017
        <a href="../../index/index.html">陕ICP备17015350号</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  created () {},
  mounted () {
  },
  methods: {
  }
}
</script>

<style>

body {
  background-color: #f0f2f5;
}
</style>
<style scoped lang="less">
.guiter{
  position: fixed;
  top: 0;
  right: 0;
  width: 100px;
  z-index: 2;
}
.header {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0 160px;
  height: 64px;
  line-height: 64px;
  background-color: #001529;
  /*todo 先去掉看看*/
  z-index: 1;
}

.header .item {
  display: inline-block;
  padding: 0 18px;
  color: rgba(255, 255, 255, 0.65);
}
.header .item a{
  color: rgba(255, 255, 255, 0.65);
}

.header .item.active {
  color: rgba(255, 255, 255, 1);
  background-color: #017e66;
}

.footer {
  margin: 28px 0;
  text-align: center;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
}

.copy-name {
  margin-bottom: 18px;
}

.copy-name .name {
  color: #017e66;
}

.content-box {
  margin-top: 64px;
  padding: 0 160px;
}

.title-tips {
  position: relative;
  padding: 10px 40px;
  background-color: #f6ffed;
  font-size: 14px;
}

.title-tips .close-icon{
  position: absolute;
  right: 20px;
  top: 12px;
}
.title-tips .smile-icon{
  position: absolute;
  left: 20px;
  top: 12px;
}
.title-tips .smile-icon,
.title-tips .close-icon,
.github .smile-icon {
  width: 16px;
  vertical-align: middle;
}

.title-tips .smile-icon {
  margin-right: 6px;
}

.github {
  display: inline-block;
  border: 1px solid #d9d9d9;
}

.github-title, .github-star {
  display: inline-block;
  padding: 5px 14px;
}

.github-star {
  background-color: #ffffff;
  border-left: 1px solid #d9d9d9;
}

.article {
  background-color: white;
}

.article-list {
  /*width: 900px;*/
}

.article-list .article-box {
  padding: 0 20px;
}

.article-extra {
  width: 400px;
}

.article-list-tips {
  padding: 15px 20px;
  background-color: #e6f7ff;
  border: 1px solid #91d5ff;
}

.article-list-tips .icon {
  display: inline-block;
}

.article-list-tips .content {
  display: inline-block;
}

.article-list-tips .tips {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.85);
}

.article-list-tips .cont {
  margin-top: 10px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
}

.article-list-tips .mark {
  color: #017e66;
}

.article-list-item .article-type-icon {
  width: 40px;
}

.article-list-item .item-left {
  display: inline-block;
}

.article-list-item .item-right {
  display: inline-block;
}

.article-list-item .icon {
  width: 10px;
}

.article-list-item .item {
  padding: 16px 0;
  border-bottom: 1px solid #d9d9d9;
}

.article-list-item .title-box {
  margin-bottom: 26px;
}

.article-list-item .tag {
  display: inline-block;
  height: 22px;
  padding: 0 5px;
  margin-right: 10px;
  line-height: 22px;
  color: #017E66;
  background-color: rgba(1, 126, 102, 0.08);
  font-size: 13px;
}
.article-list-item .tag:hover{
  color: white;
  background-color: #017E66;
  cursor: pointer;
  transition: all 0.5s ease;
}

.article-list-item .extra-info {
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}

.article-list-item .time {
  margin-right: 10px;
}

.article-list-item .icon-info {
  padding: 0 10px;
  border-left: 1px solid #d9d9d9;
}

.article-list-pages {
  padding-top: 15px;
  padding-bottom: 20px;
}

.article-list-pages .tips {
  font-size: 14px;
  color: rgb(153, 153, 153);
}

.article-list-pages .list {
  display: inline-block;
}

.article-list-pages .item {
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: rgba(0, 0, 0, 0.65);
  border: 1px solid #d9d9d9;
}

.article-list-pages .item.active {
  color: #017E66;
  border: 1px solid #017E66;
}
.article-list-pages .next{
  cursor: pointer;
}


</style>
