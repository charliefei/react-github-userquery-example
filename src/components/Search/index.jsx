import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'
import axios from 'axios'

export default class Search extends Component {
  iptRef = React.createRef()

  search = async () => {
    const {iptRef} = this
    PubSub.publish('getUsers', {isFirst:false,isLoading:true})

    try {
      const {data:res} = await axios.get(`https://api.github.com/search/users?q=${iptRef.current.value}`)

      PubSub.publish('getUsers', {isLoading:false,users:res.items})
  
      console.log('@@',res);
    } catch (error) {
      PubSub.publish('getUsers', {isLoading:false,err: error.message})
    }
  }

  render() {
    return (
      <div className='row search-box'>
        <div className='row search-zone'>
          <div className='col'>
            <input
              ref={this.iptRef}
              type="text"
              className="form-control"
              placeholder="请输入用户名"
            />
          </div>
          <div className='col'>
            <button 
              type="button" 
              className="btn btn-dark"
              onClick={this.search}
            >
              搜索
            </button>
          </div>
        </div>
      </div>
    )
  }
}
