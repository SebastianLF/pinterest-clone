import React from 'react'
import ReactDOM from 'react-dom'
import Menu from './Menu'
import Body from './Body'

const App = () => (
  <div>
    <Menu />
    <Body />
  </div>)

ReactDOM.render(<App />, document.querySelector(".app"));

export default App
