
import React from 'react';
import { Linkedin, Instagram, Twitter, Youtube, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600"></div>
                <span className="font-bold text-xl tracking-tighter">AGENCIA DIGITAL</span>
            </div>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              Publicidad que convierte. Suscríbete a nuestra newsletter para recibir consejos y tendencias.
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="tu@email.com" 
                className="w-full bg-white/5 border border-white/10 rounded-lg pl-4 pr-12 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" 
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-blue-500 hover:bg-blue-500/10 rounded-md transition-all">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div>
            <h5 className="font-bold mb-6">Plataformas</h5>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Google Ads</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Meta Ads</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Spotify Ads</a></li>
              <li><a href="#" className="hover:text-white transition-colors">X Ads</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6">Recursos</h5>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Casos de Estudio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Guías</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Webinars</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6">Contacto</h5>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>contacto@agenciadigital.com</li>
              <li>+34 900 123 456</li>
              <li>Madrid, España</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs">© 2025 Agencia Digital. Todos los derechos reservados.</p>
          
          <div className="flex gap-6">
             <a href="#" className="text-gray-600 hover:text-white transition-colors"><Linkedin size={18} /></a>
             <a href="#" className="text-gray-600 hover:text-white transition-colors"><Instagram size={18} /></a>
             <a href="#" className="text-gray-600 hover:text-white transition-colors"><Twitter size={18} /></a>
             <a href="#" className="text-gray-600 hover:text-white transition-colors"><Youtube size={18} /></a>
          </div>

          <div className="flex gap-6 text-xs text-gray-600">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Powered by Readdy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
