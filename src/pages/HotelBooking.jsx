
// import React, { useState } from 'react';
// import './HotelBooking.css'; // Import page-specific CSS

// const HotelBooking = () => {
//   const [location, setLocation] = useState('');
//   const [checkInDate, setCheckInDate] = useState('');
//   const [checkOutDate, setCheckOutDate] = useState('');
//   const [rooms, setRooms] = useState(1);
//   const [guests, setGuests] = useState(2);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Search initiated with:', {
//       location,
//       checkInDate,
//       checkOutDate,
//       rooms,
//       guests,
//     });
//   };

//   return (
//     <div className="hotel-booking-container">
//       <header className="hotel-booking-header">
//         <h1>Book Your Hotel</h1>
//         <p>Find the best hotels at the most affordable prices.</p>
//       </header>

//       <form className="hotel-booking-form" onSubmit={handleSubmit}>
//         <div className="form-row">
//           <div className="form-group">
//             <label>City, Property Name, or Location</label>
//             <input
//               type="text"
//               placeholder="Enter location"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Check-In</label>
//             <input
//               type="date"
//               value={checkInDate}
//               onChange={(e) => setCheckInDate(e.target.value)}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Check-Out</label>
//             <input
//               type="date"
//               value={checkOutDate}
//               onChange={(e) => setCheckOutDate(e.target.value)}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Rooms</label>
//             <input
//               type="number"
//               min="1"
//               value={rooms}
//               onChange={(e) => setRooms(e.target.value)}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Guests</label>
//             <input
//               type="number"
//               min="1"
//               value={guests}
//               onChange={(e) => setGuests(e.target.value)}
//               required
//             />
//           </div>
//         </div>

//         <div className="form-row">
//           <button type="submit" className="search-button">Search</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default HotelBooking;


import React, { useState } from 'react';
import './HotelBooking.css'; // Import page-specific CSS

const HotelBooking = () => {
  const [location, setLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search initiated with:', {
      location,
      checkInDate,
      checkOutDate,
      rooms,
      guests,
    });
  };

  return (
    <div className="hotel-booking-container">

       <video className="background-video" autoPlay loop muted>
        <source src="https://youtu.be/4J-mhsLwUDQ?si=1pO786qsWtM9q9Za" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Header Section */}
      <header className="hotel-booking-header">
        <div className="header-text">
          <h1>Discover Your Next Adventure</h1>
          <p>Exclusive deals on hotels, resorts, and more. Start your journey now!</p>
        </div>
        <div className="header-image">
          <img
            src="https://bit.ly/3Xf3"
            alt="Travel Adventure"
          />
        </div>
      </header>

      {/* Search Form */}
      <form className="hotel-booking-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>City, Property Name, or Location</label>
            <input
              type="text"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Check-In</label>
            <input
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Check-Out</label>
            <input
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Rooms</label>
            <input
              type="number"
              min="1"
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Guests</label>
            <input
              type="number"
              min="1"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <button type="submit" className="search-button">Search Hotels</button>
        </div>
      </form>

      {/* Featured Section */}
      <section className="featured-section">
        <h2>Top Picks for Your Stay</h2>
        <div className="featured-grid">
          <div className="featured-card">
            <img src="https://bit.ly/3WZn" alt="Luxury Hotel" />
            <h3>Luxury Hotel</h3>
            <p>Starting from $300/night</p>
          </div>
          <div className="featured-card">
            <img src="https://bit.ly/3Xey" alt="Beach Resort" />
            <h3>Beach Resort</h3>
            <p>Starting from $400/night</p>
          </div>
          <div className="featured-card">
            <img src="https://bit.ly/3Xf2" alt="Mountain Cabin" />
            <h3>Mountain Cabin</h3>
            <p>Starting from $250/night</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HotelBooking;
