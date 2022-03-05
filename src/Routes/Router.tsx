import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Welcome from '../page/Welcome'
import Movies from '../page/Movies'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
