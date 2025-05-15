import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight 
} from 'lucide-react';
import logo from '/src/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-slate-800 to-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className='mt-1'>
            {/* <div className="flex items-center flex-col text-center mb-8">
                            <div className="mb-4">
                              <img
                                src={logo}
                                alt="FineAir Logo"
                                className="h-20 w-auto max-w-xs object-contain mx-auto"
                              />
                              <p className="text-slate-600 text-lg md:text-base tracking-wider">FRESH AIR EXPERT</p>
                            </div>
                          </div> */}
            <p className="text-gray-300 mb-4">
              Leading manufacturer and supplier of high-quality air distribution products. Committed to innovation and sustainability in HVAC solutions.
            </p>
            <div className="flex space-x-3">
              <a href="https://facebook.com" className="bg-blue-700 p-2 rounded-full hover:bg-blue-600 transition">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com" className="bg-blue-700 p-2 rounded-full hover:bg-blue-600 transition">
                <Twitter size={18} />
              </a>
              <a href="https://linkedin.com" className="bg-blue-700 p-2 rounded-full hover:bg-blue-600 transition">
                <Linkedin size={18} />
              </a>
              <a href="https://instagram.com" className="bg-blue-700 p-2 rounded-full hover:bg-blue-600 transition">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-600 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white flex items-center">
                  <ArrowRight size={14} className="mr-2 text-blue-400" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white flex items-center">
                  <ArrowRight size={14} className="mr-2 text-blue-400" />
                  Products
                </Link>
              </li>

            </ul>
          </div>
          
          {/* Product Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-600 pb-2">Products</h3>
            <ul className="space-y-2">
              <li>
  <div className="text-gray-300 flex items-center cursor-default">
    <ArrowRight size={14} className="mr-2 text-blue-400" />
    Linear Grills
  </div>
</li>
<li>
  <div className="text-gray-300 flex items-center cursor-default">
    <ArrowRight size={14} className="mr-2 text-blue-400" />
    Curved & Square Grills
  </div>
</li>
<li>
  <div className="text-gray-300 flex items-center cursor-default">
    <ArrowRight size={14} className="mr-2 text-blue-400" />
    Slots
  </div>
</li>
<li>
  <div className="text-gray-300 flex items-center cursor-default">
    <ArrowRight size={14} className="mr-2 text-blue-400" />
    Architechtural Louvers
  </div>
</li>
<li>
  <div className="text-gray-300 flex items-center cursor-default">
    <ArrowRight size={14} className="mr-2 text-blue-400" />
    Fire & Smoke Control
  </div>
</li>
<li>
  <div className="text-gray-300 flex items-center cursor-default">
    <ArrowRight size={14} className="mr-2 text-blue-400" />
    Air Treatment and Ventilation
  </div>
</li>
<li>
  <div className="text-gray-300 flex items-center cursor-default">
    <ArrowRight size={14} className="mr-2 text-blue-400" />
    Diffuser
  </div>
</li>
<li>
  <div className="text-gray-300 flex items-center cursor-default">
    <ArrowRight size={14} className="mr-2 text-blue-400" />
    Control Dampers
  </div>
</li>

            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-600 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin size={18} className="mr-3 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  154/293<br />
                  Village Poonth Khurd<br />
                  Delhi - 110039
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">+91 98296 09001</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-blue-400 flex-shrink-0" />
                <a href="mailto:ecoairsystemsindia@gmail.com" className="text-gray-300 hover:text-white">ecoairsystemsindia@gmail.com</a>
              </li>
            </ul>
            
            <div className="mt-6">
              <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-slate-900 py-4">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-2 md:mb-0">
            &copy; {currentYear} FineAir. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm">
            <p className="text-gray-400 text-sm mb-2 md:mb-0">Privacy Policy</p>
            <p className="text-gray-400 text-sm mb-2 md:mb-0">Terms of Service</p>
            <p className="text-gray-400 text-sm mb-2 md:mb-0">Sitemap</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;