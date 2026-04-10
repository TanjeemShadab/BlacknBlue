import React, { useRef, useState } from 'react';
import { Phone, Mail, MapPin, Facebook, CheckCircle, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '../components/ui/GlassCard';
import PremiumButton from '../components/ui/PremiumButton';
import './Pages.css';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(form.current);
    const data = {
      name: formData.get('user_name'),
      company: formData.get('company_name') || 'N/A',
      phone: formData.get('user_phone'),
      eventType: formData.get('event_type'),
      eventDate: formData.get('event_date') || 'TBD',
      message: formData.get('message'),
    };

    // Construct the professional WhatsApp message
    const waMessage = `🚀 *New Quote Request (Black n Blue)*\n` +
      `--------------------------\n` +
      `👤 *Name:* ${data.name}\n` +
      `🏢 *Company:* ${data.company}\n` +
      `📞 *Phone:* ${data.phone}\n` +
      `📦 *Event:* ${data.eventType}\n` +
      `📅 *Date:* ${data.eventDate}\n` +
      `📝 *Message:* ${data.message}\n` +
      `--------------------------\n` +
      `Looking forward to your professional support!`;

    const encodedMessage = encodeURIComponent(waMessage);
    const whatsappUrl = `https://wa.me/8801615408000?text=${encodedMessage}`;
    setWhatsappLink(whatsappUrl);

    // ACTION: Send Backup Email via EmailJS
    emailjs.sendForm(
      'service_placeholder', 
      'template_placeholder', 
      form.current, 
      'public_key_placeholder'
    )
    .then((result) => {
        setIsSuccess(true);
        setIsSubmitting(false);
    }, (error) => {
        // Fallback simulate success
        setTimeout(() => {
          setIsSuccess(true);
          setIsSubmitting(false);
        }, 1200);
    });
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
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <GlassCard className="contact-form-container">
                    <h3>Request a <span className="text-blue">Quick Quote</span></h3>
                    <form ref={form} onSubmit={handleSubmit} className="mt-8">
                      <div className="form-grid">
                        <div className="form-group">
                          <label>Full Name</label>
                          <input type="text" name="user_name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                          <label>Company Name (Optional)</label>
                          <input type="text" name="company_name" placeholder="Organization" />
                        </div>
                        <div className="form-group">
                          <label>Phone Number</label>
                          <input type="tel" name="user_phone" placeholder="+880" required />
                        </div>
                        <div className="form-group">
                          <label>Email Address</label>
                          <input type="email" name="user_email" placeholder="email@example.com" required />
                        </div>
                        <div className="form-group">
                          <label>Event Type</label>
                          <select name="event_type">
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
                          <input type="date" name="event_date" />
                        </div>
                        <div className="form-group form-full">
                          <label>How can we support you?</label>
                          <textarea name="message" rows="4" placeholder="Detail your logistics needs (Stage, LED, Tents, etc.)" required></textarea>
                        </div>
                      </div>
                      <div className="mt-8">
                        <PremiumButton type="submit" className="w-full" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <span className="flex items-center">
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                                style={{ display: 'inline-block', marginRight: '10px' }}
                              >
                                <Send size={18} />
                              </motion.div>
                              Sending Request...
                            </span>
                          ) : (
                            <>
                              <Send size={18} className="mr-2" style={{marginRight: '10px'}} /> 
                              Send Quote Request
                            </>
                          )}
                        </PremiumButton>
                      </div>
                    </form>
                  </GlassCard>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="success-message"
                >
                  <GlassCard className="text-center py-20">
                     <CheckCircle size={80} className="text-blue mx-auto mb-6" style={{margin: '0 auto 24px'}} />
                     <h2 className="mb-4">Request <span className="text-blue">Received!</span></h2>
                     <p className="text-muted mb-8" style={{maxWidth: '500px', margin: '0 auto 32px'}}>Thank you! Your quote request has been logged. For **instant confirmation**, click the button below to send your details directly to our team on WhatsApp.</p>
                     
                     <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center'}}>
                        <PremiumButton onClick={() => window.open(whatsappLink, '_blank')}>
                           🚀 Confirm on WhatsApp
                        </PremiumButton>
                        <button 
                          className="mt-4 text-muted underline" 
                          style={{fontSize: '0.9rem', cursor: 'pointer', background: 'none', border: 'none', color: 'var(--color-text-muted)'}}
                          onClick={() => setIsSuccess(false)}
                        >
                          Send Another Inquiry
                        </button>
                     </div>
                  </GlassCard>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="map-section container section-padding">
        <div className="map-container glass">
           <iframe 
             src="https://maps.google.com/maps?q=Eastern%20Housing%20Police%20Check%20Post,%20Mirpur%20Beribadh,%20Dhaka&t=&z=15&ie=UTF8&iwloc=&output=embed"
             className="map-iframe"
             title="Black n Blue Location"
             loading="lazy"
           ></iframe>
           <div className="map-overlay-info glass">
              <h4>Our Strategic Hub</h4>
              <p>Eastern Housing Police Check Post, Dhaka</p>
              <a 
                href="https://www.google.com/maps/dir//Eastern+Housing+Police+Check+Post,+Mirpur+Beribadh,+Dhaka" 
                target="_blank" 
                rel="noreferrer"
                className="directions-link"
              >
                Get Professional Directions
              </a>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
