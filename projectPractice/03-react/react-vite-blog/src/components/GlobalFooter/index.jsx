import React, { Component, PureComponent } from 'react'
import './index.less'
class List extends PureComponent {
  constructor () {
    super()
    this.state = {
    }
  }
  render () {
    const {
    } = this.state
    return (
      <div className="global-footer footer">
        <p className="copy-name">
          Power & Designed by
          <a className="name" href="../../index/index.html">weiboqianduan</a>
        </p>
        <p className="copy-num">
          © 2017
          <a href="../../index/index.html">陕ICP备17015350号</a>
        </p>
      </div>
    )
  }
}
export default List
