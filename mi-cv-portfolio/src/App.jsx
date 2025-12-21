import React from 'react';
import Navbar from './components/ui/Navbar';
// 1. Importamos el Hero
import Hero from './components/sections/Hero';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      
      {/* 2. Renderizamos el Hero aquí */}
      <main>
        <Hero />
        {/* Aquí irán las siguientes secciones: About, Projects, etc. */}
      </main>
      
    </div>
  );
}

export default App;