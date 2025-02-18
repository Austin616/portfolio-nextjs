"use client"

import React from 'react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 text-white text-center py-6 mt-10 border-t-2 border-white">
      <div className="max-w-lg mx-auto">
        <p className="text-lg mb-4">Austin Tran</p>
        <button 
          onClick={scrollToTop} 
          className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 transform hover:scale-105"
        >
          Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
