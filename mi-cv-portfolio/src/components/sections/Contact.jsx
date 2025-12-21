import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Contáctame</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto rounded"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            ¿Tienes alguna propuesta o proyecto en mente? ¡Hablemos!
            Estoy disponible para nuevas oportunidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Información de contacto */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900">Información de Contacto</h3>
            <p className="text-gray-600">
              Prefiero la comunicación por Email o LinkedIn. Suelo responder en menos de 24 horas.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <span className="text-blue-600 text-xl">📧</span>
                <div>
                  <h4 className="font-bold text-gray-900">Email</h4>
                  <a href="mailto:tuemail@ejemplo.com" className="text-blue-600 hover:underline">
                    tuemail@ejemplo.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="text-blue-600 text-xl">🔗</span>
                <div>
                  <h4 className="font-bold text-gray-900">LinkedIn</h4>
                  <a href="#" className="text-blue-600 hover:underline">
                    linkedin.com/in/tu-usuario
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="text-blue-600 text-xl">📍</span>
                <div>
                  <h4 className="font-bold text-gray-900">Ubicación</h4>
                  <p className="text-gray-600">Argentina (Remoto / Híbrido)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario (Visual) */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="Tu nombre"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                <textarea 
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="Hola, me gustaría contactarte para..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-bold shadow-md hover:shadow-lg"
                onClick={(e) => e.preventDefault()} // Prevenimos recarga por ahora
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;