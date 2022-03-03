import { useEffect, useState } from 'react'

type movieInfo = {
  id: string
  title: string
}

const Movie = () => {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState<Array<movieInfo>>([])
  const getMovies = async () => {
    const json = await (await fetch('https://yts.mx/api/v2/list_movies.json?minimun_rating=9&sort_by=year')).json()
    console.log(json.data.movies)
    setMovies(json.data.movies)
    setLoading(false)
    console.log(movies)
  }
  useEffect(() => {
    getMovies()
  }, [])
  return (
    <div>
      <h1>The coins {movies.length}</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {movies.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Movie
