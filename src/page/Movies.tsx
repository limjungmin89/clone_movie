import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Movie from './Movie'
import movieInfo from '../model/type/movie'
import Button from '../components/Button'

const Movies = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState<Array<movieInfo>>([])
  const getMovies = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimun_rating=9&sort_by=year`)).json()
    setMovies(json.data.movies)
    setLoading(false)
  }
  const goHome = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate('/')
  }
  useEffect(() => {
    getMovies()
  }, [])
  return (
    <div>
      <h1>The Movies {movies.length}</h1>
      <Button onClick={goHome}>goHome</Button>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((item) => (
            <Movie movie={item} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Movies
