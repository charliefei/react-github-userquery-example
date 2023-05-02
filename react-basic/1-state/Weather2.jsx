import React, { Component } from 'react'

export class Weather2 extends Component {
  constructor(props) {
    super(props)
    console.log(props); 
  }
  // 状态
  state = {
    isHot: false
  }
  
  render() {
    const {isHot} = this.state
    return (
    <>
      <h1 onClick={this.changeWeather}>
        今天天气很{isHot ? '炎热' : '凉爽'}
      </h1>  
    </>
    )
  }
  // 事件处理函数
  changeWeather = () => {
   this.setState({isHot: !this.state.isHot}) 
  }
}

export default Weather2