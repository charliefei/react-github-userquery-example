import React, { Component } from 'react'

export default class JsxDemo extends Component {
  state = {
    persons: [
      {id: 1, name: 'charlie'},
      {id: 2, name: 'feirui'},
      {id: 3, name: 'mary'},
      {id: 4, name: 'jack'}
    ],
    isShow: false
  }

  conditionFn = () => {
    const {persons} = this.state
    if(!this.state.isShow){
      return <h1>welcome</h1>
    }else{
      return (
        <ul>
          {
            persons.map(person => {
              return <li key={person.id}>{person.name}</li>
            })
          }
        </ul>
      )
    }
  }

  render() {
    return (
      this.conditionFn()
    )
  }
}
