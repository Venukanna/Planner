

// import React from "react";
// import "./LandingPage.css";

// const LandingPage = () => {
//   return (
//     <div className="landing-page">
//       {/* Full-screen hero image */}
//       <div className="hero">
//         <img
//           className="hero-image"
//           src="https://bitl.to/3WZw"
//           alt="Travel Adventure"
//         />
//         {/* <h1 className="hero-text">Welcome to Travel Trip Adv</h1> */}
        
//       </div>

//       {/* Small boxes with images */}
//       <div className="small-boxes">
//         <div className="box">
//           <img
//             src="https://bitl.to/3WZn"
//             alt="Hotels"
//             className="box-image"
//           />
//           <p>Hotels</p>
//           <p className="price">$150 / night</p>
//         </div>
//         <div className="box">
//           <img
//             src="https://bitl.to/3Xey"
//             alt="Apartments"
//             className="box-image"
//           />
//           <p>Apartments</p>
//           <p className="price">$160 / night</p>
//         </div>
//         <div className="box">
//           <img
//             src="https://bitl.to/3Xev"
//             alt="Resorts"
//             className="box-image"
//           />
//           <p>Resorts</p>
//           <p className="price">$250 / night</p>
//         </div>
//         <div className="box">
//           <img
//             src="https://bitl.to/3Xf3"
//             alt="Villas"
//             className="box-image"
//           />
//           <p>Villas</p>
//           <p className="price">$350 / night</p>
//         </div>
//         <div className="box">
//           <img
//             src="https://bitl.to/3Xf2"
//             alt="Hostels"
//             className="box-image"
//           />
//           <p>Hostels</p>
//           <p className="price">$120 / night</p>
//         </div>
//         <div className="box">
//           <img
//             src="https://cupliv.com/images/bangalore/settl-tellaro/1.jpg"
//             alt="Co-Live PGs"
//             className="box-image"
//           />
//           <p>Co-Live PGs</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;


// import React, { useState } from "react";
// import "./LandingPage.css";

// const LandingPage = () => {
//   const images = [
//     { src: "https://bitl.to/3WZn", alt: "Hotels", price: "$150 / night" },
//     { src: "https://bitl.to/3WZn", alt: "Hotels", price: "$150 / night" },
//     { src: "https://bitl.to/3Xey", alt: "Apartments", price: "$160 / night" },
//     { src: "https://bitl.to/3Xev", alt: "Resorts", price: "$250 / night" },
//     { src: "https://bitl.to/3Xf3", alt: "Villas", price: "$350 / night" },
//     { src: "https://bitl.to/3Xf2", alt: "Hostels", price: "$120 / night" },
//     { src: "https://cupliv.com/images/bangalore/settl-tellaro/1.jpg", alt: "Co-Live PGs", price: "" }
    
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 5 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 5 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="landing-page">
//       {/* Full-screen hero image */}
//       <div className="hero">
//         <img
//           className="hero-image"
//           src="https://bitl.to/3WZw"
//           alt="Travel Adventure"
//         />
//       </div>

//       {/* Small boxes with images */}
//       <div className="carousel">
//         <button className="arrow left" onClick={handlePrev}>
//           &#10094; {/* Left Arrow */}
//         </button>
//         <div className="small-boxes">
//           {images.slice(currentIndex, currentIndex + 5).map((image, index) => (
//             <div key={index} className="box">
//               <img
//                 src={image.src}
//                 alt={image.alt}
//                 className="box-image"
//               />
//               <p>{image.alt}</p>
//               {image.price && <p className="price">{image.price}</p>}
//             </div>
//           ))}
//         </div>
//         <button className="arrow right" onClick={handleNext}>
//           &#10095; {/* Right Arrow */}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;



import React, { useState } from "react";
import "./LandingPage.css";

const LandingPage = () => {
  const firstRowImages = [
    { src: "https://bitl.to/3WZn", alt: "Hotels", price: "$150 / night" },
    { src: "https://bitl.to/3Xey", alt: "Apartments", price: "$160 / night" },
    { src: "https://bitl.to/3Xev", alt: "Resorts", price: "$250 / night" },
    { src: "https://bitl.to/3Xf3", alt: "Villas", price: "$350 / night" },
    { src: "https://bitl.to/3Xf2", alt: "Hostels", price: "$120 / night" },
  ];

  const secondRowImages = [
    { src: "https://bitl.to/3Xey", alt: "Beaches", price: "$180 / night" },
    { src: "https://bitl.to/3Xev", alt: "Mountains", price: "$200 / night" },
    { src: "https://bitl.to/3Xf3", alt: "City Hotels", price: "$300 / night" },
    { src: "https://bitl.to/3Xf2", alt: "Jungle Lodges", price: "$400 / night" },
    { src: "https://cupliv.com/images/bangalore/settl-tellaro/1.jpg", alt: "Desert Camps", price: "$220 / night" },
  ];

  

  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [secondRowIndex, setSecondRowIndex] = useState(0);
  

  const handleFirstRowPrev = () => {
    setFirstRowIndex((prevIndex) =>
      prevIndex === 0 ? firstRowImages.length - 5 : prevIndex - 1
    );
  };

  const handleFirstRowNext = () => {
    setFirstRowIndex((prevIndex) =>
      prevIndex === firstRowImages.length - 5 ? 0 : prevIndex + 1
    );
  };

  const handleSecondRowPrev = () => {
    setSecondRowIndex((prevIndex) =>
      prevIndex === 0 ? secondRowImages.length - 5 : prevIndex - 1
    );
  };

  const handleSecondRowNext = () => {
    setSecondRowIndex((prevIndex) =>
      prevIndex === secondRowImages.length - 5 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="landing-page">
      {/* Full-screen hero image */}
      <div className="hero">
        <img
          className="hero-image"
          src="https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Travel Adventure"
        />
         <div className="hero-text">
        <h1>Explore The World</h1>
         <p className="subtitle">50% discount on your first adventure</p>
         <p className="description">
         "Discover unforgettable destinations and adventures – Your dream journey starts here!"
         </p>
         <div className="hero-buttons">
          <button className="btn primary">Get Started</button>
          <button className="btn secondary">Learn More</button>
         </div>
        </div>
        
      </div>

      {/* First row */}
      <h1 className="section-title">Top Picked Places</h1>
      <div className="carousel">
        <button className="arrow left" onClick={handleFirstRowPrev}>
          &#10094;
        </button>
        <div className="small-boxes">
          {firstRowImages.slice(firstRowIndex, firstRowIndex + 5).map((image, index) => (
            <div key={index} className="box">
              <img src={image.src} alt={image.alt} className="box-image" />
              <p>{image.alt}</p>
              {image.price && <p className="price">{image.price}</p>}
            </div>
          ))}
        </div>
        <button className="arrow right" onClick={handleFirstRowNext}>
          &#10095;
        </button>
      </div>

      {/* Second row */}
      <h2 className="section-title">gallery</h2>
      <div className="carousel">
        <button className="arrow left" onClick={handleSecondRowPrev}>
          &#10094;
        </button>
        <div className="small-boxes">
          {secondRowImages.slice(secondRowIndex, secondRowIndex + 5).map((image, index) => (
            <div key={index} className="box">
              <img src={image.src} alt={image.alt} className="box-image" />
              <p>{image.alt}</p>
              {image.price && <p className="price">{image.price}</p>}
            </div>
          ))}
        </div>
        <button className="arrow right" onClick={handleSecondRowNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default LandingPage;

