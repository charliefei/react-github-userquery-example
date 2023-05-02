import React, { Component } from 'react'

export class Weather extends Component {
    // 只被调用一次
    constructor(props){
        super(props)
        console.log(this); // App类组件实例对象
        // 初始化状态
        this.state = { isHot: false }
        // 改变事件回调函数this指向,同时将该函数挂载到组件实例身上
        this.changeWeather = this.changeWeather.bind(this)
    }
    // 页面所依赖的状态被修改，同步的会再次调用该渲染函数
    render() {
        const {isHot} = this.state
        return (
        <>
            <h1 onClick={this.changeWeather}>
              Today's weather is {isHot?'hot':'comfortable'}
            </h1>
        </>    
        )
    }
    changeWeather(){
        // 该成员方法放在App类的原型对象上
        // 该成员方法作为click事件的回调，不是由组件实例调用，
        // 而是直接调用，故this指向有问题

        // this.setState() 响应式的修改数据
        this.setState({isHot: !this.state.isHot})
    }
}

export default Weather