import genre from './genre'

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
  episode_run_time: any
  imdb_id: string
  overview: string
  genres: Array<genre>
  videos: { results: any }
  production_companies: []
  seasons: []
}

export default dataInfo
