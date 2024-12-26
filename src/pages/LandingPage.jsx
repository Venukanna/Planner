// import React from 'react';
// import './LandingPage.css'; // Import page-specific CSS
// import VisitingPlaces from '../components/VisitingPlaces';
// import TopDestinations from '../components/TopDestinations';

// const LandingPage = () => {
//   return (
//     <div className="landing-page">
//       <h1>Welcome to Travel Trip Adv</h1>
//       <VisitingPlaces />
//       <TopDestinations />

//       <img 
//         src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcT9NtT3-XFSznmETzmMQA1nn5ADOawf0VD63yNsUgbrLVQeX4nwzyOKW0sXBVU6_EDRwLTHWNKd_1E4Os8Hb0kveREzhkOnY96ob_sRJw" // Replace with your image URL
//         alt="Landing Page"
//         className="landing-page-image"
//       />
//     </div>
    

//   );
// };

// export default LandingPage;

// import React from 'react';
// import './LandingPage.css';

// const LandingPage = () => {
//   return (
//     <div className="landing-page-container">
//       <h1>Welcome to Our Travel Platform</h1>
//       <p>Your one-stop destination for all your travel needs.</p>
//       <button className="cta-button">Explore Now</button>
//     </div>
  
//   );
// };

// export default LandingPage;

import React from 'react';
import './LandingPage.css'; // Import page-specific CSS

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to Travel Trip Adv</h1>

      {/* Property Types Section */}
      <section className="property-types">
        <h2>Browse by property type in Hyderabad</h2>
        <div className="property-types-container">
          <div className="property-type">
            <img 
              src="https://images.pexels.com/photos/96444/pexels-photo-96444.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace with actual image URL
              alt="Hotels"
            />
            <h3>Hotels</h3>
            <p>27 Dec-29 Dec, 2 adults</p>
            <p>516 available</p>
          </div>
          <div className="property-type">
            <img 
              src="https://via.placeholder.com/300" // Replace with actual image URL
              alt="Apartments"
            />
            <h3>Apartments</h3>
            <p>27 Dec-29 Dec, 2 adults</p>
            <p>62 available</p>
          </div>
          <div className="property-type">
            <img 
              src="https://via.placeholder.com/300" 
              alt="Resorts"
            />
            <h3>Resorts</h3>
            <p>27 Dec-29 Dec, 2 adults</p>
            <p>5 available</p>
          </div>
          <div className="property-type">
            <img 
              src="https://via.placeholder.com/300" 
              alt="Villas"
            />
            <h3>Villas</h3>
            <p>27 Dec-29 Dec, 2 adults</p>
            <p>12 available</p>
          </div>
          <div className="property-type">
            <img 
              src="https://media.istockphoto.com/id/1807514677/photo/talking-to-my-new-roommate.jpg?s=2048x2048&w=is&k=20&c=jvPLicZVavBulMVQ8p91BhjKnhSf86OT4W_WKPcmYC0=" 
              alt="Villas"
            />
            <h3>co-live pgs</h3>
            <p>27 Dec-29 Dec, 2 adults</p>
            <p>12 available</p>
          </div>
          <div className="property-type">
            <img 
              src="https://media.istockphoto.com/id/182498079/photo/youth-hostel-dorm-room.webp?a=1&b=1&s=612x612&w=0&k=20&c=aYJY3SpwM_vjUg5fmtsh5O0niMbTEeEgrJYOVE50edM=" 
              alt="Villas"
            />
            <h3>Hostels</h3>
            <p>27 Dec-29 Dec, 2 adults</p>
            <p>12 available</p>
          </div>
          
        </div>
      </section>

      {/* Trending Destinations Section */}
      <section className="trending-destinations">
        <h2>Trending destinations</h2>
        <p>Travellers searching for India also booked these</p>
        <div className="destinations-container">
          <div className="destination">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpxMti9jW6gS4o_TSuq6gRFxQ02FOTHf2bAQ&s" 
            />
            <h3>Hyderabad</h3>
          </div>
          <div className="property-type">
            <img 
              src="https://via.placeholder.com/300" 
              alt="Villas"
            />
            <h3>Villas</h3>
            <p>27 Dec-29 Dec, 2 adults</p>
            <p>12 available</p>
          </div>
          <div className="destination">
            <img 
              src="https://via.placeholder.com/300" 
              alt="Mumbai"
            />
            <h3>Mumbai</h3>
          </div>
          <div className="destination">
            <img 
              src="https://via.placeholder.com/300" 
              alt="Bangalore"
            />
            <h3>Bangalore</h3>
          </div>
          <div className="destination">
            <img 
              src="https://via.placeholder.com/300" 
              alt="New Delhi"
            />
            <h3>New Delhi</h3>
          </div>
          <div className="destination">
            <img 
              src="https://via.placeholder.com/300" // Replace with actual image URL
              alt="Chennai"
            />
            <h3>Chennai</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

