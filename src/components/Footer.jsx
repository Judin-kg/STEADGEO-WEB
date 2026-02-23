import React from "react";
import "../style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-col">
          <h3 className="footer-logo">STEADGEO</h3>
          <p>
            STEADGEO Engineering & Projects delivers professional
            engineering solutions, machinery spares, and project support
            across India.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/spares">Spares</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>📍 Kerala, India</p>
          <p>📞 +91 98765 43210</p>
          <p>
            ✉️ 
            <a href="mailto:info@steadgeo.com">
              info@steadgeo.com
            </a>
          </p>
        </div>

        {/* Social
        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#">🌐</a>
            <a href="#">📘</a>
            <a href="#">📸</a>
            <a href="#">💼</a>
          </div>
        </div> */}

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} STEADGEO Engineering & Projects. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;