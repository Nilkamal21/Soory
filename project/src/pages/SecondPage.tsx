import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageWrapper } from '../App';

function createButterfly() {
  const butterfly = document.createElement('div');
  butterfly.className = 'butterfly';
  butterfly.textContent = '🦋';
  butterfly.style.fontSize = '24px';
  butterfly.style.left = '-50px';
  butterfly.style.top = `${Math.random() * 100}%`;
  document.body.appendChild(butterfly);
  setTimeout(() => butterfly.remove(), 10000);
}

export default function SecondPage() {
  const navigate = useNavigate();
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      createButterfly();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleNoHover = () => {
    const newX = Math.random() * 200 - 100;
    const newY = Math.random() * 200 - 100;
    setNoButtonPosition({ x: newX, y: newY });
  };

  const handleNoClick = () => {
    alert("Oops! You can't choose No 🙈");
  };

  return (
    <PageWrapper>
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 floating">
          Do you really forgive me, Momu? 🐼
        </h1>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate('/third')}
            className="bounce-hover bg-green-500 text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:bg-green-600 transition-all"
          >
            Yes! 🌟
          </button>
          <button
            onClick={handleNoClick}
            onMouseEnter={handleNoHover}
            style={{
              transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
            }}
            className="run-away bg-red-500 text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:bg-red-600 transition-all"
          >
            No 🙈
          </button>
        </div>
      </div>
    </PageWrapper>
  );
}