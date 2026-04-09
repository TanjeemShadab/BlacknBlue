import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Pages.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Exhibition', 'Corporate', 'Wedding', 'Concert', 'Roadshow', 'Others'];

  const projects = [
    { id: 1, title: 'Grand Exhibition Setup', category: 'Exhibition', img: 'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80' },
    { id: 2, title: 'Tech Corporate Seminar', category: 'Corporate', img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80' },
    { id: 3, title: 'Royal Wedding Lighting', category: 'Wedding', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80' },
    { id: 4, title: 'Massive Rock Concert Stage', category: 'Concert', img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80' },
    { id: 5, title: 'Brand Launch Roadshow', category: 'Roadshow', img: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80' },
    { id: 6, title: 'Trade Fair Fabricated Stall', category: 'Exhibition', img: 'https://images.unsplash.com/photo-1582192732831-27bac69c9704?auto=format&fit=crop&q=80' },
    { id: 7, title: 'Annual General Meeting', category: 'Corporate', img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80' },
    { id: 8, title: 'Summer Jazz Festival', category: 'Concert', img: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&q=80' },
    { id: 9, title: 'Outdoor Pagoda Event', category: 'Others', img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80' },
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="portfolio-page page-padding">
      <section className="page-header container">
        <h1 className="text-center">Our <span className="text-blue">Projects</span></h1>
        <p className="text-center section-subtitle">A visual showcase of our event logistics mastery in Bangladesh.</p>
      </section>

      <section className="portfolio-section container">
        <div className="portfolio-filters">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="portfolio-grid">
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="portfolio-item glass"
              >
                <img src={project.img} alt={project.title} className="portfolio-img" />
                <div className="portfolio-overlay">
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
};

export default Portfolio;
