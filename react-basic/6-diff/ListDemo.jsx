import React, { Component } from 'react'
// 模块化css
// import ListDemoCss from './ListDemo.css'

/**
 * 虚拟dom中key的作用：
 *  - key是虚拟dom对象的标识，在更新渲染时key很重要
 *  - diff算法：当状态中数据发生改变，react会根据新数据生成新的虚拟dom
 * 随后react进行【旧虚拟dom】和【新虚拟dom】的diff比较，比较规则
 *    - 在旧虚拟dom找到了与新虚拟dom相同的key
 *        - 若虚拟dom中内容没发生改变，直接使用之前的真实dom
 *        - 若虚拟dom中内容发生改变，则生成新的真实dom，随后替换掉页面之前的真实dom
 *    - 在旧虚拟dom未找到与新虚拟dom相同的key
 *        - 根据实际创建新的真实dom渲染到页面
 * 
 * 使用索引作为key会出现的问题：
 *  - 逆序添加和删除列表元素，会导致index的重新排序
 *  - 所有key的变化会造成不必要的页面渲染，造成性能问题
 *  - 且列表中如果带有输入框类组件会造成数据丢失
 */
export default class ListDemo extends Component {
  state = {
    names: ['charlie', 'feirui', 'kk']
  }

  render() {
    const {names} = this.state
    return (
      <ul>
        {
          names.map((name, index) => {
            return <li key={index}>{ name }</li>
          })
        }
      </ul>
    )
  }
}
