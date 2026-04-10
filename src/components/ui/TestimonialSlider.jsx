import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import GlassCard from './GlassCard';
import './TestimonialSlider.css';

const testimonials = [
  {
    name: 'Asif Rahman',
    role: 'Event Director, TechExpo Bangladesh',
    text: 'Black n Blue provided flawless logistics for our three-day expo. Their stage engineering and LED screen quality are unmatched in Dhaka.',
  },
  {
    name: 'Samiya Sultana',
    role: 'Marketing Manager, Unilever',
    text: 'The most reliable partner for grand-scale branding. Their team handles high-pressure setups with incredible professionalism.',
  },
  {
    name: 'Zayed Khan',
    role: 'Creative Consultant, Royal Weddings',
    text: 'Exceptional attention to detail in lighting and tent setups. They transformed a plain outdoor space into a majestic wedding venue.',
  }
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="testimonial-slider">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -30 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <GlassCard className="testimonial-card">
            <Quote className="quote-icon" size={60} />
            <p className="testimonial-text">"{testimonials[index].text}"</p>
            <div className="testimonial-footer">
              <div className="testimonial-info">
                <h4 className="testimonial-name">{testimonials[index].name}</h4>
                <p className="testimonial-role">{testimonials[index].role}</p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </AnimatePresence>

      <div className="slider-controls">
        <button className="slider-btn" onClick={prev} aria-label="Previous testimonial">
          <ChevronLeft size={24} />
        </button>
        <div className="slider-dots">
          {testimonials.map((_, i) => (
            <div 
              key={i} 
              className={`dot ${i === index ? 'active' : ''}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
        <button className="slider-btn" onClick={next} aria-label="Next testimonial">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
