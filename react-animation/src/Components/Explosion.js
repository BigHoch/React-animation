import React from 'react';
import { animated, useSpring } from '@react-spring/web';

const Explosion = ({ position }) => {
  const explosionSpring = useSpring({
    from: { opacity: 1, scale: 0 },
    to: { opacity: 0, scale: 1 },
    reset: true,
  });

  return (
    <animated.div
      className="explosion"
      style={{
        ...position,
        ...explosionSpring,
      }}
    />
  );
};

export default Explosion;