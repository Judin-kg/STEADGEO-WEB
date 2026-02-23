// import React from "react";
// import "../style/Navbar.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         {/* Logo */}
//         <div className="logo">
//           <span>STEADGEO</span>
//           <small>Engineering & Projects</small>
//         </div>

//         {/* Menu */}
//         <ul className="nav-links">
//           <li><a href="#home">Home</a></li>
//           <li><a href="#about">About</a></li>
//           <li><a href="#services">Services</a></li>
//           <li><a href="#departments">Departments</a></li>
//           <li><a href="#spares">Spares</a></li>
//           <li><a href="#testimonials">Testimonials</a></li>
//           <li><a href="#contact" className="contact-btn">Contact</a></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import "../style/Navbar.css";
import logo from "../assets/logo1.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollUp, setScrollUp] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Detect scroll direction
      if (currentScroll > lastScrollY) {
        setScrollUp(false); // scrolling down
      } else {
        setScrollUp(true); // scrolling up
      }

      // Add glass effect after 80px
      if (currentScroll > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      lastScrollY = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar 
      ${scrolled ? "navbar-glass" : ""} 
      ${scrollUp ? "expand" : "shrink"}`}
    >
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Steadgeo Logo" />
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
          <li><a href="#departments" onClick={() => setMenuOpen(false)}>Departments</a></li>
          <li><a href="#spares" onClick={() => setMenuOpen(false)}>Spares</a></li>
          <li><a href="#contact" className="contact-btn" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

