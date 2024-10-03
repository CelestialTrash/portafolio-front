import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SoundDesign from './pages/SoundDesign';
import Music from './pages/Music'; // Nueva sección
import Dev from './pages/Dev';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor'; // Importar el componente del cursor

const App = () => {
  return (
    <Router>
      <Navbar />
      
      {/* Cursor personalizado que sigue al puntero */}
      <CustomCursor />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dev" element={<Dev />} />
        <Route path="/sound-design" element={<SoundDesign />} />
        <Route path="/music" element={<Music />} /> 
      </Routes>
      
      <Footer />
    </Router>
  );
};

export default App;

