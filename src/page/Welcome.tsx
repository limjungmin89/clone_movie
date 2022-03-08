import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

const Welcome = () => {
  const navigate = useNavigate()
  const goMovies = () => {
    navigate('/movies')
  }

  return (
    <div>
      <h1>hello. This is My React Page!!!!!!</h1>
      <Button onClick={goMovies}>Movies</Button>
      <button>test</button>
    </div>
  )
}

export default Welcome
