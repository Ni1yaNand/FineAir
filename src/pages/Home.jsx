import React from 'react';
import { Wind, Thermometer, Shield, Building2, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '/src/assets/logo.png';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/products');
  };
  const handleContactClick = () => {
    navigate('/contact');
  };
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Company Name and Logo in Center */}
      <div className="relative overflow-hidden">
        {/* Top Light Blue Section */}
        <div className="bg-sky-200 pt-8 pb-16 px-6 md:px-12">
          {/* Logo and Tagline */}
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center justify-center">
              {/* Company Logo - Centered */}
              <div className="flex items-center flex-col text-center mb-8">
                <div className="mb-4">
                  <img
                    src={logo}
                    alt="FineAir Logo"
                    className="h-20 w-auto max-w-xs object-contain mx-auto"
                  />
                  <p className="text-slate-600 text-lg md:text-base tracking-wider">FRESH AIR EXPERT</p>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex space-x-4 md:space-x-6 mt-4">
                <button className="px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition" onClick={handleClick}>Products</button>
                <button className="px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition" onClick={handleContactClick}>Contact Us</button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave Divider - Moved Lower */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#1d4ed8" fillOpacity="1" d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,176C672,181,768,139,864,138.7C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>
      
      {/* Main Content - Blue Section with City Silhouette */}
      <div className="bg-blue-700 relative">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 text-white">
          {/* Main Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">AIR DISTRIBUTION PRODUCTS</h2>
            <h3 className="text-xl md:text-2xl font-light tracking-wide">MANUFACTURERS & SUPPLIERS</h3>
          </div>
          
          {/* Product Categories Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-20 transition">
              <div className="bg-blue-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Wind size={28} />
              </div>
              <h4 className="text-xl font-semibold mb-2">Grilles & Diffusers</h4>
              <p className="text-blue-100">High-performance air distribution solutions for optimal comfort and air quality.</p>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-20 transition">
              <div className="bg-blue-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Shield size={28} />
              </div>
              <h4 className="text-xl font-semibold mb-2">Dampers & Controls</h4>
              <p className="text-blue-100">Precision engineered flow control systems for efficient HVAC performance.</p>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-20 transition">
              <div className="bg-blue-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Building2 size={28} />
              </div>
              <h4 className="text-xl font-semibold mb-2">Ventilation Systems</h4>
              <p className="text-blue-100">Complete ventilation solutions for commercial and residential buildings.</p>
            </div>
          </div>
          
          {/* City Silhouette */}
          <div className="absolute bottom-0 left-0 right-0 h-40 opacity-30">
            <div className="relative h-full">
              {/* Buildings */}
              <div className="absolute bottom-0 left-3/4 w-20 h-32 bg-white opacity-20"></div>
              <div className="absolute bottom-0 left-2/3 w-16 h-24 bg-white opacity-20"></div>
              <div className="absolute bottom-0 left-1/2 w-24 h-36 bg-white opacity-20"></div>
              <div className="absolute bottom-0 left-1/3 w-14 h-28 bg-white opacity-20"></div>
              <div className="absolute bottom-0 left-1/4 w-18 h-20 bg-white opacity-20"></div>
              <div className="absolute bottom-0 left-1/6 w-12 h-24 bg-white opacity-20"></div>
              <div className="absolute bottom-0 left-10 w-16 h-28 bg-white opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Green Section with Hills */}
      <div className="bg-gradient-to-b from-green-600 to-green-500 py-12 px-6 md:px-12 relative">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white bg-opacity-90 p-6 md:p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Why Choose FineAir?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center">
                    <Award size={24} className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Premium Quality</h3>
                  <p className="text-gray-600">Our products are manufactured with precision using high-grade materials for durability and performance.</p>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center">
                    <Thermometer size={24} className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Energy Efficient</h3>
                  <p className="text-gray-600">Our systems are designed to optimize airflow while minimizing energy consumption.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button className="px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition" onClick={handleClick}>
                Explore Our Products
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative flowers/grass */}
        <div className="absolute bottom-0 left-0 w-full h-16 overflow-hidden">
          <div className="absolute bottom-0 left-1/6 w-4 h-4 bg-white rounded-full"></div>
          <div className="absolute bottom-2 left-1/3 w-4 h-4 bg-white rounded-full"></div>
          <div className="absolute bottom-1 left-1/2 w-4 h-4 bg-white rounded-full"></div>
          <div className="absolute bottom-3 left-2/3 w-4 h-4 bg-white rounded-full"></div>
          <div className="absolute bottom-0 left-5/6 w-4 h-4 bg-white rounded-full"></div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;