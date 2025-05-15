import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '/src/assets/logo.png';

const About = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/products');
  };
  const handleContactClick = () => {
    navigate('/contact');
  };
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section with Blue Background */}
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
        
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#1d4ed8" fillOpacity="1" d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,176C672,181,768,139,864,138.7C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>
      
      {/* About Us Hero Section */}
      <div className="bg-blue-700 relative">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 text-white">
          {/* Main Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">ABOUT FineAir</h2>
            <p className="text-xl md:text-2xl font-light tracking-wide max-w-3xl mx-auto">
              Quality Air Distribution Products
            </p>
          </div>
          
          {/* Company Introduction */}
          <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm">
            <p className="text-lg mb-4">
              FineAir is a leading manufacturer of high-quality Air Distribution Products for Central Air Conditioning systems. 
              With our expertise in engineering and commitment to excellence, we deliver reliable solutions that meet industry standards.
            </p>
            <p className="text-lg">
              Our team of professionals is dedicated to providing exceptional products and service to our customers, 
              ensuring optimal performance and satisfaction in every project.
            </p>
          </div>
        </div>
      </div>
      
      {/* Why Choose Us Section - Simplified */}
      <div className="bg-blue-50 py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-3">Why Choose FineAir?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="bg-blue-700 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <div className="text-white text-xl font-bold">✓</div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Quality Products</h3>
              <p className="text-slate-600">
                We are committed to manufacturing products of the highest quality, ensuring durability, 
                efficiency, and performance in all our offerings.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="bg-blue-700 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <div className="text-white text-xl font-bold">★</div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Expert Team</h3>
              <p className="text-slate-600">
                Our experienced professionals bring technical expertise and industry knowledge 
                to deliver the best solutions for your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Products Section - Simplified */}
      <div className="bg-gradient-to-b from-blue-700 to-blue-600 py-16 px-6 md:px-12 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Our Product Range</h2>
            <p className="max-w-3xl mx-auto">
              We offer a variety of air distribution products designed for optimal performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-20 transition text-center">
              <div className="mx-auto mb-4 bg-white bg-opacity-20 w-12 h-12 rounded-full flex items-center justify-center">
                <span className="text-2xl">◎</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Grilles & Diffusers</h3>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-20 transition text-center">
              <div className="mx-auto mb-4 bg-white bg-opacity-20 w-12 h-12 rounded-full flex items-center justify-center">
                <span className="text-2xl">⚙</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Control Dampers</h3>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-20 transition text-center">
              <div className="mx-auto mb-4 bg-white bg-opacity-20 w-12 h-12 rounded-full flex items-center justify-center">
                <span className="text-2xl">▣</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ventilation Units</h3>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a href="/products" className="inline-block px-6 py-3 bg-white text-blue-700 font-semibold rounded-md hover:bg-blue-50 transition">
              View All Products
            </a>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default About;