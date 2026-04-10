import React, { useEffect, useRef } from 'react';
import { LayoutGrid, Tent, Monitor, Speaker, Lightbulb, Palette, Hammer, Truck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import PremiumButton from '../components/ui/PremiumButton';
import GlassCard from '../components/ui/GlassCard';
import './Home.css';

// Assets
import heroBg from '../assets/hero_bg.png';
import mainSetup from '../assets/service_stage.png';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const whyUsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animations
      gsap.from('.hero-content h1', {
        y: 80,
        opacity: 0,
        duration: 1.4,
        ease: 'power4.out',
      });
      gsap.from('.hero-content p', {
        y: 40,
        opacity: 0,
        duration: 1.4,
        delay: 0.4,
        ease: 'power4.out',
      });
      gsap.from('.hero-btns', {
        y: 40,
        opacity: 0,
        duration: 1.4,
        delay: 0.7,
        ease: 'power4.out',
      });

      // Trust Points Animation
      gsap.from('.trust-point', {
        scrollTrigger: {
          trigger: '.trust-points',
          start: 'top 85%',
        },
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out'
      });

      // Why Us Visual Reveal
      gsap.from('.why-us-image', {
        scrollTrigger: {
          trigger: '.why-us-image',
          start: 'top 80%',
        },
        scale: 0.9,
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out'
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const services = [
    { title: 'Stage & Truss', icon: <Hammer />, desc: 'Robust stage designs with heavy-duty professional trussing systems.' },
    { title: 'Exhibition Stalls', icon: <LayoutGrid />, desc: 'Custom fabricated booths for high-impact brand visibility.' },
    { title: 'Premium Tents', icon: <Tent />, desc: 'Weatherproof pagoda tents for outdoor events and exhibitions.' },
    { title: 'LED & TV Walls', icon: <Monitor />, desc: 'Ultra-bright LED displays for immersive high-res visuals.' },
    { title: 'Lighting Design', icon: <Lightbulb />, desc: 'Atmospheric stage lighting to set the perfect mood.' },
    { title: 'AV & Sound', icon: <Speaker />, desc: 'Crystal clear audio for conferences, concerts, and shows.' },
    { title: 'Road Branding', icon: <Truck />, desc: 'Impactful gate designs and logistics for road branding.' },
    { title: 'Event Decor', icon: <Palette />, desc: 'Elegant furniture and creative decor for all occasions.' },
  ];

  return (
    <div className="home-page" ref={heroRef}>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-wrapper">
          <div className="hero-overlay"></div>
          <img src={heroBg} alt="Grand Event Logistics" className="hero-bg-img" />
        </div>
        
        <div className="container hero-container">
          <div className="hero-content">
            <h1>Expert Solutions for your <span className="text-blue">Grand Event</span></h1>
            <p>Black n Blue Events Logistics – Bangladesh's premier partner for high-end event infrastructure, stage engineering, and technical logistics.</p>
            <div className="hero-btns">
              <PremiumButton onClick={() => window.location.href='/contact'}>Get a Free Quote</PremiumButton>
              <PremiumButton variant="secondary" onClick={() => window.location.href='/portfolio'}>View Our Projects</PremiumButton>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview section-padding">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Premier <span className="text-blue">Services</span></h2>
            <p className="section-subtitle">Comprehensive logistics solutions for every event scale in Dhaka.</p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="service-card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard className="glass-hover">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
          
          <div className="view-all-services text-center mt-12">
            <PremiumButton variant="secondary" onClick={() => window.location.href='/services'}>Explore All Services</PremiumButton>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us section-padding glass" ref={whyUsRef}>
        <div className="container">
          <div className="why-us-grid">
            <div className="why-us-content">
              <h2>Reliable Tech since <span className="text-blue">2013</span></h2>
              <p className="mt-4 text-muted">A decade of expertise in delivering flawless logistics for Bangladesh's most prestigious events.</p>
              <div className="trust-points">
                <div className="trust-point">
                  <h4>13+ Years of Mastery</h4>
                  <p>Delivering excellence to clients across Dhaka and nationwide with a massive logistics scale.</p>
                </div>
                <div className="trust-point">
                  <h4>Safety & Precision</h4>
                  <p>Our engineering team ensures every stage and truss follows strict safety protocols.</p>
                </div>
                <div className="trust-point">
                  <h4>Turnkey Execution</h4>
                  <p>From planning to teardown, we handle the heavy lifting while you focus on the event vision.</p>
                </div>
              </div>
            </div>
            <div className="why-us-image">
               <div className="image-container glass">
                  <img src={mainSetup} alt="Grand Setup" className="why-us-img" />
                  <div className="image-experience-badge glass">
                    <span className="years">13+</span>
                    <span className="label">Years</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta section-padding">
        <div className="container text-center">
          <h2>Ready to elevate your <span className="text-blue">next event?</span></h2>
          <p>Contact the leading event logistics company in Dhaka today for a personalized quote.</p>
          <div className="cta-actions mt-12">
            <PremiumButton onClick={() => window.location.href='/contact'}>Get a Free Quote Now</PremiumButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
