import movie from './movie'

type props = {
  nowPlaying: Array<movie>
  upcoming: Array<movie>
  popular: Array<movie>
  error: string
  loading: boolean
}

export default props
