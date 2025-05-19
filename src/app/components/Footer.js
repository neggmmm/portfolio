import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-dark text-beige py-6 text-center text-lg">
      &copy; {new Date().getFullYear()} Negm. All rights reserved.
    </footer>
  );
} 