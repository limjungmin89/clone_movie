import { useState } from 'react'
import 'styles/btn.css'

interface propsType {
  btnText: string
}

const Button = (props: propsType) => {
  const [cnt, setCnt] = useState(0)
  const [keyword, setKeyword] = useState('')
  const onClick = () => {
    setCnt((prev) => prev + 1)
  }
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value)
  }
  return (
    <div>
      <h1>keyword : {keyword}</h1>
      <input type="text" placeholder="Search here..." onChange={onChange} value={keyword}></input>
      <h1>button click count : {cnt}</h1>
      <button onClick={onClick} className={'btn'}>
        {props.btnText}
      </button>
    </div>
  )
}

export default Button
