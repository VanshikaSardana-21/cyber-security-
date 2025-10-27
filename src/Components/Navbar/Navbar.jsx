import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // lightweight icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-red-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
            alt="FastFood Logo"
            className="w-8 h-8"
          />
          <span className="text-2xl font-bold tracking-tight">
            Fast<span className="text-yellow-300">Eats</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <a href="#home" className="hover:text-yellow-300 transition-colors">
            Home
          </a>
          <a href="#menu" className="hover:text-yellow-300 transition-colors">
            Menu
          </a>
          <a href="#offers" className="hover:text-yellow-300 transition-colors">
            Offers
          </a>
          <a href="#contact" className="hover:text-yellow-300 transition-colors">
            Contact
          </a>
        </div>

        {/* Order Button */}
        <div className="hidden md:block">
          <button className="bg-yellow-400 text-red-800 px-5 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-all">
            Order Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-red-700 px-6 py-4 space-y-3 text-lg">
          <a href="#home" className="block hover:text-yellow-300" onClick={toggleMenu}>
            Home
          </a>
          <a href="#menu" className="block hover:text-yellow-300" onClick={toggleMenu}>
            Menu
          </a>
          <a href="#offers" className="block hover:text-yellow-300" onClick={toggleMenu}>
            Offers
          </a>
          <a href="#contact" className="block hover:text-yellow-300" onClick={toggleMenu}>
            Contact
          </a>
          <button className="w-full bg-yellow-400 text-red-800 px-5 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-all">
            Order Now
          </button>
        </div>
      )}
    </nav>
  );
}
