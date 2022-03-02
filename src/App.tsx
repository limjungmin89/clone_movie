import React, { useEffect, useState } from 'react'
import './App.css'
import Button from './components/Button'
import Todos from './components/Todos'
import ShowHide from './components/ShowHide'

const App = () => {
  return (
    <div>
      <Button btnText="Click Me" />
      <ShowHide />
      <Todos />
    </div>
  )
}

export default App
