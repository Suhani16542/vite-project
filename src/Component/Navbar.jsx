import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Custom Animation Inside Component */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-down {
          animation: slideDown 0.25s ease-out;
        }
      `}</style>

      {/* Header Bar */}
      <header className="h-10 w-full bg-gradient-to-br from-purple-600 via-pink-500 to-purple-600 text-white"></header>

      {/* NAVBAR */}
      <nav className="bg-white text-purple-300 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-6 py-3">

          {/* Logo */}
          <div className="flex items-center">
            <span className="text-3xl font-extrabold tracking-wide text-purple-700">
              Fill<span className="text-yellow-600">It</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex flex-1 justify-center space-x-10 text-lg font-semibold">
            <li>
              <NavLink to="/" className="hover:text-yellow-300 transition text-purple-700">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-yellow-300 transition text-purple-700">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-yellow-300 transition text-purple-700">
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink
              to="/login"
              className="border-2 border-yellow-300 text-purple-700 px-5 py-1.5 rounded-full font-semibold hover:bg-yellow-300 hover:text-purple-700 transition"
            >
              Login
            </NavLink>

            <NavLink
              to="/signup"
              className="bg-yellow-300 border-2 border-yellow-300 text-purple-700 px-6 py-1.5 rounded-full font-semibold hover:bg-yellow-400 transition"
            >
              Signup
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-7 h-7 text-purple-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 animate-slide-down">

            <NavLink
              to="/"
              className="block text-purple-700 font-semibold text-lg hover:text-yellow-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className="block text-purple-700 font-semibold text-lg hover:text-yellow-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className="block text-purple-700 font-semibold text-lg hover:text-yellow-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>

            <div className="flex gap-3 pt-3">
              <NavLink
                to="/login"
                className="flex-1 text-center border-2 border-yellow-300 text-purple-700 py-2 rounded-full font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Login
              </NavLink>

              <NavLink
                to="/signup"
                className="flex-1 text-center bg-yellow-300 border-2 border-yellow-300 text-purple-700 py-2 rounded-full font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Signup
              </NavLink>
            </div>
          </div>
        )}
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
