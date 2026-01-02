
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter, Youtube } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    project: ''
  });

  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-900/10 blur-[150px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-xl md:text-2xl font-bold text-gray-400 mb-4">¿Listo para escalar</h2>
          <h3 className="text-5xl md:text-7xl font-black gradient-text uppercase tracking-tighter">TUS CAMPAÑAS?</h3>
          <p className="text-gray-500 mt-6">Primera consultoría estratégica sin costo</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h4 className="text-3xl font-bold mb-8">Hablemos de tu proyecto</h4>
            <p className="text-gray-400 mb-12 leading-relaxed">
              Cuéntanos sobre tu negocio y objetivos. Nuestro equipo de especialistas analizará tu caso y te presentará una estrategia personalizada para maximizar tus resultados en las plataformas más relevantes.
            </p>

            <div className="space-y-8 mb-16">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Email</p>
                  <p className="text-lg">contacto@agenciadigital.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Teléfono</p>
                  <p className="text-lg">+34 900 123 456</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Oficina</p>
                  <p className="text-lg">Madrid, España</p>
                </div>
              </div>
            </div>

            <div className="flex gap-6">
               <a href="#" className="p-3 glass rounded-full hover:text-blue-500 transition-colors"><Linkedin size={20} /></a>
               <a href="#" className="p-3 glass rounded-full hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
               <a href="#" className="p-3 glass rounded-full hover:text-white transition-colors"><Twitter size={20} /></a>
               <a href="#" className="p-3 glass rounded-full hover:text-red-500 transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          <div className="glass p-10 rounded-3xl border-white/10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Nombre completo *</label>
                  <input type="text" placeholder="Tu nombre" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email *</label>
                  <input type="email" placeholder="tu@email.com" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Teléfono</label>
                  <input type="text" placeholder="+34 000 000 000" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Empresa</label>
                  <input type="text" placeholder="Nombre de tu empresa" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Presupuesto mensual estimado</label>
                <select className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors text-gray-400">
                  <option>Selecciona un rango</option>
                  <option>1.000€ - 5.000€</option>
                  <option>5.000€ - 15.000€</option>
                  <option>15.000€+</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Cuéntanos sobre tu proyecto *</label>
                <textarea rows={4} placeholder="Describe tus objetivos y necesidades..." className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none"></textarea>
                <div className="text-right text-[10px] text-gray-600 mt-1">0/500 caracteres</div>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-xl shadow-blue-500/20 transition-all active:scale-95">
                Enviar Mensaje
              </button>
              <p className="text-center text-[10px] text-gray-600">No requiere tarjeta de crédito</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
