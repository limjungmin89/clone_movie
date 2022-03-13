import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'd2a00cc1f1a10798ef46eaf4ce97f962',
    language: 'en-US',
  },
})

export const nowPlayingList = () => {
  return api.get('movie/now_playing')
}

export const upcomingList = () => {
  return api.get('movie/upcoming')
}

export const popularList = () => {
  return api.get('movie/popular')
}

export const movieDetail = (id: any) => {
  return api.get(`movie/${id}`, {
    params: {
      append_to_response: 'videos',
    },
  })
}
