import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import './CannonBall.css'; // Import the correct CSS file here


const Cannonball = ({ fired }) => {
  const cannonballSpring = useSpring({
    from: { x: 0, y: 0 },
    to: { x: fired ? 500 : 0, y: fired ? 500 : 0 },
    config: { duration: 1000 }, // Adjust the duration as needed
  });

  return (
    <animated.div
      className={`cannonball ${fired ? 'fired' : ''}`}
      style={{
        transform: `translate(${cannonballSpring.x}px, ${cannonballSpring.y}px)`,
      }}
    />
  );
};

export default Cannonball;