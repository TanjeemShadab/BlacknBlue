import React from 'react';
import GlassCard from '../components/ui/GlassCard';
import PremiumButton from '../components/ui/PremiumButton';
import { Hammer, LayoutGrid, Tent, Monitor, Lightbulb, Speaker, Truck, Palette, Box } from 'lucide-react';
import './Pages.css';

const Services = () => {
  const allServices = [
    { 
      title: 'Stage, Platform & Truss Systems', 
      icon: <Hammer />, 
      desc: 'Complete engineering of robust stage setups, heavy-duty trussing for lights/sound, and custom-built platforms for any event size.',
      features: ['Heavy-Duty Truss', 'Custom Dimensions', 'Safe Engineering']
    },
    { 
      title: 'Exhibition Stall & Fabricated Stall', 
      icon: <LayoutGrid />, 
      desc: 'Expertly crafted exhibition booths and fabricated stall modules that maximize brand visibility in large-scale expos.',
      features: ['Modular Designs', 'Brand Customization', 'Rapid Installation']
    },
    { 
      title: 'Exhibition Tent & Pagoda Tent', 
      icon: <Tent />, 
      desc: 'High-quality waterproof tents for grand outdoor exhibitions, product launches, and high-profile wedding events.',
      features: ['Weatherproof', 'Pagoda Styles', 'Large Capacity']
    },
    { 
      title: 'Gate & Road Branding', 
      icon: <Truck />, 
      desc: 'Grand entrance gate designs and strategic road branding setups to direct and impress your event attendees.',
      features: ['Grand Entrances', 'Wayfinding', 'Billboard Integration']
    },
    { 
      title: 'LED Screen & Smart TV Wall', 
      icon: <Monitor />, 
      desc: 'Immersive visual solutions using P2/P3 high-resolution LED screens and multi-screen smart TV wall configurations.',
      features: ['P2/P3 Resolution', 'Dynamic Playback', 'Seamless Walls']
    },
    { 
      title: 'Professional Lighting Solutions', 
      icon: <Lightbulb />, 
      desc: 'From stage ambient lighting to intelligent moving heads and architectural illumination, we set the perfect mood.',
      features: ['Moving Heads', 'Ambient Wash', 'DMX Control']
    },
    { 
      title: 'Sound Systems & AV Solutions', 
      icon: <Speaker />, 
      desc: 'Crystal-clear audio logistics for corporate seminars, massive concerts, and high-energy product roadshows.',
      features: ['Line Array', 'PA Systems', 'AV Technicians']
    },
    { 
      title: 'Event Furniture & Decor', 
      icon: <Palette />, 
      desc: 'Premium selection of sofas, chairs, tables, and creative decor elements that align with your event theme.',
      features: ['VIP Seating', 'Creative Decor', 'Thematic Props']
    },
    { 
      title: 'Full Event Planning & Logistics', 
      icon: <Box />, 
      desc: 'Complete turnkey logistics management including setup, teardown, transportation, and technical support.',
      features: ['End-to-End Mgmt', 'On-Site Technicians', 'Dhaka-Wide Support']
    }
  ];

  return (
    <div className="services-page page-padding">
      <section className="page-header container">
        <h1 className="text-center">Our Comprehensive <span className="text-blue">Services</span></h1>
        <p className="text-center section-subtitle">The most advanced events logistics infrastructure in Dhaka.</p>
      </section>

      <section className="services-list section-padding container">
        <div className="services-detail-grid">
          {allServices.map((service, index) => (
            <div key={index} className="service-detail-card">
              <GlassCard>
                <div className="service-icon">{service.icon}</div>
                <h2>{service.title}</h2>
                <p>{service.desc}</p>
                <ul className="feature-list">
                  {service.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <PremiumButton variant="secondary" className="w-full" onClick={() => window.location.href='/contact'}>
                    Request Quote for {service.title.split(' ')[0]}
                  </PremiumButton>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
