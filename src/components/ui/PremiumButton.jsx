import React, { useRef } from 'react';
import gsap from 'gsap';
import './PremiumButton.css';

const PremiumButton = ({ children, onClick, type = 'button', variant = 'primary', className = '' }) => {
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    gsap.to(buttonRef.current, {
      x: x * 0.2,
      y: y * 0.2,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.3)',
    });
  };

  return (
    <button
      ref={buttonRef}
      type={type}
      onClick={onClick}
      className={`premium-button ${variant} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <span className="button-text">{children}</span>
      <div className="button-glow"></div>
    </button>
  );
};

export default PremiumButton;
