import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: ''
  }

  componentDidMount(){
    PubSub.subscribe('getUsers', (msg, newState) => {
      console.log(msg);
      this.setState({...newState})
    })
  }

  render() {
    // console.log(this);
    const {users,isFirst,isLoading,err} = this.state
    return (
      isFirst ? <h3>欢迎~~</h3> :
      isLoading ? <h3>Loading...</h3> :
      <div className='row list'>
        {
          users.map(user => {
            return (
              <div className="col list-item">
                <a href={user.html_url}>
                  <img
                    src={user.avatar_url}
                    alt="avatar"
                    className='avatar'
                  />
                  <div style={{marginLeft: '15px'}}>{user.login}</div>
                </a>
              </div>
            )
          })
        }
      </div>
    )
  }
}
