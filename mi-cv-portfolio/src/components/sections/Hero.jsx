import React from 'react';
// NUEVO 1: Importa tu foto aquí. Ajusta el nombre si no es 'perfil.jpg'
import profilePic from '../../assets/FotoPerfilCv.jpeg'; 

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        
        {/* Texto (Lo dejamos igual por ahora) */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Hola, soy <span className="text-blue-600">Julio Marquinez</span>
          </h1>
          {/* ... resto del texto ... */}
             <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
            Estudiante de Desarrollo de Software
          </h2>
          <p className="text-gray-500 mb-8 max-w-lg mx-auto md:mx-0">
            Apasionado por los microservicios, Java y la nube. 
            Construyendo soluciones escalables y eficientes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#contact" className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Contactame
            </a>
            <a href="#" className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
              Descargar CV
            </a>
          </div>
        </div>

        {/* Imagen / Avatar */}
        <div className="md:w-1/2 flex justify-center">
          {/* Aumenté un poco el tamaño en desktop (md:w-96 md:h-96) para que destaque más */}
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            {/* Círculo decorativo de fondo */}
            <div className="absolute inset-0 bg-blue-100 rounded-full animate-pulse"></div>
            
            {/* NUEVO 2: Reemplazamos el placeholder con la etiqueta IMG real */}
            <img 
              src={profilePic} 
              alt="Foto de perfil de Julio Marquinez" 
              className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-full border-4 border-white shadow-lg"
            />

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;