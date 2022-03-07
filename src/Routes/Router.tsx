import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Welcome from '../page/Welcome'
import Movies from '../page/Movies'
import MovieDetail from '../page/MovieDetail'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={process.env.PUBLIC_URL + '/'} element={<Welcome />} />
        <Route path={process.env.PUBLIC_URL + '/movies'} element={<Movies />} />
        <Route path={process.env.PUBLIC_URL + '/movieDetail/:id'} element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
