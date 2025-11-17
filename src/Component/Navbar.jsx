
import React from "react";
import { NavLink, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <header className="h-10 w-full bg-gradient-to-br from-purple-600 via-pink-500 to-purple-600 text-white "></header>
    <nav className="bg-white text-purple-300 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        
        {/* 🔹 Logo Section */}
        <div className="flex items-center">
          <span className="text-3xl font-extrabold tracking-wide text-purple-700">
            Fill<span className="text-yellow-600">It</span>
          </span>
        </div>

        {/* 🔹 Centered Navigation Links */}
        <ul className="hidden md:flex flex-1 justify-center space-x-10 text-lg font-semibold">
          <li>
            <a href="/" className="hover:text-yellow-300 transition text-purple-700">Home</a>
          </li>
          <li>
            <a href="/about" className="hover:text-yellow-300 transition text-purple-700">About</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-yellow-300 transition text-purple-700">Contact</a>
          </li>
        </ul>

        {/* 🔹 Buttons Section */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Login Button */}
          <a
            href="/login"
            className="border-2 border-yellow-300 text-purple-700 px-5 py-1.5 rounded-full font-semibold hover:bg-white hover:text-purple-700 transition"
          >
            Login
          </a>

          {/* Signup Button */}
          <a
            href="/signup"
            className="bg-white border-2 border-yellow-300 text-purple-700 px-6 py-1.5 rounded-full font-semibold hover:bg-opacity-90 transition"
          >
            Signup
          </a>
        </div>

        {/* 🔹 Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded"
            onClick={() => alert('Mobile menu coming soon!')}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
    <Outlet/>
    </>
  );
};

export default Navbar;