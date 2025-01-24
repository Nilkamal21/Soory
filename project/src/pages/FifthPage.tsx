import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';
import { PageWrapper } from '../App';

export default function FifthPage() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <div className="text-center space-y-6">
        <Star className="w-16 h-16 mx-auto text-yellow-500 animate-bounce" />
        <h1 className="text-3xl font-bold text-gray-800">
          I promise I'll never let you down again! 🌸
        </h1>
        <button
          onClick={() => navigate('/')}
          className="bounce-hover bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:bg-blue-600 transition-all"
        >
          Restart 💫
        </button>
      </div>
    </PageWrapper>
  );
}