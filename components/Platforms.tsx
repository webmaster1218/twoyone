import React from 'react';
import { Chrome, Layout, Music, Twitter, Check } from 'lucide-react';

const Platforms: React.FC = () => {
  return (
    <section id="servicios" className="relative py-24 bg-[#030305] overflow-hidden">
      {/* Fondo de Cuadrícula Sutil */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Encabezado */}
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif text-gray-400 mb-2">Plataformas donde</h2>
          <div className="flex items-center gap-4">
            <span className="text-4xl lg:text-6xl font-bold text-white tracking-tight uppercase">DOMINAMOS</span>
            <span className="text-3xl lg:text-5xl animate-bounce">🚀</span>
          </div>
        </div>

        {/* Rejilla de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Google Ads */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] p-8 hover:scale-[1.02] transition-all duration-300 shadow-2xl shadow-blue-900/20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6 bg-white/10 w-fit p-3 rounded-2xl">
                <Chrome className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-6 tracking-tight">Google Ads</h3>
              <ul className="space-y-4 mt-auto">
                {['Search Ads', 'Display Network', 'Shopping Ads', 'YouTube Ads'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/90">
                    <Check className="w-4 h-4 stroke-[3]" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Meta Ads */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#3b82f6] via-[#8b5cf6] to-[#ec4899] p-8 hover:scale-[1.02] transition-all duration-300 shadow-2xl shadow-purple-900/20">
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6 bg-white/10 w-fit p-3 rounded-2xl">
                <Layout className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-6 tracking-tight">Meta Ads</h3>
              <ul className="space-y-4 mt-auto">
                {['Facebook Ads', 'Instagram Ads', 'Messenger Ads', 'Audience Network'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/90">
                    <Check className="w-4 h-4 stroke-[3]" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Spotify Ads */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#15803d] to-[#14532d] p-8 hover:scale-[1.02] transition-all duration-300 shadow-2xl shadow-green-900/20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-400/10 to-transparent"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6 bg-white/10 w-fit p-3 rounded-2xl">
                <Music className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-6 tracking-tight">Spotify Ads</h3>
              <ul className="space-y-4 mt-auto">
                {['Audio Ads', 'Video Ads', 'Podcast Ads', 'Targeting Avanzado'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/90">
                    <Check className="w-4 h-4 stroke-[3]" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* X (Twitter) Ads */}
          <div className="group relative overflow-hidden rounded-3xl bg-[#1e293b] p-8 hover:scale-[1.02] transition-all duration-300 shadow-2xl border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6 bg-white/10 w-fit p-3 rounded-2xl">
                <Twitter className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-6 tracking-tight">X (Twitter) Ads</h3>
              <ul className="space-y-4 mt-auto">
                {['Promoted Tweets', 'Trends', 'Amplify', 'Takeover'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors">
                    <Check className="w-4 h-4 stroke-[3]" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Platforms;