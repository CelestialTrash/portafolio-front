// src/components/CustomCursor.jsx
 import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = ({ isDarkMode, isInSkillsSection }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseDown = () => {
      setIsClicked(true);
    };

    const handleMouseUp = () => {
      setIsClicked(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div
      className={`cursor-circle ${isClicked ? 'clicked' : ''} ${isDarkMode ? 'demon-mode' : 'angel-mode'} ${isInSkillsSection ? 'in-skills' : ''}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      {isInSkillsSection ? (
        <span className="cursor-skill">⌖</span> 
      ) : (
        <span className="cursor-cross">♱</span> 
      )}
    </div>
  );
};

export default CustomCursor; 
