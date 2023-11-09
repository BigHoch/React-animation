import React, { useState } from 'react';
import Cannon from './Components/Cannon';
import Cannonball from './Components/CannonBall';
import './App.css'; 


function App() {
  const [fired, setFired] = useState(false);

  const handleFire = () => {
    setFired(true);
  };

  return (
    <div className="App">
      <div className="bg"></div>
      <button className="fire-button" onClick={handleFire}>Corndog</button>
      <Cannon />
      <Cannonball fired={fired} />
    </div>
  );
}

export default App;