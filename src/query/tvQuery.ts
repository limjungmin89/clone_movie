import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '9303010f926b97ded8c5c01dab138497',
    language: 'en-US',
  },
})

export const topRatedList = () => {
  return api.get('tv/top_rated')
}

export const popularList = () => {
  return api.get('tv/popular')
}

export const airingTodayList = () => {
  return api.get('tv/airing_today')
}

export const showDetail = (id: number) => {
  return api.get(`tv/${id}`, {
    params: {
      append_to_response: 'videos',
    },
  })
}

export const getTvTrend = () => {
  return api.get('trending/tv/week')
}

export const searchTv = (param: any) => {
  return api.get('search/tv', {
    params: {
      query: encodeURIComponent(param),
    },
  })
}