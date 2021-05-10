<template>
  <div class="container-rapper"
       :style="{backgroundImage: `url(${backgroundImage})`}"
  >
    <div class="container">
      <!--  头部标题-->
      <div class="header">
        <h1>{{ title }}</h1>
        <div class="sub-title">{{ subTitle }}</div>
      </div>
      <!--  主题内容-->
      <div class="content">
        <ul class="list">
          <li class="item"
              :class="{
              'last-item': index === titleList.length - 1
            }"
              :key="index"
              v-for="(item, index) in titleList">
<!--            <router-link v-bind:to="'list'">》》{{ item.title }}</router-link>-->
            <a @click="handleTarget(item)">》》{{ item.title }}</a>
          </li>
        </ul>
      </div>
      <!--  页脚-->
      <div class="footer">
        {{ footer }}
      </div>
    </div>
  </div>
</template>

<script>
import { pageIndexConstantData } from '@/constant'
import { mapMutations, mapActions } from 'vuex'
export default {
  data () {
    return {
      ...pageIndexConstantData,
      backgroundImage: 'http://images.static.liuweibo.cn/image/index/zhoulou.jpg'
    };
  },
  created () {},
  mounted () {
    this.init()
    // this.setDate('2021年6月15日')
    this.$store.commit('setDate', '2021年6月16日')
    // this.$store.dispatch('setAccessToken', 'abcdefg123456')
    this.setAccessToken('abcdefg123456789')
    console.log(this.$store.state)
  },
  methods: {
    ...mapMutations([
      'setDate'
    ]),
    ...mapActions([
      'setAccessToken'
    ]),
    init () {
      const defaultIndexBg = 0
      setInterval(()=>{
        let random = this.getRandom()
        if (random === defaultIndexBg) {
          random = this.getRandom()
        }
        this.backgroundImage = this.BG_INDEX[random].value
      }, 3000)
    },
    getRandom () {
      return Math.random() * this.BG_INDEX.length | 0
    },
    handleTarget (item) {
      this.$router.push('/list')
    }
  }
}
</script>

<style scoped lang="less">
.container-rapper {
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: All 2s ease;
}
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 800px;
  /*margin-top: 100px; todo 超出隐藏*/
  font-size: 14px;
  color: white;
  background-color: rgba(0, 0, 0, .3);
  border-radius: 20px;
  transform: translate(-50%, -50%);
}


.header {
  padding-top: 26px;
  margin-bottom: 38px;
}

h1 {
  font-size: 18px;
  text-align: center;
  color: white;
}

.sub-title {
  margin-top: 16px;
  text-align: center;
}

.content {
  margin-left: 20px;
  margin-right: 20px;
  padding-top: 22px;
  padding-bottom: 12px;
  border-top: 1px solid #ffffff;
  border-bottom: 1px solid #ffffff;
}
.list{
  width: 690px;
  margin: 0 auto;
}
.item {
  font-size: 14px;
  padding: 5px 2px;
  margin-bottom: 15px;
  background-color: rgba(0, 0, 0, .5);
  border-radius: 6px;
}
.item{
  a{
    color: white;
    text-decoration: none;
    cursor: pointer;
  }
}
.last-item{
  margin-bottom: 0;
}
.footer {
  padding: 10px 20px;
  text-align: right;
}

</style>
