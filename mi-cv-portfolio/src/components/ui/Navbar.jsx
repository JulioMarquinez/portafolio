import React, { useState } from 'react';
// Usamos HashLink para navegar Y deslizar
import { HashLink } from 'react-router-hash-link';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Configuración del scroll suave
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; // Compensar la altura del Navbar fijo
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  };

  // Enlaces de navegación
  const navLinks = [
    { name: 'Inicio', to: '/#home' },
    { name: 'Sobre mí', to: '/#about' },
    { name: 'Proyectos', to: '/proyectos#projects' },
    { name: 'Contacto', to: '/proyectos#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-slate-200/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-slate-300 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <HashLink smooth to="/#home" className="font-mono text-lg md:text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <span className="text-emerald-600 dark:text-emerald-400">public class</span>
              <span>Portafolio</span>
              <span className="text-slate-500 dark:text-gray-400">{`{ }`}</span>
            </HashLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <HashLink
                  key={link.name}
                  smooth
                  to={link.to}
                  scroll={scrollWithOffset}
                  className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-300 dark:hover:bg-gray-800 transition-all"
                >
                  {link.name}
                </HashLink>
              ))}
              
              {/* Botón Dark Mode */}
              <button
                onClick={toggleDarkMode}
                className="ml-4 p-2 rounded-lg bg-slate-300 dark:bg-gray-800 text-slate-800 dark:text-yellow-400 hover:bg-slate-400 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? (
                  // Icono Sol (para pasar a claro)
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                ) : (
                  // Icono Luna (para pasar a oscuro)
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden flex items-center">
             <button
                onClick={toggleDarkMode}
                className="mr-4 p-2 rounded-lg bg-slate-300 dark:bg-gray-800 text-slate-800 dark:text-yellow-400"
              >
                 {darkMode ? '☀️' : '🌙'}
              </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 dark:text-gray-400 hover:text-white hover:bg-slate-400 dark:hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-200 dark:bg-gray-900 border-b border-slate-300 dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <HashLink
                key={link.name}
                smooth
                to={link.to}
                scroll={scrollWithOffset}
                onClick={() => setIsOpen(false)} // Cierra el menú al hacer click
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-gray-300 hover:text-white hover:bg-emerald-600 dark:hover:bg-gray-700"
              >
                {link.name}
              </HashLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;