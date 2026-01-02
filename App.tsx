
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Platforms from './components/Platforms';
import Portfolio from './components/Portfolio';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#030305] text-white selection:bg-brand-500/30">
      <Navbar />
      <main>
        <Hero />
        <Platforms />
        <Portfolio />
        <CaseStudies />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
