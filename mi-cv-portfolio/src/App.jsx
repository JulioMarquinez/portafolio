import React, { useState, useEffect } from 'react';
// Importamos el Router y las Rutas
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importamos componentes base
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';

// Importamos las nuevas páginas que creamos
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';

function App() {
  // Lógica del modo oscuro (sin cambios)
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return true;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`min-h-screen font-sans transition-colors duration-300 flex flex-col ${darkMode ? 'bg-gray-900 text-white' : 'bg-slate-200 text-slate-900'}`}>
        
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <main className="flex-grow">
          <Routes>
            {/* RUTA 1: Inicio + Sobre Mí */}
            <Route path="/" element={<HomePage />} />
            
            {/* RUTA 2: Proyectos + Contacto */}
            <Route path="/proyectos" element={<WorkPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;