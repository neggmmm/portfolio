import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full p-4 bg-taupe text-white">
      <div className="container mx-auto flex justify-between items-center">
        <span className="font-bold text-lg">My Portfolio</span>
        {/* Add navigation links here */}
      </div>
    </nav>
  );
};

export default Navbar; 