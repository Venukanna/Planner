// import React from 'react';
// import './HotelBooking.css'; // Import page-specific CSS

// const HotelBooking = () => {
//   return (
//     <div className="hotel-booking">
//       <h2>Book Your Hotel</h2>
//       <form>
//         <input type="text" placeholder="Enter location" />
//         <button type="submit">Search</button>
//       </form>
//     </div>
//   );
// };

// export default HotelBooking;

// import React from 'react';
// import './HotelBooking.css';

// const HotelBooking = () => {
//   return (
//     <div className="hotel-booking-container">
//       <h1>Hotel Booking</h1>
//       <p>Find the best hotels at the most affordable prices.</p>
//     </div>
//   );
// };

// export default HotelBooking;

// import React, { useState } from 'react';
// import './HotelBooking.css'; // Import page-specific CSS

// const HotelBooking = () => {
//   const [location, setLocation] = useState('');
//   const [joiningDate, setJoiningDate] = useState('');
//   const [closingDate, setClosingDate] = useState('');
//   const [hotelType, setHotelType] = useState('normal'); // default to normal hotel

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here, you can process the data (e.g., send to an API or update the state)
//     console.log('Form submitted with:', { location, joiningDate, closingDate, hotelType });
//   };

//   return (
//     <div className="hotel-booking">
//       <h2>Book Your Hotel</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <input 
//             type="text" 
//             placeholder="Enter location" 
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Check-in</label>
//           <input 
//             type="date" 
//             value={joiningDate}
//             onChange={(e) => setJoiningDate(e.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Check-out</label>
//           <input 
//             type="date" 
//             value={closingDate}
//             onChange={(e) => setClosingDate(e.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Hotel Type</label>
//           <div>
//             <label>
//               <input 
//                 type="radio" 
//                 name="hotel-type" 
//                 value="5star" 
//                 checked={hotelType === '5star'}
//                 onChange={() => setHotelType('5star')}
//               />
//               5 Star Hotel
//             </label>
//             <label>
//               <input 
//                 type="radio" 
//                 name="hotel-type" 
//                 value="normal" 
//                 checked={hotelType === 'normal'}
//                 onChange={() => setHotelType('normal')}
//               />
//               Normal Hotel
//             </label>
//           </div>
//         </div>

//         <div className="form-group">
//           <button type="submit">Search</button>
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
      <header className="hotel-booking-header">
        <h1>Book Your Hotel</h1>
        <p>Find the best hotels at the most affordable prices.</p>
      </header>

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
          <button type="submit" className="search-button">Search</button>
        </div>
      </form>
    </div>
  );
};

export default HotelBooking;

