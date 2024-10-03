import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = ({ isDarkMode }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [delayedPosition, setDelayedPosition] = useState({ x: 0, y: 0 }); // Posición retrasada

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Use effect to create the delay
  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setDelayedPosition({ x: position.x, y: position.y });
    }, 0.8); // Delay reducido a 20ms para mayor velocidad

    return () => clearTimeout(delayTimer);
  }, [position]);

  return (
    <div
      className={`cursor-circle ${isDarkMode ? 'demon-mode' : 'angel-mode'}`}
      style={{ left: `${delayedPosition.x}px`, top: `${delayedPosition.y}px` }}
    >
      <span className="cursor-cross">♱</span>
    </div>
  );
};

export default CustomCursor;




