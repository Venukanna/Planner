import React from "react";
import "./Services.css"; // You can create a specific CSS file for Services

const Services = () => {
  return (
    <div className="services-page">
      <header className="services-header">
        <h1>Our Services</h1>
      </header>
      <div className="services-list">
        <div className="service">
          <h3>Hotel Booking</h3>
          <p>We offer the best hotel booking experience with top-rated hotels worldwide.</p>
        </div>
        <div className="service">
          <h3>Train Booking</h3>
          <p>Book your train tickets easily with real-time schedules and availability.</p>
        </div>
        <div className="service">
          <h3>Flight Booking</h3>
          <p>Get the best deals on flights to destinations around the globe.</p>
        </div>
        <div className="service">
          <h3>Tour Packages</h3>
          <p>Explore our exclusive tour packages for a memorable travel experience.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
