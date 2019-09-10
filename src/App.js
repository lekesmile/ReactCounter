import React, { Component } from 'react'
import Counter from './components/counter'
import CounterHook from './components/counterHook'

export default class App extends Component {
  render() {
    return (
      <div>
        
        <Counter />
        <CounterHook />
      </div>
    )
  }
}
