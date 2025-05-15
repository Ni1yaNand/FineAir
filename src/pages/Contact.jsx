import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageSquare, User, AtSign, Send, Check } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <div className="bg-blue-700 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="max-w-2xl mx-auto text-blue-100">
            We'd love to hear from you. Get in touch with our team for any inquiries about our air distribution products and services.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex justify-center">
          <div className="w-full max-w-xl">
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-slate-800 border-b pb-3">Get In Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-700 mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800 mb-1">Our Location</h3>
                    <p className="text-gray-600">
                      154/293, Village Pooth Khurd,<br />
                      Delhi - 110039, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-700 mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800 mb-1">Phone Number</h3>
                    <p className="text-gray-600">+91 98296 09001</p>
                    <p className="text-gray-500 text-sm mt-1">Monday to Saturday, 9am to 6pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-700 mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800 mb-1">Email Address</h3>
                    <p className="text-gray-600">ecoairsystemsindia@gmail.com</p>
                    <p className="text-gray-500 text-sm mt-1">We'll respond as soon as possible</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t">
                <h3 className="font-medium text-slate-800 mb-4">Connect With Us</h3>
                <div className="flex space-x-3">
                  <a href="#" className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-600 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-600 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="#" className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-600 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-600 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700 text-white py-12 px-6 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h2>
          <p className="mb-6">Our customer support team is available to help you with technical inquiries or product information.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="tel:+919829609001" className="flex items-center bg-white text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition">
              <Phone size={18} className="mr-2" />
              Call Us Now
            </a>
            <a href="mailto:ecoairsystemsindia@gmail.com" className="flex items-center bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition">
              <Mail size={18} className="mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
