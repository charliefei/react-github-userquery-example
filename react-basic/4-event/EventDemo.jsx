import React, { Component } from 'react'

export class EventDemo extends Component {
  state = {
    username: '',
    password: ''
  }

  // 函数柯里化（闭包）
  saveFormData = (key) => {
    return (e) => {
      this.setState({
        [key]: e.target.value
      })
    }
  }

  savePersonInfo = (e, text) => {
    // ...
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {username, password} = this.state
    alert(`用户名：${username}，密码：${password}`)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        用户名：
        <input 
          onSubmit={this.saveFormData('username')} 
          type="text" 
          name='username'
        />
        密码：
        <input
          onSubmit={this.saveFormData('password')}
          type="password"
          name='password' 
        />
        简介：
        <input 
          // onClick={this.savePersonInfo.bind(e, 'text')}
          onClick={(e) => this.savePersonInfo(e, 'text')}
          type="text" 
        />
        <br />
        <button>提交</button>
      </form>
    )
  }
}

export default EventDemo