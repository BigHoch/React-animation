import React from 'react';
import './CannonBall.css';


const Barrelexplosion = ({ position }) => {
    const centerX = window.innerWidth / 2 - 50; // Assuming 100px width, adjust as needed
    const centerY = window.innerHeight / 2 - 50; // Assuming 100px height, adjust as needed

    return (
        <div
            className="barrel-explosion"
            style={{
                position: 'absolute',
                top: centerY,
                left: centerX,
                width: '100px', // Adjust as needed
                height: '100px', // Adjust as needed
                backgroundColor: '#ff4500', // Adjust the color
                borderRadius: '50%',
            }}
        />
    );
};

export default Barrelexplosion;