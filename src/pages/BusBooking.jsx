// import React from 'react';
// import './BusBooking.css'; // Import page-specific CSS

// const BusBooking = () => {
//   return (
//     <div className="bus-booking">
//       <h2>Book Your Bus</h2>
//       <form>
//         <input type="text" placeholder="Enter destination" />
//         <button type="submit">Search</button>
//       </form>
//     </div>
//   );
// };

// export default BusBooking;
// import React, { useState } from 'react';
// import './BusBooking.css'; // Import page-specific CSS

// const BusBooking = () => {
//   const [departureLocation, setDepartureLocation] = useState('');
//   const [destinationLocation, setDestinationLocation] = useState('');
//   const [travelDate, setTravelDate] = useState('');
//   const [busType, setBusType] = useState('ac'); // default to AC bus
//   const [tripDetails, setTripDetails] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Process the form data here, such as sending to an API
//     console.log('Form submitted with:', {
//       departureLocation,
//       destinationLocation,
//       travelDate,
//       busType,
//       tripDetails,
//     });
//   };

//   return (
//     <div className="bus-booking">
//       <h2>Book Your Bus Trip</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <input 
//             type="text" 
//             placeholder="Departure Location"
//             value={departureLocation}
//             onChange={(e) => setDepartureLocation(e.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <input 
//             type="text" 
//             placeholder="Destination Location"
//             value={destinationLocation}
//             onChange={(e) => setDestinationLocation(e.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Travel Date</label>
//           <input 
//             type="date" 
//             value={travelDate}
//             onChange={(e) => setTravelDate(e.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Bus Type</label>
//           <div>
//             <label>
//               <input 
//                 type="radio" 
//                 name="bus-type" 
//                 value="ac" 
//                 checked={busType === 'ac'}
//                 onChange={() => setBusType('ac')}
//               />
//               AC Bus
//             </label>
//             <label>
//               <input 
//                 type="radio" 
//                 name="bus-type" 
//                 value="non-ac" 
//                 checked={busType === 'non-ac'}
//                 onChange={() => setBusType('non-ac')}
//               />
//               Non-AC Bus
//             </label>
//           </div>
//         </div>

//         <div className="form-group">
//           <label>Trip Details</label>
//           <textarea 
//             placeholder="Enter additional trip details or requests"
//             value={tripDetails}
//             onChange={(e) => setTripDetails(e.target.value)}
//             rows="4"
//           />
//         </div>

//         <div className="form-group">
//           <button type="submit">Search</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default BusBooking;

import React, { useState } from 'react';
import './BusBooking.css'; // Import page-specific CSS

const BusBooking = () => {
  const [departureLocation, setDepartureLocation] = useState('');
  const [destinationLocation, setDestinationLocation] = useState('');
  const [travelDate, setTravelDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search initiated with:', {
      departureLocation,
      destinationLocation,
      travelDate,
    });
  };

  return (
    <div className="bus-booking">
      <header className="bus-booking-header">
        <h1>Book Bus Tickets</h1>
      </header>
      <form className="bus-booking-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>From</label>
            <input
              type="text"
              placeholder="Enter departure city"
              value={departureLocation}
              onChange={(e) => setDepartureLocation(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>To</label>
            <input
              type="text"
              placeholder="Enter destination city"
              value={destinationLocation}
              onChange={(e) => setDestinationLocation(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Departure Date</label>
            <input
              type="date"
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
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

export default BusBooking;
