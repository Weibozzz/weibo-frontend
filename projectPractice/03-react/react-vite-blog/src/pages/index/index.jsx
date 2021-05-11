import React, { Component } from 'react'
import './index.less'
import { pageIndexConstantData } from '@/constant'
class Index extends Component {
  constructor () {
    super()
    this.state = {
      ...pageIndexConstantData,
      timer: null,
      backgroundImage: 'http://images.static.liuweibo.cn/image/index/zhoulou.jpg'
    }
  }
  getRandom () {
    return Math.random() * this.state.BG_INDEX.length | 0
  }
  handleTarget = (item) => () => {
    console.log(item)
    this.props.history.push('/list')
  }
  init () {
    const defaultIndexBg = 0
    const timer = setInterval(() => {
      let random = this.getRandom()
      if (random === defaultIndexBg) {
        random = this.getRandom()
      }
      this.setState({
        backgroundImage: this.state.BG_INDEX[random].value
      })
    }, 3000)
    this.setState({
      timer
    })
  }
  componentDidMount () {
    console.log('componentDidMount')
    this.init()
  }
  componentWillUnmount () {
    console.log('componentWillUnmount')
    clearInterval(this.state.timer)
  }
  render () {
    const {
      backgroundImage, title, subTitle,
      footer, titleList
    } = this.state
    return (
      <div className="container-rapper"
           style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container">
          {/*头部标题*/}
          <div className="header">
            <h1>{title}</h1>
            <div className="sub-title">{subTitle}</div>
          </div>
          {/*主题内容*/}
          <div className="content">
            <ul className="list">
              {
                titleList.map((item, index) => {
                  return (
                    <li
                      className="item"
                      key={index}
                      onClick={this.handleTarget(item)}
                    >
                      <a>》》{item.title}</a>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          {/*页脚*/}
          <div className="footer">
            {footer}
          </div>
        </div>
      </div>
    )
  }
}
export default Index
