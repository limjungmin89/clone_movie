import { useParams, useNavigate } from 'react-router-dom'

const MovieDetail = () => {
  const param = useParams()
  const navigate = useNavigate()
  const goList = () => {
    navigate('/movies')
  }
  return (
    <div>
      <h1>movie detail - {param.id}</h1>
      <button onClick={goList}>goList</button>
    </div>
  )
}

export default MovieDetail
