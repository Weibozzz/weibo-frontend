import React, { Component } from 'react'
import './index.less'
import '@/assets/markdown.less'
import '@/assets/markdown-navbar.less'
import Api from '@/api'
import request from '@/request'
import GlobalHeader from '@/components/GlobalHeader'
import GlobalFooter from '@/components/GlobalFooter'
import GlobalTips from '@/components/GlobalTips'
import marked from 'marked'
import hljs from 'highlight.js'
import { Divider, Row, Col } from 'antd'
import { markdownConfig } from '@/plugin/markdown'
import MarkNav from 'markdown-navbar'

const { options, config } = markdownConfig
hljs.configure(config)
marked.setOptions({
  highlight: (code) => hljs.highlightAuto(code).value,
  ...options
})
const getHtml = (str, newTime) => {
  return str ? str.replace(/@quot;|@apos;/g, function (str) {
      if (str === '@quot;') {
        return '"'
      } else if (str === "@apos;") {
        return "'"
      }
    })
    : '';
}
class Index extends Component {
  constructor () {
    super()
    this.state = {
      title: '',
      content: '',
    }
  }

  // 获取博客文章
  getDetailData = () => {
    console.log(this.props.match.params.id)
    const { id } = this.props.match.params
    if (isNaN(id))return;
    request({
      url: Api.apiBlogDetail,
      params: {
        id
      }
    }).then(res => {
      console.log(res)
      const data = res[0] || {}
      if(data.content) {
        this.setState({
          title: data.title,
          content: decodeURIComponent(getHtml(data.content))
        })
      }
    }).catch(err => {
    })
  }
  componentDidMount () {
    this.getDetailData()
  }
  componentWillUnmount () {
  }
  render () {
    const {
      content, title
    } = this.state
    return (
      <div className='detail-page'>
        {/*头部header*/}
        <GlobalHeader />
        <div className="content-box">
          <GlobalTips
            extra={(<span style={{color: '#009A61'}}>这是详情页</span>)}
          >
            关注B站:
          </GlobalTips>
          <div className="article">
            <div className="article-wrapper">
              <Row>
                <Col
                  sm={{ span: 0 }}
                  xs={{ span: 0 }}
                  lg={{ span: 1 }}>
                </Col>
                <h1>{title}</h1>
              </Row>
              <Divider />
              {/*文章区域*/}
              <Row>
                <Col
                  sm={{ span: 0 }}
                  xs={{ span: 0 }}
                  lg={{ span: 1 }}>
                </Col>
                <Col
                  sm={{ span: 24 }}
                  xs={{ span: 24 }}
                  lg={{ span: 15 }}>
                  <div
                    className="article-detail-wrapper"
                    dangerouslySetInnerHTML={{__html: marked(content)}}
                  ></div>
                </Col>
                <Col
                  sm={{ span: 0 }}
                  xs={{ span: 0 }}
                  lg={{ span: 8 }}>
                  <MarkNav
                    className="article-menu sticky-nav"
                    source={content}
                    headingTopOffset={0}
                  />
                </Col>
              </Row>
            </div>
          </div>
        </div>
        {/*页脚*/}
        <GlobalFooter />
      </div>
    )
  }
}
export default Index
