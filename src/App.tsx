import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/Home';
import Resume from './pages/Resume';
import ProjectDetail from './pages/ProjectDetail';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <footer className="footer">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
