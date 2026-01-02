
import React from 'react';

const CaseStudies: React.FC = () => {
  return (
    <section id="casos" className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Casos de Éxito</h2>
          <p className="text-gray-400">Resultados reales, impacto medible</p>
        </div>

        {/* Case 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
          <div className="rounded-3xl overflow-hidden glass border-white/10 aspect-video">
             <img src="https://picsum.photos/seed/case1/800/600" alt="Success story" className="w-full h-full object-cover" />
          </div>
          <div className="lg:pl-12">
            <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4 block">E-commerce</span>
            <h3 className="text-5xl font-black text-green-400 mb-2">+280% ROI</h3>
            <h4 className="text-3xl font-bold mb-6">Fashion Boutique</h4>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Campaña multicanal en Google y Meta para marca de moda sostenible. Implementamos estrategia de remarketing dinámico y segmentación por intereses.
            </p>
            <div className="grid grid-cols-3 gap-8 mb-8 border-y border-white/10 py-8">
              <div>
                <div className="text-2xl font-bold">+340%</div>
                <div className="text-xs text-gray-500 uppercase">Conversiones</div>
              </div>
              <div>
                <div className="text-2xl font-bold">4.8%</div>
                <div className="text-xs text-gray-500 uppercase">CTR</div>
              </div>
              <div>
                <div className="text-2xl font-bold">-45%</div>
                <div className="text-xs text-gray-500 uppercase">CPA</div>
              </div>
            </div>
            <div className="flex gap-4">
               <span className="text-xs text-gray-500 border border-white/10 px-3 py-1 rounded">Google</span>
               <span className="text-xs text-gray-500 border border-white/10 px-3 py-1 rounded">Meta</span>
            </div>
          </div>
        </div>

        {/* Case 2 (Reversed) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32 lg:flex-row-reverse">
          <div className="lg:order-2 rounded-3xl overflow-hidden glass border-white/10 aspect-video">
             <img src="https://picsum.photos/seed/case2/800/600" alt="Success story" className="w-full h-full object-cover" />
          </div>
          <div className="lg:pr-12 lg:order-1">
            <span className="text-pink-400 text-xs font-bold uppercase tracking-widest mb-4 block">Música</span>
            <h3 className="text-5xl font-black text-blue-400 mb-2">+1.2M Alcance</h3>
            <h4 className="text-3xl font-bold mb-6">Artista Emergente</h4>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Lanzamiento de álbum con campaña integrada en Spotify Audio Ads y YouTube. Targeting por géneros musicales y comportamiento de escucha.
            </p>
            <div className="grid grid-cols-3 gap-8 mb-8 border-y border-white/10 py-8">
              <div>
                <div className="text-2xl font-bold">+2.5M</div>
                <div className="text-xs text-gray-500 uppercase">Reproducciones</div>
              </div>
              <div>
                <div className="text-2xl font-bold">+85K</div>
                <div className="text-xs text-gray-500 uppercase">Seguidores</div>
              </div>
              <div>
                <div className="text-2xl font-bold">12.3%</div>
                <div className="text-xs text-gray-500 uppercase">Engagement</div>
              </div>
            </div>
            <div className="flex gap-4">
               <span className="text-xs text-gray-500 border border-white/10 px-3 py-1 rounded">Spotify</span>
               <span className="text-xs text-gray-500 border border-white/10 px-3 py-1 rounded">YouTube</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
