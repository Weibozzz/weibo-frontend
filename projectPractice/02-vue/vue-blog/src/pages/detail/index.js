import GlobalHeader from '@/components/GlobalHeader/index.vue'
import GlobalFooter from '@/components/GlobalFooter/index.vue'
import GuitorAd from '@/components/GuitorAd/index.vue'
import GlobalLoading from '@/components/GlobalLoading/index.vue'
import GlobalTips from '@/components/GlobalTips/index.vue'
import DetailAd from '@/components/DetailAd/index.vue'
import Api from '@/api'
export default {
  components: {
    GuitorAd,
    DetailAd,
    GlobalHeader,
    GlobalTips,
    GlobalLoading,
    GlobalFooter
  },
  data () {
    return {
      content: ''
    };
  },
  created () {
    this.getDetailData()
  },
  mounted () {
  },
  methods: {
    // 获取博客文章
    getDetailData () {
      this.$http({
        url: Api.apiBlogDetail,
        params: {
          id: this.$route.params.id
        }
      }).then(res => {
        const data = res[0] || {}
        if(data.content) {
          this.content = decodeURIComponent(data.content)
        }
      }).catch(err => {
      })
    },
  }
}
