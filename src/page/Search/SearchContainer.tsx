import { useEffect, useState } from 'react'

import { getMovieTrend, searchMovie } from 'query/movieQuery'
import { getTvTrend, searchTv } from 'query/tvQuery'
import SearchPresenter from './SearchPresenter'

const SearchContainer = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [top5movie, setTop5movie] = useState([])
  const [top5tv, setTop5tv] = useState([])
  const [movieResults, setMovieResults] = useState([])
  const [tvResults, setTvResults] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (event: any) => {
    event.preventDefault()
    if (searchTerm !== '') {
      searchByTerm()
    }
  }

  const updateTerm = (event: any) => {
    const {
      target: { value },
    } = event
    setSearchTerm(value)
  }

  const getTrend = async () => {
    try {
      const {
        data: { results: movieTrend },
      } = await getMovieTrend()
      setTop5movie(movieTrend.slice(0, 5))
      const {
        data: { results: tvTrend },
      } = await getTvTrend()
      setTop5tv(tvTrend.slice(0, 5))
    } catch {
      setError("Can't find information.")
    } finally {
      setLoading(false)
    }
  }

  const searchByTerm = async () => {
    setLoading(true)
    try {
      const {
        data: { results: movieResults },
      } = await searchMovie(searchTerm)
      const {
        data: { results: tvResults },
      } = await searchTv(searchTerm)
      setMovieResults(movieResults)
      setTvResults(tvResults)
    } catch {
      setError("Can't find results.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getTrend()
  }, [])

  return (
    <SearchPresenter
      movieResults={movieResults}
      tvResults={tvResults}
      searchTerm={searchTerm}
      loading={loading}
      error={error}
      handleSubmit={handleSubmit}
      updateTerm={updateTerm}
      movieTrend={top5movie}
      tvTrend={top5tv}
    />
  )
}

export default SearchContainer
