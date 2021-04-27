import GlobalHeader from '@/components/GlobalHeader/index.vue'
import GlobalFooter from '@/components/GlobalFooter/index.vue'
import GuitorAd from '@/components/GuitorAd/index.vue'
import Api from '@/api'
export default {
  components: {
    GuitorAd,
    GlobalHeader,
    GlobalFooter
  },
  data () {
    return {
      dailyData: '',
      blogList: [],
    };
  },
  created () {
    this.getListData()
    this.getDaily()
  },
  mounted () {
  },
  methods: {
    getDaily () {
      // https://github.com/MZCretin/RollToolsApi
      this.$http({
        url: '/mxnzp/api/jokes/list/random',
        method: 'post',
        headers: {
          app_id: 'bjfkpkmoimm7bnrh',
          app_secret: 'emQ1MXh5M1ZqdzNYTmloOHNxalJpdz09'
        }
      }).then(res => {
        const data = res.data[0] || {}
        console.log(data.content)
        this.dailyData = data.content
      })
    },
    getListData () {
      this.$http({
        url: Api.apiBlogList,
        params: {
          type: 'title',
          num: 1,
          pageNum: 10,
          wd: ''
        }
      }).then(res => {
        this.blogList = res
      })
    },
    untilTime (time) {
      if (!time) {
        return ''
      }
      const weekMapping = {
        0: '日',
        1: '一',
        2: '二',
        3: '三',
        4: '四',
        5: '五',
        6: '六'
      }
      let dateData = new Date(time * 1000)
      let year = dateData.getFullYear()
      let month = dateData.getMonth() + 1
      let date = dateData.getDate()
      let day = dateData.getDay()
      let h = dateData.getHours()
      let m = dateData.getMinutes()
      let s = dateData.getSeconds()
      // return { year, month, date, h, m, s }
      return `${year}-${month}-${date} ${h}:${m} 星期${weekMapping[day]}`;
    }
  }
}
