import React from 'react';
import Navbar from './components/ui/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
// 1. Importamos Projects
import Projects from './components/sections/Projects';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        {/* 2. Añadimos Projects aquí */}
        <Projects />
        {/* Próximamente: Contact */}
      </main>
      
    </div>
  );
}

export default App;