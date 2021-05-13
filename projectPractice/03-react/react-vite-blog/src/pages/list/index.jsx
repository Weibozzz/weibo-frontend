import React, { Component, PureComponent } from 'react'
import './index.less'
import smilePng from '@/static/images/smile.png'
import Api from '@/api'
import request from '@/request'
import GlobalHeader from '@/components/GlobalHeader'
import GlobalFooter from '@/components/GlobalFooter'
import GlobalTips from '@/components/GlobalTips'
import { Input, Pagination } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons'
const Search = Input.Search
class List extends PureComponent {
  constructor () {
    super()
    this.state = {
      desc: 'desc',
      dailyData: '',
      blogList: [],
      blogListTotal: 1,
      totalPage: 0,
      num: 1,
      pageNum: 10,
      tabActive: 'new',
      tabObj: {
        new: '最近更新',
        rank: '排行榜',
      }
    }
  }
  // 获取博客列表
  getListData () {
    const { num, pageNum, wd } = this.state
    request({
      url: Api.apiBlogList,
      params: {
        type: 'title',
        num,
        pageNum,
        wd
      }
    }).then(res => {
      this.setState({
        blogList: res
      })
    }).catch(err => {
    })
  }
  // 获取博客总文章数
  getListTotal () {
    request({
      url: Api.apiBlogListTotal,
      params: {
        type: 'title',
        wd: ''
      }
    }).then(res => {
      const data = res[0] || {}
      const { total = 0 } = data
      this.setState({
        totalPage: total,
        blogListTotal: Math.ceil(total / this.state.pageNum)
      })
    })
  }
  componentDidMount () {
    this.getListData()
    this.getListTotal()
    this.getDaily()
  }
  componentWillUnmount () {
  }
  handleToggleTab = (tabActive) => () => {
    this.setState({
      tabActive
    })
  }
  // 获取日常笑话
  getDaily () {
    // https://github.com/MZCretin/RollToolsApi
    request({
      url: '/mxnzp/api/jokes/list/random',
      method: 'post',
      headers: {
        app_id: 'bjfkpkmoimm7bnrh',
        app_secret: 'emQ1MXh5M1ZqdzNYTmloOHNxalJpdz09'
      }
    }).then(res => {
      const data = res.data[0] || {}
      console.log(data.content)
      this.setState({
        dailyData: data.content
      })
    })
  }
  handleDetail = (item) => () => {
    this.props.history.push(`/detail/${item.id}`)
  }
  handlePagination = (index) => () => {
    this.setState({
      num: index + 1
    })
    this.getListData()
  }
  handlePaginationChange = (page, pageSize) => {
    this.handlePagination(page - 1)()
  }
  renderType = (item) => {
    if (item.type) {
      return (
        item.type.split(',')
          .map(type => {
            return (
              <span className="tag"
                    key={type}
              >{type}</span>
            )
          })
      )
    }
    return null
  }
  // 处理时间
  untilTime = (time) => {
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
  onSearch = (value) => {
    console.log(value)
    this.setState({
      wd: value
    })
    this.getListData()
  }
  itemRender = (current, type, originalElement) => {
    if (type === 'prev') {
      return <a onClick={this.handlePagination(current)}>Previous</a>;
    }
    if (type === 'next') {
      return <a onClick={this.handlePagination(current)}>Next</a>;
    }
    return originalElement;
  }
  render () {
    const {
      desc, blogList = [],
      tabActive, tabObj, num,
      dailyData,
      totalPage,
      blogListTotal = 1
    } = this.state
    const tabList = Object.entries(tabObj)
    return (
      <div>
        <GlobalHeader />
        <div className="content-box">
          <GlobalTips dailyData={dailyData} extra={
            (<span style={{color: 'red'}}>额外信息</span>)
          }>
            关注公众平台 ：
          </GlobalTips>
          {/*文章列表区域*/}
          <div className="article">
            {/*列表展示*/}
            <div className="article-list">
              {/*文章搜索框*/}
              <Search
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={this.onSearch}
              />
              <div className="article-box">
                {/*提示*/}
                <div className="article-list-tips">
                  <InfoCircleOutlined className="icon antd-icon" />
                  <span className="content">
                    <div className="tips">技术文章提示</div>
                    <div className="cont">
                      本站只是为了展示 React SSR 的效果而搭建的一个博客平台， 前端技术博客知识体系移步这里 【
                      <span className="mark">前端知识体系</span>
                      】
                      <span>{desc}</span>
                    </div>
                  </span>
                </div>
                {/*文章*/}
                <div className="article-list-item clear">
                  <ul className="list">
                    {
                      blogList.map((item, index) => {
                        return (
                          <li className="item"
                              key={item.id}
                          >
                            <div className="item-left">
                              <div className="title-box">
                                <span className="title"
                                      onClick={this.handleDetail(item)}
                                >{item.title}</span>
                                {
                                  this.renderType(item)
                                }
                              </div>
                              <div className="extra-info">
                                <span className="time">
                                  {/*2019-05-29 10:25 星期三*/}
                                  {this.untilTime(item.createTime)}
                                </span>
                                <span className="icon-info">
                                  <img className="icon" src={smilePng} />
                                  {item.like}
                                </span>
                                <span className="icon-info">
                                  <img className="icon" src={smilePng} />
                                  {item.visitor}
                                </span>
                              </div>
                            </div>
                            <div className="item-right">
                              <img className="article-type-icon" src="http://images.static.liuweibo.cn/image/icon/others.jpg" />
                            </div>
                          </li>
                        )
                      })
                    }
                  </ul>
                  <div className="tab">
                    <div className="tab-title">
                      {
                        tabList.map(([key, value]) => (
                          <span
                            key={key}
                            className={
                              `tab-title-item 
                              ${tabActive === key ? 'active' : ''}`
                            }
                            onClick={this.handleToggleTab(key)}
                          >{value}</span>
                        ))
                      }
                    </div>
                    {/*最近更新*/}
                    <ul className="tab-list">
                      <li className="tab-list-item clear">
                        <span className="title fl">{tabObj[tabActive]}-技巧</span>
                        <span className="time fr">07-22</span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*分页*/}
                <div className="article-list-pages">
                  <div className="tips">我说有底线的……</div>
                  <div className="pagination">
                    <span className="previous">previous</span>
                    <div className="list">
                      {
                        [...Array(blogListTotal)].map((item, index) => (
                          <li className={
                            `item ${num === index + 1 ? 'active' : ''}`
                          }
                          key={index}
                          onClick={this.handlePagination(index)}
                        >{index + 1}</li>
                        ))
                      }
                    </div>
                    <span className="next">next</span>
                  </div>
                  <Pagination
                    current={num}
                    total={totalPage}
                    onChange={this.handlePaginationChange}
                    itemRender={this.itemRender} />
                </div>
              </div>
            </div>
            {/*额外的信息*/}
            <div className="article-extra">
            </div>
          </div>
        </div>
        <GlobalFooter />
      </div>
    )
  }
}
export default List
