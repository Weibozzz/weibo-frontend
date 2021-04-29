import GlobalHeader from '@/components/GlobalHeader/index.vue'
import GlobalFooter from '@/components/GlobalFooter/index.vue'
import GuitorAd from '@/components/GuitorAd/index.vue'
import GlobalLoading from '@/components/GlobalLoading/index.vue'
import GlobalTips from '@/components/GlobalTips/index.vue'
import DetailAd from '@/components/DetailAd/index.vue'
import Api from '@/api'
import marked from 'marked'
import hljs from 'highlight.js'
import { markdownConfig } from '@/plugin/markdown'

const { options, config } = markdownConfig
hljs.configure(config)
marked.setOptions({
  highlight: (code) => hljs.highlightAuto(code).value,
  ...options
})
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
          this.content = marked(decodeURIComponent(data.content))
        }
      }).catch(err => {
      })
    },
  }
}
