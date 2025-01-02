// import React from 'react';
// import './Header.css'; // Import the component-specific CSS
// import SearchBar from './components/SearchBar'; // Correctly import the SearchBar component

// const Header = () => {
//   return (
//     <header className="header">
//       <nav className="nav-bar">
//         <ul className="nav-links">
//           <li>Home</li>
//           <li>Top Destinations</li>
//           <li>About Us</li>
//           <li>Contact</li>
//         </ul>
//         <SearchBar /> {/* Add the SearchBar component here */}
//       </nav>
//     </header>
//   );
// };

// export default Header;


// import React from 'react';
// import './Header.css'; // Import the component-specific CSS
// import SearchBar from './SearchBar'; // Ensure correct path for SearchBar

// const Header = () => {
//   return (
//     <header className="header">
//       <nav className="nav-bar">
//         <div className="nav-logo">Travel Trip Adv</div>
//         <ul className="nav-links">
//           <li>Home</li>
//           <li>Top Destinations</li>
//           <li>About Us</li>
//           <li>Contact</li>
//         </ul>
//         <div className="nav-actions">
//           <SearchBar /> {/* Add the SearchBar component */}
//           <button className="nav-button">Hotel Booking</button>
//           <button className="nav-button">Bus Booking</button>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;


// Header.jsx
// import React from 'react';
// import './Header.css'; // Import the component-specific CSS
// import SearchBar from './SearchBar'; // Ensure correct path for SearchBar

// const Header = ({ setCurrentPage }) => {
//   return (
//     <header className="header">
//       <nav className="nav-bar">
//         <div className="nav-logo">Travel Trip Adv</div>
//         {/* <ul className="nav-links">
//           <li onClick={() => setCurrentPage('landing')}>Home</li>
//           <li onClick={() => setCurrentPage('topDestinations')}>Top Destinations</li>
//           <li onClick={() => setCurrentPage('about')}>About Us</li>
//           <li onClick={() => setCurrentPage('contact')}>Contact</li>
//         </ul> */}
//         <div className="nav-actions">
//           <SearchBar /> {/* Add the SearchBar component */}
//           <button
//             className="nav-button"
//             onClick={() => setCurrentPage('hotelBooking')}
//           >
//             Hotel Booking
//           </button>
//           <button
//             className="nav-button"
//             onClick={() => setCurrentPage('busBooking')}
//           >
//             Bus Booking
//           </button>
//           <button
//             className="nav-button"
//             onClick={() => setCurrentPage('TrainBooking')}
//           >
//            TrainBooking
//           </button>
//           <button
//             className="nav-button"
//             onClick={() => setCurrentPage('Home')}
//           >
//             Home
//           </button>
//           <button
//             className="nav-button"
//             onClick={() => setCurrentPage('services')}
//           >
//             Services
//           </button>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React from 'react';
import './Header.css';
import SearchBar from './SearchBar';

const Header = ({ setCurrentPage }) => {
  return (
    <header className="header">
      <nav className="nav-bar">
        <div className="nav-logo">Travel Trip Adv</div>
        <div className="nav-actions">
          <SearchBar />
          <button className="nav-button" onClick={() => setCurrentPage('landing')}>
            Home
          </button>
          <button className="nav-button" onClick={() => setCurrentPage('hotelBooking')}>
            Hotel Booking
          </button>
          <button className="nav-button" onClick={() => setCurrentPage('busBooking')}>
            Bus Booking
          </button>
          <button className="nav-button" onClick={() => setCurrentPage('TrainBooking')}>
            Train Booking
          </button>
          <button className="nav-button" onClick={() => setCurrentPage('Contact')}>
            Contact
          </button>
          <button className="nav-button" onClick={() => setCurrentPage('Services')}>
           services
          </button>
          <button
            className="nav-button"
            onClick={() => setCurrentPage('logout')}
          >
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
