import React, { useEffect, useRef } from 'react';
import { LayoutGrid, Tent, Monitor, Speaker, Lightbulb, Palette, Hammer, Truck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PremiumButton from '../components/ui/PremiumButton';
import GlassCard from '../components/ui/GlassCard';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    // Hero Animation
    const ctx = gsap.context(() => {
      gsap.from('.hero-content h1', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
      });
      gsap.from('.hero-content p', {
        y: 50,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        ease: 'power4.out',
      });
      gsap.from('.hero-btns', {
        y: 50,
        opacity: 0,
        duration: 1.2,
        delay: 0.6,
        ease: 'power4.out',
      });

      // Scroll Reveal Animations
      gsap.from('.section-title', {
        scrollTrigger: {
          trigger: '.section-title',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
      });

      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const services = [
    { title: 'Stage, Platform & Truss', icon: <Hammer />, desc: 'Robust and grand stage designs with professional trussing systems.' },
    { title: 'Exhibition & Fabricated Stalls', icon: <LayoutGrid />, desc: 'Custom stalls tailored for high-impact brand visibility.' },
    { title: 'Exhibition & Pagoda Tents', icon: <Tent />, desc: 'Weatherproof, premium tents for outdoor events and grand shows.' },
    { title: 'LED Screens & TV Walls', icon: <Monitor />, desc: 'Ultra-bright LED displays and smart TV walls for immersive visuals.' },
    { title: 'Professional Lighting', icon: <Lightbulb />, desc: 'Atmospheric and stage lighting to set the perfect mood.' },
    { title: 'Sound Systems & AV', icon: <Speaker />, desc: 'Crystal clear audio solutions for conferences and concerts.' },
    { title: 'Road Branding & Gates', icon: <Truck />, desc: 'Impactful gate designs and comprehensive road branding logistics.' },
    { title: 'Furniture & Decor', icon: <Palette />, desc: 'Elegant furniture and creative event decor for all occasions.' },
  ];

  return (
    <div className="home-page" ref={heroRef}>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        {/* Placeholder for Video/High-impact Image */}
        <div className="hero-bg"></div>
        
        <div className="container hero-container">
          <div className="hero-content">
            <h1>We are here for your <span className="text-blue">best support</span></h1>
            <p>Black n Blue Events Logistics – Complete Turnkey Event Solutions in Dhaka, Bangladesh.</p>
            <div className="hero-btns">
              <PremiumButton onClick={() => window.location.href='/contact'}>Get a Free Quote</PremiumButton>
              <PremiumButton variant="secondary" onClick={() => window.location.href='/portfolio'}>View Our Projects</PremiumButton>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview section-padding" ref={servicesRef}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Premium <span className="text-blue">Services</span></h2>
            <p className="section-subtitle">Comprehensive logistics solutions for every event scale.</p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <GlassCard>
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </GlassCard>
              </div>
            ))}
          </div>
          
          <div className="view-all-services">
            <PremiumButton variant="secondary" onClick={() => window.location.href='/services'}>Explore All Services</PremiumButton>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us section-padding glass">
        <div className="container">
          <div className="why-us-grid">
            <div className="why-us-content">
              <h2>Why Trusted Since <span className="text-blue">2016</span></h2>
              <div className="trust-points">
                <div className="trust-point">
                  <h4>10+ Years Experience</h4>
                  <p>A decade of delivering excellence in the Bangladesh event industry.</p>
                </div>
                <div className="trust-point">
                  <h4>100% Satisfaction</h4>
                  <p>Our clients trust us for our attention to detail and massive logistics scale.</p>
                </div>
                <div className="trust-point">
                  <h4>On-Time Delivery</h4>
                  <p>Critical event timelines are always met with zero compromise on quality.</p>
                </div>
              </div>
            </div>
            <div className="why-us-image">
               {/* This would be a high-impact photo of a setup */}
               <div className="placeholder-img glass">
                  <span>Grand Setup Visual</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta section-padding">
        <div className="container text-center">
          <h2>Ready to elevate your <span className="text-blue">next event?</span></h2>
          <p>Contact the leading events logistics company in Dhaka today.</p>
          <div className="cta-actions">
            <PremiumButton onClick={() => window.location.href='/contact'}>Get a Free Quote Now</PremiumButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
