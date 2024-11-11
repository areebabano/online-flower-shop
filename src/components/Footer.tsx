"use client";
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { PiFlowerLotusLight } from 'react-icons/pi';

const Footer = () => {
  return (
    <footer className="bg-pink-700 text-white py-8">
      <div className="container max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        
        {/* Brand and Social Media Section */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="inline-flex text-2xl font-bold text-white mb-2"><PiFlowerLotusLight className='text-white' size={40} /> 𝕱𝖑𝖔𝖗𝖆𝖑 𝕰𝖑𝖊𝖌𝖆𝖓𝖈𝖊</h2>
          <p className="text-white mb-6 leading-relaxed">
            Where elegance meets nature. Bringing stunning floral arrangements to your doorstep with love and care.
          </p>
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-pink-300 transition duration-300">
              <FaInstagram size={24} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-pink-300 transition duration-300">
              <FaFacebookF size={24}  />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-pink-300 transition duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="mailto:info@floralelegance.com" className="text-gray-200 hover:text-pink-300 transition duration-300">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-xl text-white font-serif mb-4">Quick Links</h4>
          <ul className="space-y-2 text-white">
            <li><a href="#home" className="hover:font-bold transition duration-300">Home</a></li>
            <li><a href="#about" className="hover:font-bold transition duration-300">About Us</a></li>
            <li><a href="#shop" className="hover:font-bold transition duration-300">Shop</a></li>
            <li><a href="#contact" className="hover:font-bold transition duration-300">Contact</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h4 className="font-semibold text-xl text-white font-serif mb-4">Customer Support</h4>
          <ul className="space-y-2 text-white">
            <li><a href="#delivery" className="hover:font-bold transition duration-300">Delivery & Payment</a></li>
            <li><a href="#help" className="hover:font-bold transition duration-300">Help & Support</a></li>
            <li><a href="#services" className="hover:font-bold transition duration-300">24/7 Services</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="text-white">
          <h4 className="font-semibold text-xl text-white font-serif mb-4">Contact Us</h4>
          <p className="text-lg font-semibold">+123 456 789</p>
          <p className="mt-2">info@floralelegance.com</p>
          <p className="mt-2">789 Spring Lane, Roseville, CA 98765</p>
          <p className="mt-2">United States</p>
          <p className="mt-2">Open: 10:00 - 19:00</p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 text-center text-white border-t border-pink-500 pt-6">
        <p className="text-sm mb-2">
          &copy; {new Date().getFullYear()} <b>Floral Elegance</b>. All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-6">
          <a href="/privacy-policy" className="text-sm text-pink-200 hover:text-white transition duration-300">Privacy Policy</a>
          <a href="/terms-of-service" className="text-sm text-pink-200 hover:text-white transition duration-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

