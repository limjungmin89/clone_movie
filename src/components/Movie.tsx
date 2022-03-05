import { useEffect, useState } from 'react'
import movieInfo from '../model/type/movie'

type movie = {
  movie: movieInfo
}

const Movie = ({ movie }: movie) => {
  return (
    <div key={movie.id}>
      <img src={movie.medium_cover_image} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.summary}</p>
      <ul>
        {movie.genres.map((gene) => (
          <li>{gene}</li>
        ))}
      </ul>
    </div>
  )
}

export default Movie
