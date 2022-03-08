import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'd2a00cc1f1a10798ef46eaf4ce97f962',
    language: 'en-US',
  },
})

export const palyList = () => {
  return api.get('movie/now_playing')
}

export const movieDetail = (id: number) => {
  return api.get(`movie/${id}`, {
    params: {
      append_to_response: 'videos',
    },
  })
}
