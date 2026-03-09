import React, { useState } from "react";
import "../style/Frames.css";

const frames = [
  { id: 1, img: "/frames/A.JPG", title: "Gold Frame" },
  { id: 2, img: "/frames/B.JPG", title: "Silver Frame" },
  { id: 3, img: "/frames/C.JPG", title: "Diamond Frame" },
  { id: 4, img: "/frames/D.JPG", title: "Classic Frame" },
  { id: 5, img: "/frames/E.JPG", title: "Royal Frame" },
  { id: 6, img: "/frames/F.JPG", title: "Premium Frame" },
  { id: 7, img: "/frames/G.JPG", title: "Luxury Frame" },
  { id: 8, img: "/frames/H.JPG", title: "Vintage Frame" },
  { id: 9, img: "/frames/I.JPG", title: "Modern Frame" },
  { id: 10, img: "/frames/J.JPG", title: "Wood Frame" }
];

export default function Frames() {

  const [visible, setVisible] = useState(8);

  const showMoreFrames = () => {
    setVisible((prev) => prev + 4);
  };

  return (
    <div className="frames-page">
      <h1 className="frames-title">Photo Frames Collection</h1>

      <div className="frames-grid">
        {frames.slice(0, visible).map((frame) => (
          <div className="frame-card" key={frame.id}>
            <div className="frame-image-wrapper">
              <img src={frame.img} alt={frame.title} />
            </div>
           </div>
        ))}
      </div>

      {/* SEE MORE BUTTON */}
      {visible < frames.length && (
        <div className="see-more-container">
          <button className="see-more-btn" onClick={showMoreFrames}>
            See More Frames
          </button>
        </div>
      )}

    </div>
  );
}