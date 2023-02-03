import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import CSS
import './assets/css/index.scss';

// Import pages
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';

export default function App() {

  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/*" element={<PageNotFound />} exact="true" />
      </Routes>
    </Router>
  )
}