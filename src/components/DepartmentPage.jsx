// import React, { useEffect, useState } from "react";
// import "../style/DepartmentPage.css";
// import welding from "../assets/welding.png";
// import manufacturing from "../assets/manufature.png";
// import  tyre from "../assets/tyrework.png";
// import paint from "../assets/paint.png";

// const departments = [
//   {
//     title: "Manufacturing Department",
//     description:
//       "Advanced manufacturing facility with precision machinery and skilled workforce ensuring top-quality production.",
//     image:
//       manufacturing,
//   },
//   {
//     title: "Spare Parts Department",
//     description:
//       "Well-stocked spare parts division ensuring fast availability and reliable support for all vehicle needs.",
//     image: paint,
      
//   },
//   {
//     title: "Welding & Fabrication",
//     description:
//       "High-precision welding and fabrication unit delivering durable and custom metal solutions.",
//     image:
//       welding,
//   },

//    {
//     title: "Tyre Work Department",
//     description:
//       "High-precision tyre work and tyre unit delivering durable and custom metal solutions.",
//     image:
//       tyre,
//   },
// ];

// export default function DepartmentPage() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % departments.length);
//     }, 4000); // auto slide every 4s

//     return () => clearInterval(interval);
//   }, []);

//   const department = departments[index];

//   return (
//     <div className="department-page">
//       <div
//         className="carousel"
//         style={{ backgroundImage: `url(${department.image})` }}
//       >
//         <div className="overlay">
//           <h1>{department.title}</h1>
//           <p>{department.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import "../style/DepartmentPage.css";

import welding from "../assets/welding.png";
import manufacturing from "../assets/manufature.png";
import tyre from "../assets/tyrework.png";
import paint from "../assets/paint.png";

const departments = [
  {
    title: "Manufacturing Department",
    description:
      "High-precision manufacturing facility equipped with modern machinery and skilled professionals.",
    image: manufacturing,
  },
  {
    title: "Spare Parts Department",
    description:
      "Complete range of genuine and OEM spare parts ensuring reliability and fast delivery.",
    image: paint,
  },
  {
    title: "Welding & Fabrication",
    description:
      "Expert welding and metal fabrication services for heavy machinery and structural works.",
    image: welding,
  },
  {
    title: "Tyre Work Department",
    description:
      "Professional tyre repair, replacement and alignment services for heavy equipment.",
    image: tyre,
  },
];

export default function DepartmentPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % departments.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dept-wrapper">
      <div
        className="dept-slider"
        style={{
          transform: `translateY(-${activeIndex * 100}vh)`,
          height: `${departments.length * 100}vh`,
        }}
      >
        {departments.map((dept, index) => (
          <section
            key={index}
            className="dept-slide"
            style={{ backgroundImage: `url(${dept.image})` }}
          >
            <div className="dept-overlay">
              <h1>{dept.title}</h1>
              <p>{dept.description}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
