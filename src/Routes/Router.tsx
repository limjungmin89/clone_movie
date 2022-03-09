import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../page/Home/HomeContainer'

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
