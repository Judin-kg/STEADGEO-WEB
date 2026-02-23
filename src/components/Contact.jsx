

// import React from "react";
// import "../style/Contact.css";
// import contactBg from "../assets/manufature.png";

// const Contact = () => {
//   return (
//     <section className="contact-section">
//       <div className="contact-wrapper">

//         {/* LEFT IMAGE */}
//         <div className="contact-image">
//           <img src={contactBg} alt="Engineering" />
//         </div>

//         {/* RIGHT FORM */}
//         <div className="contact-form-container">
//           <h2>Contact Us</h2>
//           <p>
//             Reach out to <strong>STEADGEO Engineering & Projects</strong> for
//             professional engineering solutions and project support.
//           </p>

//           <form className="contact-form">
//             <div className="input-group">
//               <input type="text" required />
//               <label>Name</label>
//             </div>

//             <div className="input-group">
//               <input type="tel" required />
//               <label>Phone</label>
//             </div>

//             <div className="input-group">
//               <textarea required></textarea>
//               <label>Message</label>
//             </div>

//             <button type="submit">Send Message</button>
//           </form>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Contact;


import React, { useState } from "react";
import "../style/Contact.css";
import contactBg from "../assets/manufature.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `New Contact Message from ${name}`;
    const body = `
Name: ${name}
Phone: ${phone}

Message:
${message}
    `;

    window.location.href = `mailto:info@steadgeo.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">

        {/* LEFT IMAGE */}
        <div className="contact-image">
          <img src={contactBg} alt="Engineering" />
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form-container">
          <h2>Contact Us</h2>
          <p>
            Reach out to <strong>STEADGEO Engineering & Projects</strong> for
            professional engineering solutions and project support.
          </p>

          <form onSubmit={handleSubmit} className="contact-form">

            <div className="input-group">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>Name</label>
            </div>

            <div className="input-group">
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <label>Phone</label>
            </div>

            <div className="input-group">
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <label>Message</label>
            </div>

            <button type="submit">Send Message</button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;