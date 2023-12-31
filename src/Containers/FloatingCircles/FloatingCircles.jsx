// FloatingCircles.jsx

import React from 'react';
import './FloatingCircles.css';

const FloatingCircles = () => {
  const numCircles = 20; // Number of circles you want

  const circles = Array.from({ length: numCircles }, (_, index) => (
    <div>
         <div className="floating-circles">
      <div className="circle"></div>
      <div className="circle"></div>
      {/* Add more circles as needed */}
    </div>
    </div>
  ));

  return <div className="floating-circles">{circles}</div>;
};

export default FloatingCircles;
