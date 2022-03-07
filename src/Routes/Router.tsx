import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Welcome from '../page/Welcome'
import Movies from '../page/Movies'
import MovieDetail from '../page/MovieDetail'

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movieDetail/:id" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
