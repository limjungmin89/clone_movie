import React from 'react'
import './App.css'
import Button from './components/Button'
import Todos from './components/Todos'
import ShowHide from './components/ShowHide'
import CoinTracker from './components/CoinTracker'
import Movie from './components/Movie'

const App = () => {
  return (
    <div>
      <Button btnText="Click Me" />
      <ShowHide />
      <Todos />
      <CoinTracker />
      <Movie />
    </div>
  )
}

export default App
