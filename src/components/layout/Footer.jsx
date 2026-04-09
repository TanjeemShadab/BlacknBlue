import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo footer-logo">
            <span className="text-white">BLACK</span>
            <span className="text-blue">n</span>
            <span className="text-blue">BLUE</span>
          </Link>
          <p className="tagline">"We are here for your best support"</p>
          <div className="social-links">
            <a href="https://www.facebook.com/blacknblue1" target="_blank" rel="noreferrer">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <Phone size={18} className="text-blue" />
              <a href="tel:+8801615408000">+8801615408000</a>
            </li>
            <li>
              <Mail size={18} className="text-blue" />
              <a href="mailto:blacknblue.interior@gmail.com">blacknblue.interior@gmail.com</a>
            </li>
            <li>
              <MapPin size={18} className="text-blue" />
              <span>Eastern Housing Police Check Post, Mirpur Beribadh, Dhaka 1216</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2026 Black n Blue Events Logistics. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
