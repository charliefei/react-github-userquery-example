import React, { Component } from 'react'
import Weather2 from './1-state/Weather2'
import Person from './2-props/Person'
import PersonFn from './2-props/PersonFn'
import Demo from './3-refs/Demo'

const person = {
    name: 'feirui',
    gender: '♂',
    age: 90
}
export class App extends Component {
    render() {
        return (
        <>
            {/* <Weather2 />
            <hr />
            <Person name="charlie" gender="♂" age={20} />
            <Person name="charlie" />
            <Person {...person} />
            <PersonFn name="lili" />
            <hr /> */}
            {/* <Demo /> */}
        </>    
        )
    }
}

export default App