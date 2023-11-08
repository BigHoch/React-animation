import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

function App() {
  const [isMoved, setIsMoved] = useState(false);

  const moveAnimation = useSpring({
    transform: isMoved ? 'translateX(100px)' : 'translateX(0)',
  });

  const handleButtonClick = () => {
    setIsMoved(!isMoved);
  };

  return (
    <div className="App">
      <h1>React Spring Animation</h1>
      <animated.div
        style={{
          width: '100px',
          height: '100px',
          background: 'lightblue',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          ...moveAnimation,
        }}
      >
        <button onClick={handleButtonClick}>Move Me</button>
      </animated.div>
    </div>
  );
}

export default App;