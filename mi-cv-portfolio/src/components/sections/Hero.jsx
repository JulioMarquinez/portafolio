import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        
        {/* Texto de presentación */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Hola, soy <span className="text-blue-600">Julio Marquinez</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
            Estudiante de Desarrollo de Software.
          </h2>
          <p className="text-gray-500 mb-8 max-w-lg mx-auto md:mx-0">
            Apasionado por los microservicios, Java y la nube. 
            Construyendo soluciones escalables y eficientes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Contactame
            </a>
            <a 
              href="#" 
              className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Descargar CV
            </a>
          </div>
        </div>

        {/* Imagen / Avatar */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Círculo decorativo de fondo */}
            <div className="absolute inset-0 bg-blue-100 rounded-full animate-pulse"></div>
            {/* Placeholder para la foto (luego pondremos tu foto real) */}
            <div className="absolute inset-2 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
              <span className="text-gray-400 text-6xl">📷</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;