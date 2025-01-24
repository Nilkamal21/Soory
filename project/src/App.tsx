import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import FourthPage from './pages/FourthPage';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #ffedeb 0%, #ffd6e0 50%, #ffedf9 100%)'
      }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-3xl shadow-xl max-w-md w-full mx-4">
        {children}
      </div>
    </motion.div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/third" element={<ThirdPage />} />
        <Route path="/fourth" element={<FourthPage />} />
      </Routes>
    </Router>
  );
}