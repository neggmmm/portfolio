import React from 'react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-taupe text-foreground shadow-md rounded-b-[var(--radius)]">
      <div className="max-w-3xl mx-auto flex justify-between items-center px-4 py-3">
        <span className="font-bold text-lg">NEGM</span>
        <div className="space-x-6 hidden sm:flex">
          <a href="#projects" className="hover:underline transition">Projects</a>
          <a href="#contact" className="hover:underline transition">Contact</a>
        </div>
        {/* Mobile menu button (optional for further enhancement) */}
      </div>
    </nav>
  );
};

export default Navbar; 