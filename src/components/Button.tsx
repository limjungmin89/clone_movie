import 'styles/btn.css'

interface propsType {
  btnText: string
}

const Button = (props: propsType) => {
  const handleClick = () => {
    console.log(1)
  }
  return (
    <button onClick={handleClick} className={'btn'}>
      {props.btnText}
    </button>
  )
}

export default Button
