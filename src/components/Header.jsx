import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '/src/assets/logo.png'; // adjust path if needed

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-blue-700 text-white py-2 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          {/* Optional contact info can go here */}
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Updated Logo */}
            {/* <Link to="/" className="flex items-center">
              <img src={logo} alt="FineAir Logo" className="h-10 w-auto" />
            </Link> */}
            <Link to="/" className="flex items-center">
              <img
              src={logo}
              alt="FineAir Logo"
              className="h-12 w-auto max-w-[160px] object-contain"
              />
            </Link>


            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-slate-700 font-medium hover:text-blue-600 transition">
                Home
              </Link>
              <Link to="/about" className="text-slate-700 font-medium hover:text-blue-600 transition">
                About
              </Link>
              <Link to="/products" className="text-slate-700 font-medium hover:text-blue-600 transition">
                Products
              </Link>
              <Link to="/contact" className="text-slate-700 font-medium hover:text-blue-600 transition">
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="md:hidden text-slate-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2">
              <Link to="/" className="block py-2 text-slate-700 hover:text-blue-600" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/about" className="block py-2 text-slate-700 hover:text-blue-600" onClick={toggleMenu}>
                About
              </Link>
              <Link to="/products" className="block py-2 text-slate-700 hover:text-blue-600" onClick={toggleMenu}>
                Products
              </Link>
              <Link to="/contact" className="block py-2 text-slate-700 hover:text-blue-600" onClick={toggleMenu}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;



