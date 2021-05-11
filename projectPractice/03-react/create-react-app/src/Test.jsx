import React, { Component } from 'react'
import  './test.less'
import style from  './test2.module.less'

class App extends  Component{
  constructor() {
    super()
    this.state = {
      test: 'state'
    }
  }
  render(){
    console.log(this.props)
    return (
      <div>
        <h1 className={'red'}>普通 css</h1>
        <h2 className={style.green}>CSS module</h2>
        {this.props.test}
      </div>
    );
  }
}

export default App
