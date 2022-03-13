import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from 'components/Header'
import Home from 'page/Home/HomeContainer'
import TV from 'page/TV/TvContainer'
import Detail from 'page/Detail/DetailContainer'
import Search from 'page/Search/SearchContainer'

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/tv" element={<TV />} />
        <Route path="/show/:id" element={<Detail />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
