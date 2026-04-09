import React from 'react';
import './GlassCard.css';

const GlassCard = ({ children, className = '', hoverGlow = true }) => {
  return (
    <div className={`glass-card glass ${hoverGlow ? 'hover-glow' : ''} ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;
