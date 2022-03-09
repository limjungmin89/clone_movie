import React, { useEffect, useState } from 'react'
import { nowPlayingList, upcomingList, popularList } from '../../query/movieQuery'
import HomePresenter from './HomePresenter'

const Movies = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [nowPlaying, setNowPlaying] = useState([])
  const [upcoming, setUpcoming] = useState([])
  const [popular, setPopular] = useState([])
  const getMovies = async () => {
    try {
      const { data: nowPlaying } = await nowPlayingList()
      setNowPlaying(nowPlaying.results)
      const { data: upcoming } = await upcomingList()
      setUpcoming(upcoming.results)
      const { data: popular } = await popularList()
      setPopular(popular.results)
      setLoading(false)
    } catch {
      setError("Can't find movies information.")
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getMovies()
  }, [])
  return <HomePresenter nowPlaying={nowPlaying} upcoming={upcoming} popular={popular} error={error} loading={loading} />
}

export default Movies
