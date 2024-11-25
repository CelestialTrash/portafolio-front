// src/App.jsx
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import SoundDesign from './pages/SoundDesign';
import Music from './pages/Music';
import Dev from './pages/Dev';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login'; // Asegúrate de tener esta línea en App.jsx
import Admin from './pages/Admin'; // Importar la página de administración
import { useState } from 'react';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.className = isDarkMode ? 'light' : 'dark';
  };

  // Ruta protegida para verificar si el usuario está autenticado
  const PrivateRoute = ({ children }) => {
    return localStorage.getItem('authToken') ? children : <Navigate to="/usuario" />;
  };

  return (
    <div className="app-container">
      <Router>
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <main className="content-container">
          <Routes>
            <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
            <Route path="/dev" element={<Dev isDarkMode={isDarkMode} />} />
            <Route path="/sound-design" element={<SoundDesign isDarkMode={isDarkMode} />} />
            <Route path="/music" element={<Music isDarkMode={isDarkMode} />} />
            <Route path="/usuario" element={<Login />} /> {/* Ruta de inicio de sesión */}
            <Route
              path="/admin"
              element={
                <PrivateRoute>
                  <Admin />
                </PrivateRoute>
              }
            /> {/* Ruta protegida para administración */}
          </Routes>
        </main>
        <Footer isDarkMode={isDarkMode} />
      </Router>
    </div>
  );
};

export default App;
