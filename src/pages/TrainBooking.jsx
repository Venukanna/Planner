import React from 'react';
import './TrainBooking.css';

const TrainBooking = () => {
  return (
    <div className="train-booking-container">
      <h1 className="train-booking-title">Train Booking</h1>
      <p className="train-booking-description">
        Welcome to the Train Booking page. Book your tickets with ease!
      </p>
      <form className="train-booking-form">
        <label>
          Departure Station:
          <input type="text" placeholder="Enter departure station" />
        </label>
        <label>
          Destination Station:
          <input type="text" placeholder="Enter destination station" />
        </label>
        <label>
          Travel Date:
          <input type="date" />
        </label>
        <button type="submit" className="train-booking-button">Search Trains</button>
      </form>
    </div>
  );
};

export default TrainBooking;
