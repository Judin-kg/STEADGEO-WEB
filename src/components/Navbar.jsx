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


import React, { useState } from "react";
import "../style/Navbar.css";
import logo from "../assets/logo1.png";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <nav className="navbar">
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
          {/* <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a></li> */}
          <li><a href="#contact" className="contact-btn" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
