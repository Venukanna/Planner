import React, { useState } from 'react';

// Import all components and pages
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import VisitingPlaces from './components/VisitingPlaces';
import TopDestinations from './components/TopDestinations';
import About from './components/About';
import Contact from './components/Contact';
import LandingPage from './pages/LandingPage';
import HotelBooking from './pages/HotelBooking';
import BusBooking from './pages/BusBooking';

const MasterController = () => {
  // State to manage which page is currently active
  const [currentPage, setCurrentPage] = useState('landing');

  // Function to handle navigation
  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage />;
      case 'hotelBooking':
        return <HotelBooking />;
      case 'busBooking':
        return <BusBooking />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <div>
      {/* Header Component */}
      <Header />

      {/* SearchBar */}
      <SearchBar />

      {/* Navigation Buttons (Example: Simulating Page Changes) */}
      <nav>
        <button onClick={() => setCurrentPage('landing')}>Home</button>
        <button onClick={() => setCurrentPage('hotelBooking')}>Hotel Booking</button>
        <button onClick={() => setCurrentPage('busBooking')}>Bus Booking</button>
        <button onClick={() => setCurrentPage('about')}>About Us</button>
        <button onClick={() => setCurrentPage('contact')}>Contact</button>
      </nav>

      {/* Render the selected page */}
      <main>{renderPage()}</main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default MasterController;
// import React, { useState } from 'react';

// // Import all components and pages
// import Header from './components/Header';
// import Footer from './components/Footer';
// import SearchBar from './components/SearchBar';
// import VisitingPlaces from './components/VisitingPlaces';
// import TopDestinations from './components/TopDestinations';
// import About from './components/About';
// import Contact from './components/Contact';
// import LandingPage from './pages/LandingPage';
// import HotelBooking from './pages/HotelBooking';
// import BusBooking from './pages/BusBooking';

// const MasterController = () => {
//   // State to manage which page is currently active
//   const [currentPage, setCurrentPage] = useState('landing');

//   // Function to handle navigation
//   const renderPage = () => {
//     switch (currentPage) {
//       case 'landing':
//         return <LandingPage />;
//       case 'hotelBooking':
//         return <HotelBooking />;
//       case 'busBooking':
//         return <BusBooking />;
//       case 'about':
//         return <About />;
//       case 'contact':
//         return <Contact />;
//       default:
//         return <LandingPage />;
//     }
//   };

//   return (
//     <div className="master-container">
//       {/* Header Component */}
//       <Header />

//       {/* SearchBar */}
//       <SearchBar />

//       {/* Navigation Buttons (Example: Simulating Page Changes) */}
//       <div className="navigation-container">
//         <button onClick={() => setCurrentPage('landing')}>Home</button>
//         <button onClick={() => setCurrentPage('hotelBooking')}>Hotel Booking</button>
//         <button onClick={() => setCurrentPage('busBooking')}>Bus Booking</button>
//         <button onClick={() => setCurrentPage('about')}>About Us</button>
//         <button onClick={() => setCurrentPage('contact')}>Contact</button>
//       </div>

//       {/* Render the selected page */}
//       <main>{renderPage()}</main>

//       {/* Footer Component */}
//       <Footer />
//     </div>
//   );
// };

// export default MasterController;
