import company from './company'
import genre from './genre'
import season from './season'

type dataInfo = {
  id: number
  title: string
  poster_path: string
  original_title: string
  vote_average: number
  release_date: string
  original_name: string
  first_air_date: string
  backdrop_path: string
  runtime: string
  episode_run_time: Array<string>
  imdb_id: string
  overview: string
  genres: Array<genre>
  videos: any
  production_companies: Array<company>
  seasons: Array<season>
}

export default dataInfo
