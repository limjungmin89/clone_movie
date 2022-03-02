import { useState, useEffect } from 'react'

const Hello = () => {
  const destroyedFn = () => {
    console.log('destroyed')
  }
  const effectFn = () => {
    console.log('created')
    return destroyedFn
  }
  useEffect(effectFn, [])
  return <div>hi</div>
}
const ShowHide = () => {
  const [showing, setShowing] = useState(true)
  const handleShow = () => {
    setShowing((prev) => !prev)
  }
  return (
    <div>
      <button onClick={handleShow}>{showing ? 'hide' : 'show'}</button>
      {showing ? <Hello /> : null}
    </div>
  )
}

export default ShowHide
