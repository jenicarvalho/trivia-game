import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from './global'
import CategorySelection from './pages/CategorySelection'
import Home from './pages/Home'

function App() {
  return (
    <Main>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/choose-a-category" element={<CategorySelection />} />
        </Routes>
      </Router>
    </Main>
  )
}

export default App
