import React from 'react';
import GlassCard from '../components/ui/GlassCard';
import './Pages.css';

const About = () => {
  return (
    <div className="about-page page-padding">
      <section className="page-header container">
        <h1 className="text-center">About <span className="text-blue">Black n Blue</span></h1>
        <p className="text-center section-subtitle">Dhaka's premier partner for grand-scale event logistics.</p>
      </section>

      <section className="about-content container section-padding">
        <div className="about-grid">
          <div className="about-text">
            <h2>Our <span className="text-blue">Story</span></h2>
            <p>Founded in Dhaka, Black n Blue Events Logistics has grown from a specialized setup team into a full-service events powerhouse. We recognized early on that the success of grand events—be it a massive corporate expo or a high-profile concert—depends on the strength of the underlying infrastructure.</p>
            <p>Today, we represent the standard of reliability in Bangladesh, providing turnkey solutions that allow event organizers to focus on their creative vision while we handle the heavy-duty logistics.</p>
            
            <div className="stats-grid mt-8">
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years of Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Successful Events</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">Dhaka</span>
                <span className="stat-label">Based with Nationwide Reach</span>
              </div>
            </div>
          </div>
          <div className="about-visuals">
             <GlassCard>
                <h3 className="text-blue">Our Mission</h3>
                <p>To empower event organizers in Bangladesh with the most reliable, modern, and safe logistics infrastructure available.</p>
                <div className="divider"></div>
                <h3 className="text-blue">Our Vision</h3>
                <p>To be the first-choice logistics partner for every large-scale production, exhibition, and grand celebration in Dhaka.</p>
             </GlassCard>
          </div>
        </div>
      </section>

      <section className="values-section section-padding container">
        <h2 className="text-center mb-12">Core <span className="text-blue">Values</span></h2>
        <div className="values-grid">
          <GlassCard className="value-card">
            <h3>Unfailing Reliability</h3>
            <p>In the event industry, timing is everything. We pride ourselves on on-time delivery and setups that are ready before the doors open.</p>
          </GlassCard>
          <GlassCard className="value-card">
            <h3>Safety First</h3>
            <p>Our stages, trussing, and electrical setups follow strict safety protocols to protect attendees and equipment.</p>
          </GlassCard>
          <GlassCard className="value-card">
            <h3>Customer Focused</h3>
            <p>"We are here for your best support" isn't just a tagline—it's how we operate every single day.</p>
          </GlassCard>
        </div>
      </section>
    </div>
  );
};

export default About;
