import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from './global'
import CategorySelection from './pages/CategorySelection'
import Home from './pages/Home'
import Quiz from './pages/Quiz';

function App() {
  return (
    <Main>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/choose-a-category" element={<CategorySelection />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </Router>
    </Main>
  )
}

export default App
