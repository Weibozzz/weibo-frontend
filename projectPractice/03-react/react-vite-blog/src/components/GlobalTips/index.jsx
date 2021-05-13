import React, { Component } from 'react'
import './index.less'
import PropTypes from 'prop-types'
import { SmileOutlined, CloseOutlined } from '@ant-design/icons'
class Index extends Component {
  constructor () {
    super()
    this.state = {
    }
  }
  render () {
    const {
      dailyData,
      children,
      extra
    } = this.props
    return (
      <div className='global-tips'>
        {/*tips*/}
        <div className="title-tips">
          <SmileOutlined />
          {children}
          '伟波前端'，将是一个美好的邂逅哦!
          {
            dailyData && (
              <span className="daily-tip">({dailyData})</span>
            )
          }
          {extra}
          <CloseOutlined  className="close-icon"/>
        </div>
        {/*github*/}
        <div className="github">
      <span className="github-title">
        github
      </span>
          <span className="github-star">200</span>
        </div>
      </div>
    )
  }
}
// https://zh-hans.reactjs.org/docs/typechecking-with-proptypes.html
Index.propTypes = {
  dailyData: PropTypes.string
}
export default Index
