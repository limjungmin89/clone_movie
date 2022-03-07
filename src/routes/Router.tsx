import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Welcome from '../page/Welcome'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
