import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from 'components/Header'
import Home from 'page/Home/HomeContainer'
import TV from 'page/TV/TvContainer'

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tv" element={<TV />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
