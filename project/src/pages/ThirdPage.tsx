import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';
import { PageWrapper } from '../App';

function createFlower() {
  const flower = document.createElement('div');
  flower.className = 'flower';
  flower.textContent = ['🌸', '🌺', '🌼', '🌻', '🌹', '🌷'][Math.floor(Math.random() * 6)];
  const sizes = ['flower-small', 'flower-medium', 'flower-large'];
  flower.classList.add(sizes[Math.floor(Math.random() * sizes.length)]);
  flower.style.left = `${Math.random() * 100}%`;
  flower.style.bottom = '0';
  document.body.appendChild(flower);
  setTimeout(() => flower.remove(), 4000);
}

function createButterfly() {
  const butterfly = document.createElement('div');
  butterfly.className = `butterfly ${Math.random() > 0.5 ? 'butterfly-reverse' : ''}`;
  butterfly.textContent = '🦋';
  butterfly.style.fontSize = '24px';
  butterfly.style.top = `${Math.random() * 100}%`;
  document.body.appendChild(butterfly);
  setTimeout(() => butterfly.remove(), 15000);
}

export default function ThirdPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const flowerInterval = setInterval(() => {
      createFlower();
    }, 300);

    const butterflyInterval = setInterval(() => {
      createButterfly();
    }, 2000);

    return () => {
      clearInterval(flowerInterval);
      clearInterval(butterflyInterval);
    };
  }, []);

  return (
    <PageWrapper>
      <div className="text-center space-y-6">
        <Star className="w-16 h-16 mx-auto text-yellow-500 floating" />
        <h1 className="text-3xl font-bold text-gray-800">
          Thank you! You're the best Momo! 😁
        </h1>
        <button
          onClick={() => navigate('/fourth')}
          className="bounce-hover bg-yellow-500 text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:bg-yellow-600 transition-all"
        >
          One more thing! 🎀
        </button>
      </div>
    </PageWrapper>
  );
}