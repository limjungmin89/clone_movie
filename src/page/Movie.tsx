import movieInfo from '../model/type/movie'
import { Link, useNavigate } from 'react-router-dom'

type movie = {
  movie: movieInfo
}

const Movie = ({ movie }: movie) => {
  const navigate = useNavigate()
  const goDetail = () => {
    navigate(`/movieDetail/${movie.id}`)
  }
  return (
    <div key={movie.id}>
      <img src={movie.medium_cover_image} alt={movie.title} />
      <h2>
        <Link to={`/movieDetail/${movie.id}`}>link - {movie.title}</Link>
      </h2>
      <h2 onClick={goDetail}>navigte - {movie.title}</h2>
      <p>{movie.summary}</p>
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  )
}

export default Movie
