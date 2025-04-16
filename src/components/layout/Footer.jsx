import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">Eventify</h2>
          <p className="text-gray-400 mt-2">
            Crafting unforgettable moments with creativity & care.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-white">
                Gallery
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social + Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Connect With Us</h3>
          <div className="flex gap-4 mb-4">
            <a href="#" className="hover:text-green-400">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-green-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-green-400">
              <FaTwitter />
            </a>
          </div>
          <p className="text-gray-400 text-sm">Email: info@eventify.com</p>
          <p className="text-gray-400 text-sm">Phone: +91 98765 43210</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Eventify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
