// import React from "react";
// import "../style/SparesPage.css";

// // Import logos (use your uploaded images)
// import jcb from "../assets/jcb.png";
// import cat from "../assets/cat.png";
// import hyundai from "../assets/hyundai.png";
// import kobelco from "../assets/kobelco.png";
// import hitachi from "../assets/hitachi.png";

// export default function SparesPage() {
//   return (
//     <div className="spares-container">
//       {/* Header */}
//       <div className="spares-header">
//         <h1>Machinery Spares</h1>
//         <p>All spares are available here</p>
//       </div>

//       {/* Brand Grid */}
//       <div className="spares-grid">
//         <div className="spare-card">
//           <img src={jcb} alt="JCB" />
//           <span>JCB</span>
//         </div>

//         <div className="spare-card">
//           <img src={cat} alt="CAT" />
//           <span>CAT</span>
//         </div>

//         <div className="spare-card">
//           <img src={hyundai} alt="Hyundai" />
//           <span>Hyundai</span>
//         </div>

//         <div className="spare-card">
//           <img src={kobelco} alt="Kobelco" />
//           <span>Kobelco</span>
//         </div>

//         <div className="spare-card">
//           <img src={hitachi} alt="Hitachi" />
//           <span>Hitachi</span>
//         </div>
//       </div>

//       {/* Contact Section */}
//       {/* Contact Section */}
// <div className="spares-contact glass">
//   <h2>Spare Parts Enquiry</h2>
//   <p>Need genuine spare parts? Call us anytime</p>

//   <a href="tel:04903500300" className="contact-call">
//     📞 0490 350 0300
//   </a>
// </div>

//     </div>
//   );
// }




import React, { useEffect } from "react";
import "../style/SparesPage.css";

// Import logos
import jcb from "../assets/jcb.png";
import cat from "../assets/cat.png";
import hyundai from "../assets/hyundai.png";
import kobelco from "../assets/kobelco.png";
import hitachi from "../assets/hitachi.png";

export default function SparesPage() {

  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");

    const moveCursor = (e) => {
      if (cursor) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div className="spares-container">
      
      {/* Custom Cursor */}
      <div className="custom-cursor"></div>

      {/* Header */}
      <div className="spares-header">
        <h1>Machinery Spares</h1>
        <p>All spares are available here</p>
      </div>

      {/* Brand Grid */}
      <div className="spares-grid">
        <div className="logo-item">
          <img src={jcb} alt="JCB" />
        </div>

        <div className="logo-item">
          <img src={cat} alt="CAT" />
        </div>

        <div className="logo-item">
          <img src={hyundai} alt="Hyundai" />
        </div>

        <div className="logo-item">
          <img src={kobelco} alt="Kobelco" />
        </div>

        <div className="logo-item">
          <img src={hitachi} alt="Hitachi" />
        </div>
      </div>

      {/* Contact Section */}
      <div className="spares-contact">
        <h2>Spare Parts Enquiry</h2>
        <p>Need genuine spare parts? Call us anytime</p>

        <a href="tel:04903500300" className="contact-call">
          📞 0490 350 0300
        </a>
      </div>
    </div>
  );
}