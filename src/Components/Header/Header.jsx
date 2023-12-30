import React from 'react';
import './Header.css'; // Assuming your CSS is in this file
import logo from '../../assets/images/infinity_logo.png'


const Header = () => {
    return (
      <div class="hero-section">
          <div class="floating-circle circle1"></div>
          <div class="floating-circle circle2"></div>
          <div class="floating-circle circle3"></div>
          <div class="hero-content">
              <img src={logo} alt="Company Logo" class="hero-logo"/>
              <h1>EAST PARK COMICS</h1>
              <h2>Tales to Inspire</h2>
              <p>Your informative paragraph that complements the heading and subheading.</p>
              <div class="hero-cta">
                  <button>Learn More</button>
                  <button>Contact Us</button>
              </div>
          </div>
      </div>

  
    );
}

export default Header;
