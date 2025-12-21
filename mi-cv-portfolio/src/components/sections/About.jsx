import React from 'react';

const About = () => {
  // Lista de habilidades (puedes editar esto con tus tecnologías reales)
  const skills = [
    { name: "Java 21", level: "Avanzado" },
    { name: "Spring Boot", level: "Avanzado" },
    { name: "Microservicios", level: "Intermedio" },
    { name: "Cloud Computing", level: "Intermedio" },
    { name: "Git / GitHub", level: "Intermedio" },
    { name: "Linux / Ubuntu", level: "Intermedio" },
    { name: "React", level: "Principiante" },
    { name: "SQL", level: "Intermedio" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título de la sección */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Sobre mí</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Columna 1: Texto descriptivo */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              ¿Quién soy?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Soy un estudiante apasionado por la arquitectura de software y el desarrollo backend robusto. 
              Me enfoco en crear soluciones escalables utilizando las mejores prácticas de la industria.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Actualmente estoy profundizando mis conocimientos en arquitecturas de microservicios y despliegue en la nube, 
              mientras expando mis horizontes hacia el frontend con tecnologías modernas como React.
            </p>
            
            {/* Datos rápidos */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <span className="block text-gray-500 text-sm">Ubicación</span>
                <span className="font-medium text-gray-900">Argentina</span>
              </div>
              <div>
                <span className="block text-gray-500 text-sm">Disponibilidad</span>
                <span className="text-green-600 font-medium bg-green-100 px-2 py-0.5 rounded-full text-sm inline-block">
                  Open to work
                </span>
              </div>
            </div>
          </div>

          {/* Columna 2: Skills Grid */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Habilidades Técnicas
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <h4 className="font-bold text-gray-900">{skill.name}</h4>
                  <span className="text-sm text-blue-600">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;