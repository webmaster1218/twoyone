
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Mendoza',
    role: 'CEO, TechVision Solutions',
    company: 'Startup SaaS',
    text: '"Increíble trabajo. En solo 3 meses triplicamos nuestros leads cualificados. El equipo entiende perfectamente el ecosistema digital y sabe cómo optimizar cada euro invertido."',
    image: 'https://i.pravatar.cc/150?u=carlos',
    tag: 'Google Ads'
  },
  {
    name: 'María Rodríguez',
    role: 'Directora de Marketing',
    company: 'Fashion Boutique',
    text: '"Las campañas en Meta han transformado completamente nuestro negocio. Pasamos de vender localmente a tener clientes en toda España. ROI impresionante."',
    image: 'https://i.pravatar.cc/150?u=maria',
    tag: 'Meta Ads'
  },
  {
    name: 'Javier Torres',
    role: 'Fundador',
    company: 'Indie Music Label',
    text: '"Spotify Ads fue un game changer para nuestros artistas. Llegamos exactamente a la audiencia correcta y los resultados en streams fueron increíbles."',
    image: 'https://i.pravatar.cc/150?u=javier',
    tag: 'Spotify Ads'
  },
  {
    name: 'Ana Martínez',
    role: 'CMO',
    company: 'Consulting Group',
    text: '"La estrategia en X nos posicionó como líderes de opinión en nuestro sector. El engagement y la calidad de los leads superó todas nuestras expectativas."',
    image: 'https://i.pravatar.cc/150?u=ana',
    tag: 'X Ads'
  },
  {
    name: 'Roberto Sánchez',
    role: 'Director General',
    company: 'E-commerce Retail',
    text: '"Profesionales de primer nivel. Nos ayudaron a escalar de 50K a 200K mensuales en ventas online. Su conocimiento de Google Shopping es excepcional."',
    image: 'https://i.pravatar.cc/150?u=roberto',
    tag: 'Google Shopping'
  },
  {
    name: 'Laura Fernández',
    role: 'Propietaria',
    company: 'Wellness Studio',
    text: '"Las campañas locales en Meta llenaron nuestras clases. La segmentación geográfica y por intereses fue perfecta. Mejor inversión que hemos hecho."',
    image: 'https://i.pravatar.cc/150?u=laura',
    tag: 'Meta Ads'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-gray-400">Testimonios reales de empresas que confiaron en nosotros</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="glass p-8 rounded-2xl border-white/5 flex flex-col">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-8 leading-relaxed text-sm">
                {t.text}
              </p>
              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-white/10" />
                    <div>
                        <h5 className="font-bold text-sm">{t.name}</h5>
                        <p className="text-xs text-gray-500">{t.role}</p>
                    </div>
                </div>
                <span className="text-[10px] text-blue-400 uppercase tracking-widest font-bold">{t.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
