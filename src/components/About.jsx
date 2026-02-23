import React from "react";
import "../style/About.css";
import img1 from "../assets/slide1.png";
import img2 from "../assets/slide2.png";
import img3 from "../assets/slide3.png";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* LEFT CONTENT */}
        <div className="about-text fade-up">
          <h2>About Us</h2>
          <p className="highlight">
            Engineering Excellence • Heavy Machinery • Precision Work
          </p>

          <p>
            <strong>STEADGEO Engineering & Projects</strong> is a professionally
            managed engineering company specializing in multi-branded truck
            services, heavy equipment rehabilitation, fabrication, and precision
            machining works.
          </p>

          <p>
            Our facility is equipped with advanced infrastructure including
            <strong> lathe machinery, line boring systems, hydraulic presses,
            engine rebuilding setups, and fabrication bays</strong>.
          </p>

          <p>
            We serve industries across construction, logistics, mining, and
            infrastructure with a strong focus on <strong>quality, safety, and
            reliability</strong>.
          </p>

          <ul>
            <li>✔ Multi Branded Truck Services</li>
            <li>✔ Excavator & Concrete Pump Re-hab</li>
            <li>✔ Line Boring & Engine Rebuilding</li>
            <li>✔ Fabrication, Welding & Body Painting</li>
          </ul>
        </div>

        {/* RIGHT IMAGES */}
        <div className="about-images fade-up delay">
          <div className="img-card img-one">
            <img src={img1} alt="Workshop" />
          </div>
          <div className="img-card img-two">
            <img src={img2} alt="Machinery" />
          </div>
          <div className="img-card img-three">
            <img src={img3} alt="Engineering" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

