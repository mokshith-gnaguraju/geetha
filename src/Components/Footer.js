import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-item">
        <FaPhoneAlt className="footer-icon phone-icon" />
        <div>
          <span className="footer-label">Call Us</span>
          <a href="tel:+919876543210" className="footer-value">+91 98765 43210</a>
        </div>
      </div>

      <div className="footer-divider" />

      <div className="footer-item">
        <MdEmail className="footer-icon email-icon" />
        <div>
          <span className="footer-label">Request a Callback</span>
          <a href="mailto:info@honda.com" className="footer-value">info@honda.com</a>
        </div>
      </div>

      <div className="footer-divider" />

      <div className="footer-item">
        <FaWhatsapp className="footer-icon whatsapp-icon" />
        <div>
          <span className="footer-label">Chat With Us</span>
          <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="footer-value">WhatsApp Us</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright &copy; 2026 AchieversIT. All Rights Reserved</p>
        <div className="footer-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms">Terms of use</a>
          <a href="/refund">Refund Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
