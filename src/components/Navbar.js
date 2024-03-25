// Navbar.js
import React from 'react';

function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4">
      <h1 className="text-2xl font-bold text-gray-900">My Portfolio</h1>
      <div>
        <a href="#about" className="px-2 hover:text-blue-600">About</a>
        <a href="#projects" className="px-2 hover:text-blue-600">Projects</a>
        <a href="#skills" className="px-2 hover:text-blue-600">Skills</a>
        <a href="#testimonials" className="px-2 hover:text-blue-600">Testimonials</a>
        <a href="#contact" className="px-2 hover:text-blue-600">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
