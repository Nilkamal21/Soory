import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { PageWrapper } from '../App';

function createSparkle() {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.left = `${Math.random() * 100}%`;
  sparkle.style.top = `${Math.random() * 100}%`;
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 1500);
}

export default function FirstPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      createSparkle();
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <PageWrapper>
      <div className="text-center space-y-6 relative">
        <Sparkles className="w-16 h-16 mx-auto text-purple-500 animate-pulse floating" />
        <h1 className="text-3xl font-bold text-gray-800">
          I'm really sorry Momo! 🐰
        </h1>
        <p className="text-xl text-gray-600">
          I didn't mean to make you sad.
        </p>
        <button
          onClick={() => navigate('/second')}
          className="bounce-hover bg-purple-500 text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:bg-purple-600 transition-all"
        >
          See More 🌟
        </button>
      </div>
    </PageWrapper>
  );
}