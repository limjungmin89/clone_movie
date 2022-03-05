import { useNavigate } from 'react-router-dom'

const Welcome = () => {
  const navigate = useNavigate()
  const goMovies = () => {
    navigate('/movies')
  }

  return (
    <div>
      <h1>hello. This is My React Page!!!</h1>
      <button onClick={goMovies}>Movies</button>
    </div>
  )
}

export default Welcome
