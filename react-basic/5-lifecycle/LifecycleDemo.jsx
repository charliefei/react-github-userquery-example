import React, { Component } from 'react'

export class LifecycleDemo extends Component {
  constructor(props){
    super(props)
    console.log('constructor')
  }

  state = {
    count: 0
  }

  add = () => {
    this.setState({count:this.state.count++})
  }

  death = () => {
    // 组件卸载
    console.log('....');
  }

  refresh = () => {
    this.forceUpdate()
  }

  // 过时的钩子
  //componentWillMount(){}

  // 从props中获取派生的state：
  // 使state的值在任何情况下都取决于props
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    return props
  }

  // setState改变状态后，组件更新的阀门
  shouldComponentUpdate(){
    return true
  }

  // 组件进行页面渲染
  render() {
    console.log('render')
    const {count} = this.state
    return (
    <>
      <h2>当前求和：{count}</h2>
      <button onClick={this.add}>点击++</button>
      <button onClick={this.death}>卸载组件</button>
      <button onClick={this.refresh}>强制更新组件</button>
    </>
    )
  }

  // 在更新之前获取快照：配合componentDidUpdate使用
  /**
    React 将在 React 更新 DOM 之前立即调用它。
    它使您的组件能够在可能发生更改之前从 DOM 捕获一些信息（例如滚动位置）
    此生命周期方法返回的任何值都将作为参数传递给componentDidUpdate.
   */
  getSnapshotBeforeUpdate(preProps, preState){
    console.log(preProps, preState);
    console.log('getSnapshotBeforeUpdate')
    return 'snapshot'
  }

  // 组件完成挂载
  componentDidMount(){
    console.log('componentDidMount');
  }

  // 过时的钩子
  //componentWillUpdate(){}

  // 组件完成更新
  componentDidUpdate(preProps, preState, snapshotVal){
    console.log(preProps, preState, snapshotVal);
    console.log('componentDidUpdate')
  }

  // 组件即将卸载
  componentWillUnmount(){
    console.log('componentWillUnmount')
  }
}

export default LifecycleDemo