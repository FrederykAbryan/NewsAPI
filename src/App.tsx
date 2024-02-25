import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Sport from './pages/Sport'
import Tech from './pages/Tech'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Dashboard />}>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/tech"
            element={<Tech />}
          />
          <Route
            path="/sport"
            element={<Sport />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App