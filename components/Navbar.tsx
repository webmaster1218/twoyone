import React from 'react';
import { Infinity, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030305]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white">
            <Infinity size={20} />
          </div>
          <span className="text-lg font-medium tracking-tight">Nexus</span>
        </div>

        {/* Enlaces de Escritorio */}
        <div className="hidden lg:flex items-center gap-8">
          <a href="#servicios" className="text-sm font-normal text-gray-300 hover:text-white transition-colors">Servicios</a>
          <a href="#portafolio" className="text-sm font-normal text-gray-300 hover:text-white transition-colors">Portafolio</a>
          <a href="#casos" className="text-sm font-normal text-gray-300 hover:text-white transition-colors">Casos de Éxito</a>
          <a href="#testimonios" className="text-sm font-normal text-gray-300 hover:text-white transition-colors">Insights</a>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-6">
          <a href="#" className="hidden sm:block text-sm font-normal text-gray-300 hover:text-white">Iniciar Sesión</a>
          <a href="#contacto" className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition-all flex items-center gap-2">
            Empezar a Escalar
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;