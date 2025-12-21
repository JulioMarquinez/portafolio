import React from 'react';
// 1. Importamos el componente Navbar
import Navbar from './components/ui/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* 2. Usamos el componente aquí arriba */}
      <Navbar />
      
      {/* Añadimos un padding-top (pt-16) para que el contenido no quede oculto tras el navbar fijo */}
      <div className="pt-16">
        <h1 className="text-3xl font-bold text-center py-10">
          Contenido Principal
        </h1>
        <p className="text-center">Aquí irán las secciones pronto...</p>
      </div>
    </div>
  );
}

export default App;