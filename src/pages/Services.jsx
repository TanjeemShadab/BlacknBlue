import React, { useState } from 'react';
import GlassCard from '../components/ui/GlassCard';
import PremiumButton from '../components/ui/PremiumButton';
import { Hammer, LayoutGrid, Tent, Monitor, Lightbulb, Speaker, Truck, Palette, Box } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Pages.css';

// Assets
import stageImg from '../assets/service_stage.png';
import tentsImg from '../assets/service_tents.png';
import ledImg from '../assets/service_led.png';
import teamImg from '../assets/about_team.png';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Infrastructure', 'Tech & AV', 'Exhibition', 'Logistics'];

  const allServices = [
    { 
      title: 'Stage, Platform & Truss Systems', 
      category: 'Infrastructure',
      icon: <Hammer />, 
      img: stageImg,
      desc: 'Our engineering-grade stage setups and heavy-duty trussing systems are designed for safety and grand-scale impact. We provide custom-built platforms tailor-made for massive concerts, award ceremonies, and corporate launches.',
      features: ['Certified Structural Safety', 'Custom Dimensions & Heights', 'Engineered Load Capacity']
    },
    { 
      title: 'Exhibition Stall & Fabricated Stall', 
      category: 'Exhibition',
      icon: <LayoutGrid />, 
      img: teamImg, 
      desc: 'We specialize in multi-functional fabricated stalls and modular exhibition booths that enhance brand identity. From concept to 3D design and on-site assembly, we deliver turnkey solutions for international trade fairs.',
      features: ['Bespoke 3D Designs', 'Rapid Modular Assembly', 'Integrated AV & Lighting']
    },
    { 
      title: 'Exhibition Tent & Pagoda Tent', 
      category: 'Infrastructure',
      icon: <Tent />, 
      img: tentsImg,
      desc: 'Our premium waterproof pagoda and exhibition tents provide the perfect outdoor atmosphere for large gatherings. Designed for durability and aesthetics, they are ideal for high-profile weddings and outdoor brand activations.',
      features: ['Weatherproof Materials', 'Superior Ventilation', 'Massive Scale Coverage']
    },
    { 
      title: 'LED Screen & Smart TV Wall', 
      category: 'Tech & AV',
      icon: <Monitor />, 
      img: ledImg,
      desc: 'Deliver immersive visual experiences with our high-resolution P2 and P3 indoor/outdoor LED screens. We also provide multi-screen smart TV wall configurations for seamless content delivery in seminars and summits.',
      features: ['Ultra-High Refresh Rates', 'Seamless Bezel-free Walls', 'Professional Media Servers']
    },
    { 
      title: 'Professional Lighting Solutions', 
      category: 'Tech & AV',
      icon: <Lightbulb />, 
      img: stageImg, 
      desc: 'Transform your venue with our advanced intelligent lighting systems. We provide everything from ambient wash lighting to dynamic moving heads and precise DMX control for complex stage shows.',
      features: ['Intelligent Moving Heads', 'Architectural Illumination', 'DMX-Controlled Effects']
    },
    { 
      title: 'Sound Systems & AV Solutions', 
      category: 'Tech & AV',
      icon: <Speaker />, 
      img: ledImg, 
      desc: 'Pristine audio clarity is our promise. Our professional line-array systems and conference AV solutions ensure every word is heard, whether in a high-energy concert or an executive boardroom meeting.',
      features: ['High-Performance Line Arrays', 'Digital Mixing Consoles', 'Real-time Audio Technicians']
    },
    { 
      title: 'Full Event Planning & Logistics', 
      category: 'Logistics',
      icon: <Box />, 
      img: teamImg,
      desc: 'Beyond infrastructure, we offer end-to-end logistics coordination. Our dedicated team manages equipment transportation, on-site technical support, and strict timeline adherence to ensure your event runs flawlessly.',
      features: ['24/7 Technical Support', 'Dhaka-wide Transportation', 'On-site Operations Manager']
    }
  ];

  const filteredServices = activeCategory === 'All' 
    ? allServices 
    : allServices.filter(s => s.category === activeCategory);

  return (
    <div className="services-page page-padding">
      <section className="page-header container">
        <motion.h1 
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          Our Comprehensive <span className="text-blue">Services</span>
        </motion.h1>
        <motion.p 
          className="text-center section-subtitle"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          High-end logistics and engineering solutions tailored for professional event production in Bangladesh.
        </motion.p>
      </section>

      <section className="services-tabs-container container">
        <div className="services-tabs glass">
          {categories.map(cat => (
            <button 
              key={cat}
              className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="services-list section-padding container">
        <motion.div 
          layout
          className="services-detail-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div 
                key={service.title} 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="service-detail-card"
              >
                <GlassCard className="glass-hover">
                  <div className="service-img-wrapper">
                     <img src={service.img} alt={service.title} className="service-card-img" />
                     <div className="service-card-overlay"></div>
                     <div className="service-icon-floating">{service.icon}</div>
                     <div className="service-category-tag">{service.category}</div>
                  </div>
                  <h2>{service.title}</h2>
                  <p>{service.desc}</p>
                  <ul className="feature-list">
                    {service.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                  <div className="mt-auto p-8 pt-4">
                    <PremiumButton variant="secondary" className="w-full" onClick={() => window.location.href='/contact'}>
                      Request Quote
                    </PremiumButton>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
