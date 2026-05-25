import React, { useEffect, useState } from 'react';
import './Cursor.css';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({
        x: e.clientX + window.scrollX,
        y: e.clientY + window.scrollY
      });
    };

    const handleScroll = () => {
      const { clientX, clientY } = document.documentElement;
      setPosition({
        x: clientX + window.scrollX,
        y: clientY + window.scrollY,
      });
    };

    document.addEventListener('mousemove', updateCursor);
    // window.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="cursor-aureola"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className="cursor-center"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
};

export default Cursor;
