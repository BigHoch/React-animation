import React from 'react';
import './CannonBall.css';


const Barrelexplosion = ({ position }) => {
    const centerX = window.innerWidth / 2 - 50;
    const centerY = window.innerHeight / 2 - 50;

    return (
        <div
            className="barrel-explosion"
            style={{
                position: 'absolute',
                top: centerY,
                left: centerX,
                width: '100px', 
                height: '100px', 
                backgroundColor: '#ff4500', 
                borderRadius: '50%',
            }}
        />
    );
};

export default Barrelexplosion;