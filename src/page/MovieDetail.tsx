import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Button from '../components/Button'

// model
import movie from '../model/type/movie'

const MovieDetail = () => {
  const param = useParams()
  const navigate = useNavigate()
  const [movieDetail, setMovieDetail] = useState<movie>()
  const goList = () => {
    navigate('/movies')
  }
  const getMovieDetail = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${param.id}`)).json()
    setMovieDetail(json.data.movie)
  }
  useEffect(() => {
    getMovieDetail()
  }, [])
  return (
    <div>
      <img src={movieDetail?.large_cover_image} alt={movieDetail?.title}></img>
      <h2>{movieDetail?.title}</h2>
      <Button onClick={goList}>goList</Button>
    </div>
  )
}

export default MovieDetail
