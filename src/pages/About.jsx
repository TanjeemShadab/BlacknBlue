import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/ui/GlassCard';
import './Pages.css';

// Assets
import teamImg from '../assets/about_team.png';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const About = () => {
  return (
    <div className="about-page page-padding">
      <section className="page-header container">
        <motion.h1 
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          About <span className="text-blue">Black n Blue</span>
        </motion.h1>
        <motion.p 
          className="text-center section-subtitle"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          Dhaka's premier partner for grand-scale event logistics since 2013.
        </motion.p>
      </section>

      <section className="about-content container section-padding">
        <div className="about-grid">
          <motion.div 
            className="about-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeIn}>Our <span className="text-blue">Story</span></motion.h2>
            <motion.p variants={fadeIn}>Founded in Dhaka, Black n Blue Events Logistics has grown from a specialized setup team into a full-service events powerhouse. We recognized early on that the success of grand events—be it a massive corporate expo or a high-profile concert—depends on the strength of the underlying infrastructure.</motion.p>
            <motion.p variants={fadeIn}>Today, we represent the standard of reliability in Bangladesh, providing turnkey solutions that allow event organizers to focus on their creative vision while we handle the heavy-duty logistics.</motion.p>
            
            <motion.div className="stats-grid-premium mt-12" variants={staggerContainer}>
              <motion.div className="stat-card glass" variants={fadeIn}>
                <span className="stat-number">13+</span>
                <span className="stat-label">Years of Mastery</span>
              </motion.div>
              <motion.div className="stat-card glass" variants={fadeIn}>
                <span className="stat-number">500+</span>
                <span className="stat-label">Global Scale Events</span>
              </motion.div>
              <motion.div className="stat-card glass" variants={fadeIn}>
                <span className="stat-number">Dhaka</span>
                <span className="stat-label">National Operations</span>
              </motion.div>
            </motion.div>
          </motion.div>
          <div className="about-visuals">
             <motion.div 
               className="about-img-container glass"
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2 }}
             >
                <img src={teamImg} alt="Black n Blue Team" className="about-team-img" />
             </motion.div>
             <motion.div 
               className="mission-vision-grid mt-6"
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeIn}
             >
               <GlassCard className="mission-card">
                  <h3 className="text-blue">Our Mission</h3>
                  <p>To empower event organizers in Bangladesh with the most reliable, modern, and safe logistics infrastructure available.</p>
               </GlassCard>
             </motion.div>
          </div>
        </div>
      </section>

      <section className="values-section section-padding container">
        <motion.h2 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          Core <span className="text-blue">Values</span>
        </motion.h2>
        <motion.div 
          className="values-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn}>
            <GlassCard className="value-card">
              <h3 className="text-blue">Unfailing Reliability</h3>
              <p>In the event industry, timing is everything. We pride ourselves on on-time delivery and setups that are ready before the doors open.</p>
            </GlassCard>
          </motion.div>
          <motion.div variants={fadeIn}>
            <GlassCard className="value-card">
              <h3 className="text-blue">Safety First</h3>
              <p>Our stages, trussing, and electrical setups follow strict safety protocols to protect attendees and equipment.</p>
            </GlassCard>
          </motion.div>
          <motion.div variants={fadeIn}>
            <GlassCard className="value-card">
              <h3 className="text-blue">Customer Focused</h3>
              <p>"We are here for your best support" isn't just a tagline—it's how we operate every single day.</p>
            </GlassCard>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
