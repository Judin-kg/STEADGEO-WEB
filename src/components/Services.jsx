// import React, { useEffect, useState } from "react";
// import "../style/Services.css";
// import s1 from "../assets/slide1.png";
// import s2 from "../assets/slide2.png";
// import s3 from "../assets/slide3.png";
// import s4 from "../assets/slide4.png";

// const images = [s1, s2, s3, s4];

// const Services = () => {
//   const [index, setIndex] = useState(0);

//   // Auto sliding carousel
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 3500);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="services-section" id="services">

//       {/* HEADER */}
//       <div className="services-header">
//         <h2>Our Services</h2>
//         <p>Complete Engineering & Heavy Machinery Solutions</p>
//       </div>

//       {/* IMAGE CAROUSEL */}
//       <div className="service-carousel">
//         {images.map((img, i) => (
//           <div
//             key={i}
//             className={`carousel-slide ${i === index ? "active" : ""}`}
//             style={{ backgroundImage: `url(${img})` }}
//           />
//         ))}
//       </div>

//       {/* SERVICE GRID */}
//       <div className="services-grid">

//         <div className="service-card">
//           <h3>Multi Branded Truck Services</h3>
//           <p>
//             Complete service solutions for MAN, EICHER, TATA, and MAHINDRA trucks,
//             including diagnostics, repairs, and preventive maintenance.
//           </p>
//         </div>

//         <div className="service-card">
//           <h3>Lathe Machinery & Fabrication</h3>
//           <p>
//             Precision lathe works, custom machining, structural fabrication, and
//             heavy component manufacturing with high accuracy.
//           </p>
//         </div>

//         <div className="service-card">
//           <h3>Auto Denting, Welding & Painting</h3>
//           <p>
//             Advanced auto body dent removal, MIG & ARC welding, and professional
//             body painting for trucks and equipment.
//           </p>
//         </div>

//         <div className="service-card">
//           <h3>Excavator & Concrete Pump Re-Hab</h3>
//           <p>
//             Complete rehabilitation of excavators, transit mixers, and concrete
//             pumps to restore performance and durability.
//           </p>
//         </div>

//         <div className="service-card">
//           <h3>Line Boring & Engine Rebuilding</h3>
//           <p>
//             On-site and in-house line boring, excavator engine rebuilding, and
//             high-precision alignment services.
//           </p>
//         </div>

//         <div className="service-card">
//           <h3>Drum / Disc Boring & Facing</h3>
//           <p>
//             High-precision drum and disc boring & facing services ensuring
//             safety, balance, and performance.
//           </p>
//         </div>

//         <div className="service-card">
//           <h3>200 MT Hydraulic Press Works</h3>
//           <p>
//             Heavy-duty hydraulic press operations up to 200 metric tons for
//             industrial assembly and dismantling.
//           </p>
//         </div>

//         <div className="service-card">
//           <h3>Hydraulic Hose Crimping</h3>
//           <p>
//             Reliable hydraulic hose crimping solutions for heavy machinery,
//             construction equipment, and trucks.
//           </p>
//         </div>

//         <div className="service-card">
//           <h3>Spares, Blue & Lubricants</h3>
//           <p>
//             Authorized spare parts unit for MAN, EICHER, TATA & MAHINDRA,
//             including AdBlue and premium lubricants.
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Services;


import React from "react";
import "../style/Services.css";
import s1 from "../assets/slide1.png";
import s2 from "../assets/slide2.png";
import s3 from "../assets/slide3.png";
import s4 from "../assets/slide4.png";

const services = [
  {
    title: "MULTI BRANDED TRUCK SERVICES",
    desc: "Complete servicing and maintenance for all major truck brands ensuring reliability and performance.",
    image: s1,
  },
  {
    title: "LATHE MACHINERY JOBS & MACHINE FABRICATION",
    desc: "Precision lathe machining, custom fabrication and heavy engineering works.",
    image: s2,
  },
  {
    title: "AUTO DENTING, WELDING & BODY PAINTING",
    desc: "Professional denting, welding and premium body painting services.",
    image: s3,
  },
  {
    title: "RE-HAB WORK OF EXCAVATORS & CONCRETE PUMPS",
    desc: "Complete rehabilitation and overhaul of excavators, transit mixers and concrete pumps.",
    image: s4,
  },
  {
    title: "LINE BORING & ENGINE RE-BUILDING",
    desc: "High-accuracy line boring, engine rebuilding, drum & disc boring with facings.",
    image: s1,
  },
  {
    title: "200 MT HYDRAULIC PRESS & HOSE CRIMPING",
    desc: "Heavy-duty hydraulic press works and hydraulic hose crimping services.",
    image: s2,
  },
  {
    title: "SPARE PARTS & LUBRICANTS",
    desc: "Spare parts for MAN, EICHER, TATA, MAHINDRA with AdBlue and industrial lubricants.",
    image: s3,
  },
];

export default function Services() {
  return (
    <div className="services-page">
      <h1 className="services-heading">Our Services</h1>
         {/* <p className="highlight">
            Engineering Excellence • Heavy Machinery • Precision Work
          </p> */}
      <div className="carousel-wrapper">
        <div className="vertical-carousel">
          {[...services, ...services].map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>

              <div className="service-content">
                <h2>{service.title}</h2>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
