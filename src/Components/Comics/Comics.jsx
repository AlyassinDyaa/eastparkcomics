// Comics.jsx

import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import { useSpring, animated } from 'react-spring';
import './Comics.css';
import FloatingCircles from '../../Containers/FloatingCircles/FloatingCircles';

const Comics = () => {
  const [isHovered, setHovered] = useState(false);

  const itemAnimation = useSpring({
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    boxShadow: isHovered ? '0 4px 8px rgba(0, 0, 0, 0.2)' : '0 2px 5px rgba(0, 0, 0, 0.2)',
  });

  useEffect(() => {
    if (window.jQuery) {
      $('.custom-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsive: {
          0: { items: 1 },    // 1 item for small screens
          600: { items: 2 },  // 2 items for medium screens
          1000: { items: 3 }  // 3 items for large screens
        }
      });
    }
  }, []);

  return (
    <section className="game-section">
      <h1 className="line-title">Upcoming Project</h1>
      <div className="owl-carousel custom-carousel owl-theme">
        
        {/* Include the FloatingCircles component */}
        <FloatingCircles />
      
        <animated.div
          className="item"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={itemAnimation}
        >
          <img src="https://www.yudiz.com/codepen/expandable-animated-card-slider/dota-2.jpg" alt="Comic" className="item-image"/>
          <h3 className="item-title">Comic Title</h3>
          <p className="item-description">Description of the comic.</p>
        </animated.div>

        <animated.div
          className="item"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={itemAnimation}
        >
          <img src="https://www.yudiz.com/codepen/expandable-animated-card-slider/winter-3.jpg" alt="Comic" className="item-image"/>
          <h3 className="item-title">Comic Title</h3>
          <p className="item-description">Description of the comic.</p>
        </animated.div>

        <animated.div
          className="item"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={itemAnimation}
        >
          <img src="https://www.yudiz.com/codepen/expandable-animated-card-slider/fortnite.jpg" alt="Comic" className="item-image"/>
          <h3 className="item-title">Comic Title</h3>
          <p className="item-description">Description of the comic.</p>
        </animated.div>
      </div>
    </section>
  );
};

export default Comics;
