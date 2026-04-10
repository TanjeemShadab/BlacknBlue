import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo footer-logo">
            <img src={logo} alt="Black n Blue Events" className="f-logo" />
            <span className="logo-text">Black n Blue</span>
          </Link>
          <p className="footer-desc">
            Bangladesh's premier event logistics partner since 2013. Engineering excellence for high-end stages, exhibition booths, and technical infrastructure.
          </p>
          <div className="social-links">
            <a href="https://www.facebook.com/blacknblue1" target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Expertise</h3>
          <ul>
            <li><Link to="/services">Stage & Trussing</Link></li>
            <li><Link to="/services">Exhibition Stalls</Link></li>
            <li><Link to="/services">LED & TV Walls</Link></li>
            <li><Link to="/services">Pagoda Tents</Link></li>
            <li><Link to="/services">Sound & Lighting</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Quick Help</h3>
          <ul>
            <li><Link to="/about">Our Story</Link></li>
            <li><Link to="/portfolio">Recent Works</Link></li>
            <li><Link to="/contact">Request Quote</Link></li>
            <li><Link to="/contact">Visit Our Hub</Link></li>
            <li><Link to="/contact">Careers</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Get In Touch</h3>
          <ul className="contact-list">
            <li>
              <Phone size={18} className="text-blue" />
              <div>
                <span className="label">Hotline 24/7</span>
                <a href="tel:+8801615408000">+8801615408000</a>
              </div>
            </li>
            <li>
              <Mail size={18} className="text-blue" />
              <div>
                <span className="label">Email Inquiry</span>
                <a href="mailto:blacknblue.interior@gmail.com">blacknblue.interior@gmail.com</a>
              </div>
            </li>
            <li>
              <MapPin size={18} className="text-blue" />
              <div>
                <span className="label">Main Hub</span>
                <span>Eastern Housing Police Check Post, Mirpur Beribadh, Dhaka 1216</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container footer-bottom-flex">
          <p>&copy; {new Date().getFullYear()} Black n Blue Events Logistics. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/contact">Privacy Policy</Link>
            <Link to="/contact">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
