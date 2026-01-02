import React from 'react';
import { Calendar, ArrowRight, Music, Activity, BarChart2, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <>
      <section className="relative pt-32 lg:pt-48 pb-20 overflow-hidden">
        {/* Fondos degradados */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-600/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Contenido Izquierdo */}
          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-xs font-medium text-gray-300 tracking-wide uppercase">Marketing IA-First 2025</span>
            </div>

            {/* Encabezado Principal */}
            <h1 className="text-5xl lg:text-7xl font-semibold tracking-tighter leading-[1.1] mb-6">
              ESCALA TU <br />
              VISIÓN
              <span className="block font-serif italic font-light text-4xl lg:text-6xl text-gray-400 my-2">en las plataformas</span>
              <span className="text-gradient uppercase">que dominan</span>
            </h1>

            {/* Subtexto */}
            <p className="text-lg text-gray-400 max-w-xl leading-relaxed mb-10 font-light">
              Especialistas en algoritmos predictivos para Google, Meta y TikTok. Convertimos datos brutos en flujos de ingresos medibles para marcas de alto impacto.
            </p>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a href="#casos" className="h-12 px-8 rounded-lg bg-white text-black text-base font-medium hover:bg-gray-100 transition-all flex items-center justify-center gap-2 w-full sm:w-auto">
                Ver Casos de Éxito
              </a>
              <a href="#contacto" className="h-12 px-8 rounded-lg border border-white/15 text-white text-base font-medium hover:bg-white/5 transition-all flex items-center justify-center gap-2 w-full sm:w-auto">
                Agendar Consultoría
                <Calendar size={18} />
              </a>
            </div>

            {/* Estadísticas Inferiores */}
            <div className="mt-20 grid grid-cols-3 gap-8 border-t border-white/10 pt-8 max-w-lg">
              <div>
                <p className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-1">+450%</p>
                <p className="text-sm text-gray-500">ROI promedio</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-1">98/100</p>
                <p className="text-sm text-gray-500">Tasa Retención</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-1">200+</p>
                <p className="text-sm text-gray-500">Marcas Escaladas</p>
              </div>
            </div>
          </div>

          {/* Visuales Derechos (Tarjetas Flotantes) */}
          <div className="relative h-[600px] w-full hidden lg:block perspective-1000">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            
            {/* Tarjeta 1: Google */}
            <div className="absolute top-10 right-20 w-48 h-48 rounded-3xl bg-white shadow-[0_0_50px_-12px_rgba(255,255,255,0.3)] flex items-center justify-center transform -rotate-6 hover:rotate-0 transition-transform duration-500 z-20 animate-float">
              <div className="relative flex flex-col items-center gap-3">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-12 h-12" />
                <div className="text-black text-xs font-semibold tracking-tight mt-2">Ads Manager</div>
              </div>
            </div>

            {/* Tarjeta 2: Meta */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-[2rem] bg-gradient-to-br from-[#0064e0] to-[#6b2c91] shadow-2xl flex items-center justify-center z-30 ring-1 ring-white/10 backdrop-blur-xl">
              <div className="flex flex-col items-center text-center p-6">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1024px-Meta_Platforms_Inc._logo.svg.png" alt="Meta" className="h-12 object-contain brightness-0 invert mb-4" />
                <div className="w-full bg-white/20 h-px mb-4"></div>
                <div className="flex gap-4">
                  <div className="text-center">
                    <span className="block text-white font-semibold text-lg">8.4x</span>
                    <span className="text-white/70 text-[10px] uppercase tracking-wider">ROAS</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-white font-semibold text-lg">12M</span>
                    <span className="text-white/70 text-[10px] uppercase tracking-wider">Impressiones</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjeta 3: Spotify */}
            <div className="absolute bottom-20 left-10 w-56 h-40 rounded-2xl bg-[#121212] border border-white/10 shadow-2xl flex flex-col p-5 transform rotate-3 hover:rotate-0 transition-transform duration-500 z-10">
              <div className="flex items-center justify-between mb-auto">
                <Music className="text-[#1DB954]" size={32} />
                <Activity className="text-gray-400" size={24} />
              </div>
              <div>
                <div className="text-white text-sm font-medium">Campañas de Audio</div>
                <div className="text-gray-500 text-xs mt-1">Targeting Audiencia Activa</div>
              </div>
            </div>

            {/* Partículas Flotantes */}
            <div className="absolute top-40 left-20 w-12 h-12 rounded-full bg-gray-800 border border-white/10 flex items-center justify-center animate-bounce duration-[3000ms]">
              <BarChart2 className="text-blue-400" size={20} />
            </div>
            <div className="absolute bottom-40 right-10 w-10 h-10 rounded-full bg-gray-800 border border-white/10 flex items-center justify-center animate-bounce delay-700 duration-[4000ms]">
              <Users className="text-purple-400" size={18} />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#030305] to-transparent z-20"></div>
      </section>

      {/* Marquee de Marcas */}
      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <p className="text-center text-gray-500 text-sm font-medium uppercase tracking-widest mb-8">Integraciones en las que confían</p>
          <div className="flex flex-wrap justify-center gap-12 lg:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 items-center">
            <span className="text-xl font-bold text-white/80">Google</span>
            <span className="text-xl font-bold text-white/80">Microsoft</span>
            <span className="text-xl font-bold text-white/80">HubSpot</span>
            <span className="text-xl font-bold text-white/80">Salesforce</span>
            <span className="text-xl font-bold text-white/80">Shopify</span>
            <span className="text-xl font-bold text-white/80">TikTok</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;