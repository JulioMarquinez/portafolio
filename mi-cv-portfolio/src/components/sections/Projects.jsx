import React from 'react';

const Projects = () => {
  // Datos de ejemplo de tus proyectos
  const projects = [
    {
      title: "Sistema de Microservicios",
      description: "Arquitectura distribuida utilizando Spring Boot y Spring Cloud. Implementación de Service Discovery con Eureka y Gateway.",
      tech: ["Java 21", "Spring Boot", "Docker", "Microservicios"],
      githubLink: "#",
      demoLink: "#", // Si no tienes demo, puedes ocultar este botón luego
    },
    {
      title: "API RESTful Segura",
      description: "Backend robusto para gestión de usuarios con autenticación JWT y documentación automática con Swagger/OpenAPI.",
      tech: ["Java", "Spring Security", "PostgreSQL", "JWT"],
      githubLink: "#",
      demoLink: null,
    },
    {
      title: "Portafolio Personal",
      description: "Este mismo sitio web, construido para presentar mi perfil profesional y proyectos de manera moderna y responsiva.",
      tech: ["React", "Tailwind CSS", "Vite", "Git"],
      githubLink: "#",
      demoLink: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Mis Proyectos</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto rounded"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Algunos de los trabajos más recientes que he realizado, enfocados en arquitectura backend y soluciones en la nube.
          </p>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
              
              {/* Parte superior de la tarjeta (Color o Imagen) */}
              <div className="h-48 bg-gray-100 flex items-center justify-center relative group">
                {/* Aquí podrías poner una etiqueta <img> si tuvieras capturas de pantalla */}
                <span className="text-4xl">💻</span>
                {/* Overlay al pasar el mouse (opcional) */}
                <div className="absolute inset-0 bg-blue-900 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>

              {/* Contenido de la tarjeta */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">
                  {project.description}
                </p>
                
                {/* Etiquetas de tecnología */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-md border border-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botones */}
                <div className="flex gap-4 mt-auto">
                  <a 
                    href={project.githubLink}
                    className="flex-1 text-center px-4 py-2 border border-gray-800 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition-colors text-sm font-medium"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  {project.demoLink && (
                    <a 
                      href={project.demoLink}
                      className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;