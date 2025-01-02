

// import React, { useState } from 'react';

// // Import components
// import Header from './components/Header';
// import Footer from './components/Footer';
// import LandingPage from './pages/LandingPage';
// import HotelBooking from './pages/HotelBooking';
// import BusBooking from './pages/BusBooking';
// import TrainBooking from './pages/TrainBooking'; // Import TrainBooking
// import Contact from './components/Contact';

// const MasterController = () => {
//   const [currentPage, setCurrentPage] = useState('landing');

//   const renderPage = () => {
//     switch (currentPage) {
//       case 'landing':
//         return <LandingPage />;
//       case 'hotelBooking':
//         return <HotelBooking />;
//       case 'busBooking':
//         return <BusBooking />;
//       case 'TrainBooking': // Correct case for TrainBooking
//         return <TrainBooking />;
//       case 'contact':
//         return <Contact />;
//       default:
//         return <LandingPage />;
//     }
//   };

//   return (
//     <div>
//       <Header setCurrentPage={setCurrentPage} />
//       <main>{renderPage()}</main>
//       <Footer />
//     </div>
//   );
// };

// export default MasterController;


// import React, { useState } from 'react';

// // Import components and pages
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Login from './components/Login';
// import Logout from './components/Logout';


// import LandingPage from './pages/LandingPage';
// import TrainBooking from './pages/TrainBooking';
// import BusBooking from './pages/BusBooking';
// import HotelBooking from './pages/HotelBooking';
// import Contact from './components/Contact'; // Import the Contact component

// const MasterController = () => {
//   const [currentPage, setCurrentPage] = useState('landing');
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

//   // Function to handle navigation
//   const renderPage = () => {
//     if (!isLoggedIn && currentPage !== 'login') {
//       return <Login onLogin={setIsLoggedIn} />;
//     }

//     switch (currentPage) {
//       case 'landing':
//         return <LandingPage />;
//       case 'hotelBooking':
//         return <HotelBooking />;
//       case 'busBooking':
//         return <BusBooking />;
//       case 'TrainBooking':
//         return <TrainBooking />;
//       case 'Contact': // Add the Contact case
//         return <Contact />; // Render the Contact component
//       case 'logout':
//         return <Logout onLogout={setIsLoggedIn} />;
//       default:
//         return <LandingPage />;
//     }
//   };

//   return (
//     <div>
//       <Header setCurrentPage={setCurrentPage} />
//       <main>{renderPage()}</main>
//       <Footer />
//     </div>
//   );
// };

// export default MasterController;

import React, { useState } from 'react';

// Import components and pages
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Logout from './components/Logout';


import LandingPage from './pages/LandingPage';
import TrainBooking from './pages/TrainBooking';
import BusBooking from './pages/BusBooking';
import HotelBooking from './pages/HotelBooking';
import Contact from './components/Contact'; // Import the Contact component

const MasterController = () => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  // Function to handle navigation
  const renderPage = () => {
    if (!isLoggedIn && currentPage !== 'login') {
      return <Login onLogin={setIsLoggedIn} />;
    }

    switch (currentPage) {
      case 'landing':
        return <LandingPage />;
      case 'hotelBooking':
        return <HotelBooking />;
      case 'busBooking':
        return <BusBooking />;
      case 'TrainBooking':
        return <TrainBooking />;
      case 'Contact': // Add the Contact case
        return <Contact />; // Render the Contact component
      case 'logout':
        return <Logout onLogout={setIsLoggedIn} />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <div>
      <Header setCurrentPage={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
};

export default MasterController;
