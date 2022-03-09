import { useEffect, useState } from 'react'
import { topRatedList, popularList, airingTodayList } from 'query/tvQuery'
import TvPresenter from './TvPresenter'
import Loader from 'components/Loader'

const TV = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [topRated, setTopRated] = useState([])
  const [popular, setPopular] = useState([])
  const [airingToday, setAiringToday] = useState([])
  const getTvList = async () => {
    try {
      const { data: topRated } = await topRatedList()
      setTopRated(topRated.results)
      const { data: popular } = await popularList()
      setPopular(popular.results)
      const { data: airingToday } = await airingTodayList()
      setAiringToday(airingToday.results)
    } catch {
      setError("Can't find Tv information.")
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getTvList()
  }, [])
  return loading === true ? (
    <Loader />
  ) : (
    <TvPresenter topRated={topRated} popular={popular} airingToday={airingToday} error={error} loading={loading} />
  )
}

export default TV
