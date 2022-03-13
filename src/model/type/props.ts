import data from './data'

type props = {
  nowPlaying?: Array<data>
  upcoming?: Array<data>
  popular?: Array<data>
  topRated?: Array<data>
  airingToday?: Array<data>
  error: string
  loading: boolean
  result?: data
}

export default props
