import GlobalHeader from '@/components/GlobalHeader/index.vue'
import GlobalFooter from '@/components/GlobalFooter/index.vue'
import GuitorAd from '@/components/GuitorAd/index.vue'
import GlobalLoading from '@/components/GlobalLoading/index.vue'
import Api from '@/api'
export default {
  components: {
    GuitorAd,
    GlobalHeader,
    GlobalLoading,
    GlobalFooter
  },
  data () {
    return {
      loading: false,
      dailyData: '',
      blogList: [],
      blogListTotal: 0,
      num: 1,
      pageNum: 10,
    };
  },
  created () {
    this.getListData()
    this.getDaily()
    this.getListTotal()
  },
  mounted () {
  },
  methods: {
    // 获取日常笑话
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
    // 获取博客列表
    getListData () {
      this.loading = true
      this.$http({
        url: Api.apiBlogList,
        params: {
          type: 'title',
          num: this.num,
          pageNum: this.pageNum,
          wd: ''
        }
      }).then(res => {
        this.loading = false
        this.blogList = res
      }).catch(err => {
        this.loading = false
      })
    },
    // 获取博客总文章数
    getListTotal () {
      this.$http({
        url: Api.apiBlogListTotal,
        params: {
          type: 'title',
          wd: ''
        }
      }).then(res => {
        const data = res[0] || {}
        const { total = 0 } = data
        this.blogListTotal = Math.ceil(total / this.pageNum)
      })
    },
    // 分页获取数据
    handlePagination (index) {
      this.num = index + 1
      this.getListData()
    },
    // 处理时间
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
