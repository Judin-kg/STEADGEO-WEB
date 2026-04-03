// import React, { useEffect, useState } from "react";
// import "../style/Home.css";
// import slide1 from "../assets/slide1.png";
// import slide2 from "../assets/slide2.png";
// import slide3 from "../assets/slide3.png";

// const slides = [slide1, slide2, slide3];

// const Home = () => {
//   const [current, setCurrent] = useState(0);

//   // Typing animation states
//   const text = "STEADGEO Engineering & Projects";
//   const [displayText, setDisplayText] = useState("");
//   const [index, setIndex] = useState(0);

//   // Carousel auto slide
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   // Typing effect
//   useEffect(() => {
//     if (index < text.length) {
//       const timeout = setTimeout(() => {
//         setDisplayText((prev) => prev + text[index]);
//         setIndex(index + 1);
//       }, 90); // typing speed

//       return () => clearTimeout(timeout);
//     }
//   }, [index, text]);

//   return (
//     <section className="home">
//       <div className="carousel">
//         {slides.map((img, i) => (
//           <div
//             key={i}
//             className={`slide ${i === current ? "active" : ""}`}
//             style={{ backgroundImage: `url(${img})` }}
//           />
//         ))}
//       </div>

//       {/* Overlay */}
//       <div className="home-overlay">
//         <h1 className="typing">
//           {displayText}
//           <span className="cursor">|</span>
//         </h1>

//         <p>
//           Multi Branded Truck Services • Heavy Machinery Repairs • Fabrication
//         </p>

//         <button>Explore Services</button>
//       </div>
//     </section>
//   );
// };

// export default Home;




import React, { useEffect, useState } from "react";
import "../style/Home.css";
import slide1 from "../assets/home2.png";
import slide2 from "../assets/home1.png";
import slide3 from "../assets/slide1.png";


const slides = [slide1, slide2, slide3];

const Home = () => {
  const [current, setCurrent] = useState(0);

  const text = "STEADGEO Engineering & Projects";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  // Carousel auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Typing effect
  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 70);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <section className="home" id="home">
      <div className="carousel">
        {slides.map((img, i) => (
          <div
            key={i}
            className={`slide ${i === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* Overlay Content */}
      <div className="home-overlay fade-up">
        <h1 className="typing">
          {displayText}
          <span className="cursor"></span>
        </h1>

        <p>
          Multi Branded Truck Services • Heavy Machinery Repairs • Fabrication
        </p>

        <button><a href="#services" >Explore Services</a></button>
        
      </div>
    </section>
    
  );
};

export default Home;
