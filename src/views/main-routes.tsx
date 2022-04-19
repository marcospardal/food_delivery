import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Login } from './Login'

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default MainRoutes