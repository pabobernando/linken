import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Team from './pages/Team';
import Materi from './pages/Materi';
import Navbar from './components/Navbar';
import Berita from './pages/Berita';
import Diskusi from './pages/Diskusi';
import Berita1 from './pages/berita/Berita1';
import Berita2 from './pages/berita/Berita2';
import Berita3 from './pages/berita/Berita3';
import Berita4 from './pages/berita/Berita4';
import Berita5 from './pages/berita/Berita5';
import Berita6 from './pages/berita/Berita6';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home  />} />
        <Route path='/materi' element={<Materi  />} />
        <Route path='/team' element={<Team />} />
        <Route path='/berita' element={<Berita />} />
        <Route path='/diskusi' element={<Diskusi/>} />
        <Route path='/berita1' element={<Berita1 />} />
        <Route path='/berita2' element={<Berita2 />} />
        <Route path='/berita3' element={<Berita3 />} />
        <Route path='/berita4' element={<Berita4 />} />
        <Route path='/berita5' element={<Berita5 />} />
        <Route path='/berita6' element={<Berita6 />} />
      </Routes>
    </Router>
  );
}

export default App;
