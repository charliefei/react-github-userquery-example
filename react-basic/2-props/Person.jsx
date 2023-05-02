import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Person extends Component {
  // 限制外部传参的类型
  static propTypes = {
    name: PropTypes.string.isRequired,
    gender: PropTypes.string,
    age: PropTypes.number
  }
  // 规定props内属性的默认值
  static defaultProps = {
    gender: '♀',
    age: 18
  }

  render() {
    const {name, gender, age} = this.props
    // propsType和defaultProps在类构造器身上
    // console.log('@@', this);
    return (
      <>
        <ul>
          <li>name: {name}</li>
          <li>gender: {gender}</li>
          <li>age: {age}</li>
        </ul>
      </>
    )
  }
}

// 把这两个属性挂载到类组件上即可
//Person.propTypes = {}
//Person.defaultProps = {}

export default Person