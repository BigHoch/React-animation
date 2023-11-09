import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './CannonBall.css'; // Import the correct CSS file here
import Explosion from './Explosion'; // Import the original Explosion component
import BarrelExplosion from './BarrelExplosion';

const Cannonball = ({ fired }) => {
    const [exploded, setExploded] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [animationComplete, setAnimationComplete] = useState(false);

    const cannonballSpring = useSpring({
        from: { x: 0, y: 0 },
        to: { x: fired ? 500 : 0, y: fired ? 500 : 0 },
        onRest: () => {
            if (fired && !exploded) {
                setExploded(true);
                const { x, y } = position;
                setPosition({ top: y, left: x });
                setAnimationComplete(true);
            }
        },
        config: { duration: 1000 }, // Adjust the duration as needed
    });

    return (
        <>
            <animated.div
                className={`cannonball ${fired ? 'fired' : ''} ${animationComplete ? 'hidden' : ''}`}
                style={{
                    transform: `translate(${cannonballSpring.x}px, ${cannonballSpring.y}px)`,
                }}
            />
            {exploded && <Explosion position={position} />}
            {exploded && <BarrelExplosion className="barrel-explosion" position={position} />}
        </>
    );
};

export default Cannonball;