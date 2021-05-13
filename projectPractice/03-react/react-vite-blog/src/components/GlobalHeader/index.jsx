import React, { Component, PureComponent } from 'react'
import './index.less'
import {
  Link
} from "react-router-dom";

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
      <div className="global-header header">
        <ul className="list">
          <li className="item">
            <Link to="/">网站首页</Link>
          </li>
          <li className="item active">文章列表</li>
          <li className="item">关于我</li>
        </ul>
      </div>
    )
  }
}
export default List
