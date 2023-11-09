import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import './Cannon.css'; //


const Cannon = () => {
    const cannonSpring = useSpring({ from: { angle: 90 }, to: { angle: 45 } });

    return (
        <div className="cannon-container">
            <animated.div
                className="cannon"
                style={{
                    transform: cannonSpring.angle.interpolate((angle) => `rotate(${angle}deg)`),
                }}
            />
            <div className="wheel"></div>
        </div>
    );
};

export default Cannon;