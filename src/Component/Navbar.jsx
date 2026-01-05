import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
 const count=useSelector((state)=>state.counter.value)

  return (
    <>
      {/* Custom Animation */}
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-down {
          animation: slideDown 0.25s ease-out;
        }
      `}</style>

      {/* TOP STRIP */}
      <header className="h-10 w-full bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#0EA5E9]"></header>

      {/* NAVBAR */}
      <nav className="bg-[#EFF6FF] text-[#0F172A] shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-6 py-3">

          {/* Logo */}
          <div className="flex items-center">
            <span className="text-3xl font-extrabold tracking-wide text-[#2563EB]">
              Fill<span className="text-[#0EA5E9]">It</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex flex-1 justify-center space-x-10 text-lg font-semibold">
            <li>
              <NavLink to="/" className="hover:text-[#2563EB] transition text-[#0F172A]">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-[#2563EB] transition text-[#0F172A]">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-[#2563EB] transition text-[#0F172A]">
                Contact
              </NavLink>
            </li>

            <NavLink to="/adminDashboard">
              <li className="hover:text-[#2563EB] transition">Admin Dashboard</li>
            </NavLink>

            <NavLink to="/subadminDashboard">
              <li className="hover:text-[#2563EB] transition">Sub Admin</li>
            </NavLink>

            <NavLink to="/employee">
              <li className="hover:text-[#2563EB] transition">Employee</li>
            </NavLink>

            <NavLink to="/userDashboard">
              <li className="hover:text-[#2563EB] transition">User Dashboard</li>
            </NavLink>
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink
              to="/login"
              className="border-2 border-[#0EA5E9] text-[#2563EB] px-5 py-1.5 rounded-full font-semibold hover:bg-[#0EA5E9] hover:text-white transition"
            >
              Login {count}
            </NavLink>

            <NavLink
              to="/signup"
              className="bg-[#2563EB] text-white px-6 py-1.5 rounded-full font-semibold hover:bg-[#3B82F6] transition"
            >
              Signup
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] rounded"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-7 h-7 text-[#2563EB]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#EFF6FF] shadow-md px-6 py-4 space-y-4 animate-slide-down">

            <NavLink
              to="/"
              className="block text-[#0F172A] font-semibold text-lg hover:text-[#2563EB]"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className="block text-[#0F172A] font-semibold text-lg hover:text-[#2563EB]"
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className="block text-[#0F172A] font-semibold text-lg hover:text-[#2563EB]"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>

            <div className="flex gap-3 pt-3">
              <NavLink
                to="/login"
                className="flex-1 text-center border-2 border-[#0EA5E9] text-[#2563EB] py-2 rounded-full font-semibold hover:bg-[#0EA5E9] hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                Login
              </NavLink>

              <NavLink
                to="/signup"
                className="flex-1 text-center bg-[#2563EB] text-white py-2 rounded-full font-semibold hover:bg-[#3B82F6] transition"
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
