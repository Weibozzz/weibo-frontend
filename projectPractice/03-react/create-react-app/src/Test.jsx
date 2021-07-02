import React, { Component } from 'react'
import style from  './test.module.scss'
import './test.scss'

class App extends  Component{
  constructor() {
    super()
    this.state = {
      test: 'state'
    }
  }
  render(){
    console.log(this.props, style)
    return (
      <div>
        <h1 className={'red'}>普通 css </h1>
        <h2 className={style.green}>CSS module</h2>
        {this.props.test}
      </div>
    );
  }
}

export default App
