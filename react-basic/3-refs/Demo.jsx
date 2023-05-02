import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { useRef } from "react";

export class Demo extends Component {
  /**
   * React.createRef()返回一容器，
   * 存储被ref标识的dom节点，且容器是专人专用
   * 若标识多个myRef，则取最后一个被标识的节点
   */
  myRef = React.createRef() // {current:Element}
  myRef2 = useRef(null) // {current:Element}

  state = {
    isHot: false
  }

  changeWeather = () => {
    this.setState({isHot: !this.state.isHot})
  }

  showData = (e) => {
    console.log(e.target);
    alert(this.input1.value)
  }

  showData2 = () => {
    alert(this.input2.value)
  }

  showData3 = () => {
    console.log(this.myRef);
    alert(this.myRef.current.value)
  }

  /**
   * ref里面的回调函数由程序自动调用
   * - 接受一个currentNode的参数
   * - 调用两次： 
   * 一次调用接收当前dom元素
   * 一次调用接收null值(方便页面重新渲染后清除前一次的回调)
   */
  render() {
    const {isHot} = this.state
    return (
    <>
      <input ref={c => {this.input1 = c}} type="text" />
      <button onClick={this.showData}>点击</button>
      <br />
      <input onBlur={this.showData2} ref={c => {this.input2 = c}} type="text" />
      <hr />
      <h1 onClick={this.changeWeather}>
        Today's weather is {isHot ? 'hot' : 'comfortable'}
      </h1>
      <hr />
      <input ref={this.myRef} type="text" />
      <button onClick={this.showData3}>点击</button>
    </>
    )
  }
}

export default Demo