
import React from 'react';

const projects = [
  {
    title: 'Tienda de Moda Online',
    category: 'E-commerce',
    growth: '+280% ROI',
    description: 'Campaña multicanal en Google Shopping y Meta para aumentar ventas durante temporada alta.',
    tags: ['Google', 'Meta'],
    image: 'https://picsum.photos/seed/fashion/600/400'
  },
  {
    title: 'Startup SaaS B2B',
    category: 'Tecnología',
    growth: '+450% Leads',
    description: 'Estrategia de generación de leads cualificados mediante LinkedIn y Google Search.',
    tags: ['Google', 'LinkedIn'],
    image: 'https://picsum.photos/seed/saas/600/400'
  },
  {
    title: 'Lanzamiento Musical',
    category: 'Entretenimiento',
    growth: '+1.2M Alcance',
    description: 'Campaña de awareness en Spotify y YouTube para artista emergente.',
    tags: ['Spotify', 'YouTube'],
    image: 'https://picsum.photos/seed/music/600/400'
  },
  {
    title: 'Consultoría Empresarial',
    category: 'Servicios',
    growth: '+350% Engagement',
    description: 'Posicionamiento de marca personal en X y LinkedIn para CEO.',
    tags: ['X', 'LinkedIn'],
    image: 'https://picsum.photos/seed/consulting/600/400'
  },
  {
    title: 'Cadena de Restaurantes',
    category: 'Retail',
    growth: '+190% Visitas',
    description: 'Campañas geolocalizadas en Meta para aumentar tráfico a locales físicos.',
    tags: ['Meta', 'Google'],
    image: 'https://picsum.photos/seed/food/600/400'
  },
  {
    title: 'Plataforma de Cursos Online',
    category: 'Educación',
    growth: '+420% Conversiones',
    description: 'Estrategia de remarketing en YouTube y Display Network para aumentar inscripciones.',
    tags: ['YouTube', 'Google'],
    image: 'https://picsum.photos/seed/education/600/400'
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portafolio" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nuestro Portafolio</h2>
          <p className="text-gray-400">Proyectos que transforman marcas en líderes de mercado</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group glass rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-blue-600/90 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded">
                  {project.category}
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h4>
                </div>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="flex gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] text-gray-500 bg-white/5 px-2 py-0.5 rounded">{tag}</span>
                    ))}
                  </div>
                  <span className="text-green-400 font-bold text-sm">{project.growth}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
