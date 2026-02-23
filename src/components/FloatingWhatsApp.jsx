// import React from "react";
// import "../style/FloatingWhatsApp.css";

// const FloatingWhatsApp = () => {

//   const phoneNumber = "918086953311";
//   const message = "Hello STEADGEO Engineering, I need support.";

//   const openWhatsApp = () => {
//     const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//     window.open(url, "_blank");
//   };

//   return (
//     <div className="floating-whatsapp" onClick={openWhatsApp}>
//       <i className="fab fa-whatsapp"></i>
//     </div>
//   );
// };

// export default FloatingWhatsApp;

import React from "react";
import "../style/FloatingWhatsApp.css";

const WhatsAppFloat = () => {
  const phoneNumber = "918113002266"; // +91 included
  const message = "Hello, I would like to know more about your services.";

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="whatsapp-float" onClick={openWhatsApp}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="30"
        height="30"
        fill="white"
      >
        <path d="M16 .4C7.3.4.4 7.3.4 16c0 2.8.7 5.5 2.1 7.9L0 32l8.4-2.4c2.3 1.3 4.9 2 7.6 2 8.7 0 15.6-6.9 15.6-15.6S24.7.4 16 .4zm0 28.5c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-5 1.4 1.3-4.9-.3-.5C3.6 20.7 3 18.4 3 16 3 8.8 8.8 3 16 3s13 5.8 13 13-5.8 12.9-13 12.9zm7.1-9.7c-.4-.2-2.3-1.1-2.6-1.2-.4-.1-.6-.2-.9.2-.3.4-1 1.2-1.2 1.5-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.6.2-.2.3-.4.4-.6.1-.2 0-.5 0-.6 0-.2-.9-2.2-1.2-3-.3-.7-.6-.6-.9-.6h-.8c-.3 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.6 0 1.5 1.1 3 1.3 3.2.2.2 2.2 3.4 5.4 4.8.8.3 1.4.5 1.9.6.8.2 1.5.2 2 .1.6-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.8-.1-.2-.3-.3-.7-.5z" />
      </svg>
    </div>
  );
};

export default WhatsAppFloat;