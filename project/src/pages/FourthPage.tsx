import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { PageWrapper } from '../App';

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.textContent = ['💝', '💖', '💗', '💓', '💕'][Math.floor(Math.random() * 5)];
  heart.style.fontSize = '24px';
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.bottom = '0';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}

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

export default function FourthPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const heartInterval = setInterval(() => {
      createHeart();
    }, 500);

    const flowerInterval = setInterval(() => {
      createFlower();
    }, 400);

    return () => {
      clearInterval(heartInterval);
      clearInterval(flowerInterval);
    };
  }, []);

  return (
    <PageWrapper>
      <div className="text-center space-y-6">
        <Heart className="w-16 h-16 mx-auto text-pink-500 floating" />
        <h1 className="text-3xl font-bold text-gray-800">
          You're looking so cute today! 🥰
        </h1>
        <p className="text-xl text-gray-600">
          Just like these pretty flowers! 🌸✨
        </p>
        <button
          onClick={() => navigate('/')}
          className="bounce-hover bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:bg-pink-600 transition-all"
        >
          Start Over 🎀
        </button>
      </div>
    </PageWrapper>
  );
}