import React from "react";
import "../style/Contact.css";
import contactBg from "../assets/manufature.png"; // transparent / png image

const Contact = () => {
  return (
    <section
      className="contact-section"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      <div className="contact-overlay"></div>

      <div className="contact-container">
        {/* Left Content */}
        <div className="contact-info fade-left">
          <h2>Contact Us</h2>
          <p>
            Reach out to <strong>STEADGEO Engineering & Projects</strong> for
            professional engineering solutions, spares, and project support.
          </p>

          <div className="info-box">
            <span>📍</span>
            <p>Kerala, India</p>
          </div>

          <div className="info-box">
            <span>📞</span>
            <p>+91 98765 43210</p>
          </div>

          <div className="info-box">
            <span>✉️</span>
            <p>info@steadgeo.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form fade-right">
          <h3>Send Message</h3>

          <div className="input-group">
            <input type="text" required />
            <label>Name</label>
          </div>

          <div className="input-group">
            <input type="tel" required />
            <label>phone</label>
          </div>

          <div className="input-group">
            <textarea required></textarea>
            <label>Message</label>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
