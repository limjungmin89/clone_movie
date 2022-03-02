import { useEffect, useState } from 'react'
import 'styles/btn.css'

interface propsType {
  btnText: string
}

const Button = (props: propsType) => {
  const [cnt, setCnt] = useState(0)
  const handleClick = () => {
    setCnt((prev) => prev + 1)
  }
  useEffect(() => {
    console.log(cnt)
  }, [cnt])
  return (
    <div>
      <h1>{cnt}</h1>
      <button onClick={handleClick} className={'btn'}>
        {props.btnText}
      </button>
    </div>
  )
}

export default Button
