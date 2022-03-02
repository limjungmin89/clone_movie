import React from 'react'
import './App.css'
import Button from './components/Button'
import Todos from './components/Todos'
import ShowHide from './components/ShowHide'
import CoinTracker from './components/CoinTracker'

const App = () => {
  return (
    <div>
      <Button btnText="Click Me" />
      <ShowHide />
      <Todos />
      <CoinTracker />
    </div>
  )
}

export default App
