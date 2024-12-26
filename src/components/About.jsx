import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to our travel platform! We are dedicated to helping you explore the world 
        with ease and comfort. Whether you're looking for luxurious hotel stays, 
        convenient bus bookings, or top destination recommendations, we have it all.
      </p>
      <p>
        Our mission is to make your travel experience unforgettable. With years of expertise, 
        we ensure high-quality services and customer satisfaction. Let us guide you to 
        your next adventure!
      </p>
      <img
        src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcT9NtT3-XFSznmETzmMQA1nn5ADOawf0VD63yNsUgbrLVQeX4nwzyOKW0sXBVU6_EDRwLTHWNKd_1E4Os8Hb0kveREzhkOnY96ob_sRJw"
        alt="About Us"
        className="about-image"
      />
    </div>
  );
};

export default About;
