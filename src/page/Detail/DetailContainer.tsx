import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

import DetailPresenter from './DetailPresenter'
import { movieDetail } from 'query/movieQuery'
import { showDetail } from 'query/tvQuery'
import dataInfo from 'model/type/data'

const DetailContainer = () => {
  const params = useParams()
  const path = useLocation()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [result, setResult] = useState<dataInfo>()

  const getDetail = async () => {
    let parsedID = 0
    if (params.id === undefined) {
      parsedID = 0
    } else {
      parsedID = parseInt(params.id)
    }

    try {
      if (path.pathname.includes('/movie/')) {
        const { data: result } = await movieDetail(parsedID)
        setResult(result)
      } else {
        const { data: result } = await showDetail(parsedID)
        setResult(result)
      }
    } catch {
      setError("Can't find anything.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getDetail()
  }, [])

  return <DetailPresenter result={result} loading={loading} error={error} />
}

export default DetailContainer
