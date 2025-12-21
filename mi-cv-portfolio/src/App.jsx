import React from 'react';
import Navbar from './components/ui/Navbar';
import Hero from './components/sections/Hero';
// 1. Importamos el About
import About from './components/sections/About';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      
      <main>
        <Hero />
        {/* 2. Añadimos el componente About debajo del Hero */}
        <About />
        {/* Próximamente: Projects */}
      </main>
      
    </div>
  );
}

export default App;