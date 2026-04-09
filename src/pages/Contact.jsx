import React from 'react';
import { Phone, Mail, MapPin, Facebook } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import PremiumButton from '../components/ui/PremiumButton';
import './Pages.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your quote request has been sent for placeholder purposes.');
  };

  return (
    <div className="contact-page page-padding">
      <section className="page-header container">
        <h1 className="text-center">Contact <span className="text-blue">Our Experts</span></h1>
        <p className="text-center section-subtitle">Let's discuss your next grand event. We provide quick quotes within 24 hours.</p>
      </section>

      <section className="contact-content container section-padding">
        <div className="contact-grid">
          <div className="contact-info">
            <h2 className="mb-8">Get in <span className="text-blue">Touch</span></h2>
            <div className="contact-info-cards">
              <GlassCard className="contact-info-card" hoverGlow={false}>
                <Phone size={24} />
                <div>
                  <h4>Call Us</h4>
                  <a href="tel:+8801615408000">+8801615408000</a>
                </div>
              </GlassCard>
              
              <GlassCard className="contact-info-card" hoverGlow={false}>
                <Mail size={24} />
                <div>
                  <h4>Email Us</h4>
                  <a href="mailto:blacknblue.interior@gmail.com">blacknblue.interior@gmail.com</a>
                </div>
              </GlassCard>

              <GlassCard className="contact-info-card" hoverGlow={false}>
                <MapPin size={24} />
                <div>
                  <h4>Visit Our Hub</h4>
                  <span>Eastern Housing Police Check Post, Mirpur Beribadh, Dhaka 1216</span>
                </div>
              </GlassCard>

              <GlassCard className="contact-info-card" hoverGlow={false}>
                <Facebook size={24} />
                <div>
                  <h4>Follow Us</h4>
                  <a href="https://www.facebook.com/blacknblue1" target="_blank" rel="noreferrer">facebook.com/blacknblue1</a>
                </div>
              </GlassCard>
            </div>
          </div>

          <div className="contact-form">
            <GlassCard className="contact-form-container">
              <h3>Request a <span className="text-blue">Quick Quote</span></h3>
              <form onSubmit={handleSubmit} className="mt-8">
                <div className="form-grid">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Your Name" required />
                  </div>
                  <div className="form-group">
                    <label>Company Name (Optional)</label>
                    <input type="text" placeholder="Organization" />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="+880" required />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="email@example.com" required />
                  </div>
                  <div className="form-group">
                    <label>Event Type</label>
                    <select>
                      <option>Exhibition</option>
                      <option>Corporate Seminar</option>
                      <option>Concert / Show</option>
                      <option>Wedding</option>
                      <option>Roadshow</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Event Date</label>
                    <input type="date" />
                  </div>
                  <div className="form-group form-full">
                    <label>How can we support you?</label>
                    <textarea rows="4" placeholder="Detail your logistics needs (Stage, LED, Tents, etc.)"></textarea>
                  </div>
                </div>
                <div className="mt-8">
                  <PremiumButton type="submit" className="w-full">
                    <Mail size={18} className="mr-2" style={{marginRight: '10px'}} /> 
                    Send Quote Request
                  </PremiumButton>
                </div>
              </form>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="map-section container section-padding">
        <div className="map-container glass">
           <div className="placeholder-map">
             <h3>Embedded Google Map Location</h3>
             <p>Eastern Housing Police Check Post, Mirpur Beribadh, Dhaka 1216</p>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
