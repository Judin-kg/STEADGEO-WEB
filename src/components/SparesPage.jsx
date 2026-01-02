import React from "react";
import "../style/SparesPage.css";

// Import logos (use your uploaded images)
import jcb from "../assets/jcb.png";
import cat from "../assets/cat.png";
import hyundai from "../assets/hyundai.png";
import kobelco from "../assets/kobelco.png";
import hitachi from "../assets/hitachi.png";

export default function SparesPage() {
  return (
    <div className="spares-container">
      {/* Header */}
      <div className="spares-header">
        <h1>Machinery Spares</h1>
        <p>All spares are available here</p>
      </div>

      {/* Brand Grid */}
      <div className="spares-grid">
        <div className="spare-card">
          <img src={jcb} alt="JCB" />
          <span>JCB</span>
        </div>

        <div className="spare-card">
          <img src={cat} alt="CAT" />
          <span>CAT</span>
        </div>

        <div className="spare-card">
          <img src={hyundai} alt="Hyundai" />
          <span>Hyundai</span>
        </div>

        <div className="spare-card">
          <img src={kobelco} alt="Kobelco" />
          <span>Kobelco</span>
        </div>

        <div className="spare-card">
          <img src={hitachi} alt="Hitachi" />
          <span>Hitachi</span>
        </div>
      </div>

      {/* Contact Section */}
      {/* Contact Section */}
<div className="spares-contact glass">
  <h2>Spare Parts Enquiry</h2>
  <p>Need genuine spare parts? Call us anytime</p>

  <a href="tel:04903500300" className="contact-call">
    📞 0490 350 0300
  </a>
</div>

    </div>
  );
}






// import React from "react";
// import "../style/SparesPage.css";

// import jcb from "../assets/jcb.png";
// import cat from "../assets/cat.png";
// import hyundai from "../assets/hyundai.png";
// import kobelco from "../assets/kobelco.png";
// import hitachi from "../assets/hitachi.png";

// const brands = [
//   { name: "JCB", logo: jcb },
//   { name: "CAT", logo: cat },
//   { name: "Hyundai", logo: hyundai },
//   { name: "Kobelco", logo: kobelco },
//   { name: "Hitachi", logo: hitachi },
// ];

// export default function SparesPage() {
//   return (
//     <div className="spares-wrapper">
//       {/* Floating background elements */}
//       <div className="bg-circle one"></div>
//       <div className="bg-circle two"></div>

//       {/* Header */}
//       <div className="spares-header fade-in">
//         <h1>Genuine Machinery Spares</h1>
//         <p>All major brand spares available under one roof</p>
//       </div>

//       {/* Brands */}
//       <div className="brand-grid">
//         {brands.map((b, i) => (
//           <div
//             key={b.name}
//             className="brand-card float"
//             style={{ animationDelay: `${i * 0.2}s` }}
//           >
//             <img src={b.logo} alt={b.name} />
//             <span>{b.name}</span>
//           </div>
//         ))}
//       </div>

//       {/* Contact */}
//       <div className="contact-box fade-in">
//         <span>Spare Enquiry</span>
//         <a href="tel:04903500300">📞 0490 350 0300</a>
//       </div>
//     </div>
//   );
// }
