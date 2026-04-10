import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Info, CheckCircle2 } from 'lucide-react';
import PremiumButton from '../components/ui/PremiumButton';
import GlassCard from '../components/ui/GlassCard';
import './Pages.css';

// Assets (Keep existing imports)
import stageImg from '../assets/service_stage.png';
import tentsImg from '../assets/service_tents.png';
import ledImg from '../assets/service_led.png';
import teamImg from '../assets/about_team.png';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Exhibition', 'Corporate', 'Wedding', 'Concert', 'Roadshow', 'Others'];

  const projects = [
    { 
      id: 1, 
      title: 'Mega Trade Fair Logistics', 
      category: 'Exhibition', 
      img: tentsImg,
      desc: 'Complete outdoor infrastructure for a 5-day trade fair, featuring 20+ Pagoda tents and a main fabric booth.',
      technicalSpecs: ['25 Pagoda Tents', '10,000 sqft Fabric Area', 'Heavy Duty Flooring'],
      outcome: 'Successfully hosted 50,000+ visitors over 5 days with zero structural issues.'
    },
    { 
      id: 2, 
      title: 'Fortune 500 AGM', 
      category: 'Corporate', 
      img: ledImg,
      desc: 'High-res P2 LED wall setup (40ft x 12ft) with crystal clear line-array sound systems for a massive corporate gathering.',
      technicalSpecs: ['P2 LED Wall (480 Panels)', 'L-Acoustics Sound System', 'Digital Media Control'],
      outcome: 'Immersive visual experience delivered for 1,200 executive stakeholders.'
    },
    { 
      id: 3, 
      title: 'Grand Palace Wedding', 
      category: 'Wedding', 
      img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80',
      desc: 'Thematic stage lighting and delicate trussing integration for a luxury wedding reception in Dhaka.',
      technicalSpecs: ['Intelligent Lighting (50 Heads)', 'Deco Trussing System', 'Atmospheric FX'],
      outcome: 'A majestic atmosphere that exceeded client expectations for a guest list of 2,000.'
    },
    { 
      id: 4, 
      title: 'Dhaka Music Fest', 
      category: 'Concert', 
      img: stageImg,
      desc: 'Heavy-duty 40ft stage engineering with specialized lighting towers and secure safety trussing.',
      technicalSpecs: ['40x30ft Ground Support Stage', 'Custom Lighting Towers', 'Certified Truss Safety'],
      outcome: 'Rock-solid platform for 12 international artists with perfect acoustic distribution.'
    },
    { 
      id: 5, 
      title: 'Brand Launch Roadshow', 
      category: 'Roadshow', 
      img: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80',
      desc: 'Mobile branding logistics and rapid setup units for a 7-city nationwide product launch tour.',
      technicalSpecs: ['Mobile Fabricated Units', 'Rapid Setup Infrastructure', 'Nationwide Logistics'],
      outcome: 'Consistent brand presence delivered across 7 districts in just 14 days.'
    },
    { 
      id: 6, 
      title: 'Industrial Expo Pavilion', 
      category: 'Exhibition', 
      img: teamImg,
      desc: 'Custom fabricated pavilion with integrated AV systems for a leading industrial manufacturer.',
      technicalSpecs: ['Modular Fabrication', 'Integrated Technical Hub', 'Internal Branding Lighting'],
      outcome: '"Best Pavilion" award for the client with high-impact visitor engagement.'
    },
    { 
      id: 7, 
      title: 'Tech Leadership Summit', 
      category: 'Corporate', 
      img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80',
      desc: 'Executive stage design and multi-screen control infrastructure for an international tech summit.',
      technicalSpecs: ['Multi-screen Control System', 'Executive Stage Layout', 'Live Stream Integration'],
      outcome: 'Professional broadcast-quality environment for international keynote speakers.'
    },
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="portfolio-page page-padding">
      <section className="page-header container">
        <motion.h1 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our <span className="text-blue">Projects</span>
        </motion.h1>
        <motion.p 
          className="text-center section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          A visual showcase of our event logistics mastery in Bangladesh.
        </motion.p>
      </section>

      <section className="portfolio-section container">
        <div className="services-tabs glass mb-12 mx-auto" style={{ width: 'fit-content' }}>
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`tab-btn ${filter === cat ? 'active' : ''}`}
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
                onClick={() => setSelectedProject(project)}
              >
                <img src={project.img} alt={project.title} className="portfolio-img" />
                <div className="portfolio-overlay">
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                  <div className="view-details-indicator">
                    <Info size={16} className="mr-2" /> View Case Study
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="project-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="project-modal-container glass"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="modal-close-btn" 
                onClick={() => setSelectedProject(null)}
              >
                <X size={24} />
              </button>

              <div className="modal-content-grid">
                <div className="modal-visual">
                  <img src={selectedProject.img} alt={selectedProject.title} />
                </div>
                <div className="modal-info">
                  <span className="project-cat">{selectedProject.category}</span>
                  <h2>{selectedProject.title}</h2>
                  <p className="project-desc">{selectedProject.desc}</p>
                  
                  <div className="technical-logs">
                    <h4><ExternalLink size={16} className="text-blue" /> Technical Excellence</h4>
                    <ul>
                      {selectedProject.technicalSpecs.map((spec, i) => (
                        <li key={i}>{spec}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="outcome-section">
                    <h4><CheckCircle2 size={16} className="text-blue" /> Project Outcome</h4>
                    <p>{selectedProject.outcome}</p>
                  </div>

                  <div className="modal-actions">
                    <PremiumButton className="w-full" onClick={() => window.location.href='/contact'}>
                      Inquire About Similar setup
                    </PremiumButton>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
