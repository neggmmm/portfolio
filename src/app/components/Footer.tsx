import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full p-4 bg-taupe text-white text-center">
      <span>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</span>
    </footer>
  );
};

export default Footer; 