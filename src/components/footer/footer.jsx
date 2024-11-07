import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        {/* Column 1: Company */}
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Services</a></li>
          </ul>
        </div>

        {/* Column 2: Contact Us */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul>
            <li><a href="#">Help & Support</a></li>
            <li><a href="#">Partner With Us</a></li>
            <li><a href="#">Ride With Us</a></li>
          </ul>
        </div>

        {/* Column 3: Available In */}
        <div className="footer-column">
          <h3>Available In</h3>
          <ul>
            <li><a href="#">Mumbai</a></li>
            <li><a href="#">Delhi</a></li>
            <li><a href="#">Bengaluru</a></li>
            <li><a href="#">Chennai</a></li>
          </ul>
        </div>

        {/* Column 4: Legal */}
        <div className="footer-column">
          <h3>Legal</h3>
          <ul>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p style={{color:'white'}}>&copy; {new Date().getFullYear()} Food Alex</p>
        <div className="social-media">
          <a href="#" aria-label="LinkedIn" className="social-icon">LinkedIn</a>
          <a href="#" aria-label="Instagram" className="social-icon">Instagram</a>
          <a href="#" aria-label="Facebook" className="social-icon">Facebook</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
