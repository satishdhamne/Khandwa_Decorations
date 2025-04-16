import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Toggle Button for Mobile */}
      <div className="md:hidden flex justify-end p-4">
        <button
          onClick={toggleMenu}
          className="text-white bg-purple-700 px-4 py-2 rounded"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "font-bold border-b-2 border-white"
              : "hover:text-pink-200"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? "font-bold border-b-2 border-white"
              : "hover:text-pink-200"
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            isActive
              ? "font-bold border-b-2 border-white"
              : "hover:text-pink-200"
          }
        >
          Gallery
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "font-bold border-b-2 border-white"
              : "hover:text-pink-200"
          }
        >
          Contact
        </NavLink>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-purple-700 shadow-lg">
          <nav className="flex flex-col">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-3 font-bold bg-purple-800"
                  : "px-4 py-3 hover:bg-purple-800"
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-3 font-bold bg-purple-800"
                  : "px-4 py-3 hover:bg-purple-800"
              }
              onClick={closeMenu}
            >
              Services
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-3 font-bold bg-purple-800"
                  : "px-4 py-3 hover:bg-purple-800"
              }
              onClick={closeMenu}
            >
              Gallery
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-3 font-bold bg-purple-800"
                  : "px-4 py-3 hover:bg-purple-800"
              }
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navigation;
