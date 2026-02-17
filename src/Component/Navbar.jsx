import React, { useState, useEffect, useRef } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { LayoutDashboard } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dropdownRef = useRef(null);

  // 🔹 Close dropdown after 2 seconds if open
  useEffect(() => {
    let timer;
    if (dashboardOpen) {
      timer = setTimeout(() => {
        setDashboardOpen(false);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [dashboardOpen]);

  // 🔹 Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDashboardOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* TOP STRIP */}
      <header className="h-10 w-full bg-gradient-to-r from-black via-slate-900 to-emerald-900"></header>

      {/* NAVBAR */}
      <nav className="bg-slate-950 text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-6 py-3">

          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <span className="text-3xl font-extrabold tracking-wide text-emerald-400">
              Fill<span className="text-white">It</span>
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex flex-1 justify-center space-x-10 text-lg font-semibold items-center">

            <NavLink to="/" className="hover:text-emerald-400 transition text-slate-200">
              Home
            </NavLink>

            <NavLink to="/about" className="hover:text-emerald-400 transition text-slate-200">
              About
            </NavLink>

            <NavLink to="/contact" className="hover:text-emerald-400 transition text-slate-200">
              Contact
            </NavLink>

            {/* Dashboard Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDashboardOpen(!dashboardOpen)}
                className="flex items-center gap-2 hover:text-emerald-400 transition text-slate-200"
              >
                <LayoutDashboard size={20} />
                Dashboard
              </button>

              {dashboardOpen && (
                <div className="absolute top-full mt-3 w-48 bg-slate-900 rounded-md shadow-lg border border-slate-700 overflow-hidden">

                  <NavLink
                    to="/adminDashboard"
                    onClick={() => setDashboardOpen(false)}
                    className="block px-4 py-2 hover:bg-emerald-500 hover:text-black transition"
                  >
                    Admin Dashboard
                  </NavLink>

                  <NavLink
                    to="/subadminDashboard"
                    onClick={() => setDashboardOpen(false)}
                    className="block px-4 py-2 hover:bg-emerald-500 hover:text-black transition"
                  >
                    Sub Admin
                  </NavLink>

                  <NavLink
                    to="/employee"
                    onClick={() => setDashboardOpen(false)}
                    className="block px-4 py-2 hover:bg-emerald-500 hover:text-black transition"
                  >
                    Employee
                  </NavLink>

                  <NavLink
                    to="/userDashboard"
                    onClick={() => setDashboardOpen(false)}
                    className="block px-4 py-2 hover:bg-emerald-500 hover:text-black transition"
                  >
                    User Dashboard
                  </NavLink>

                </div>
              )}
            </div>
          </ul>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center space-x-4">

            {/* Signup Always Visible */}
            <NavLink
              to="/signup"
              className="bg-emerald-500 text-black px-6 py-1.5 rounded-full font-semibold hover:bg-emerald-400 transition"
            >
              Signup
            </NavLink>

            {/* Login (When Not Logged In) */}
            {!isLoggedIn && (
              <NavLink
                to="/login"
                className="border-2 border-emerald-400 text-emerald-400 px-5 py-1.5 rounded-full font-semibold hover:bg-emerald-400 hover:text-black transition"
              >
                Login
              </NavLink>
            )}

            {/* Logout (When Logged In) */}
            {isLoggedIn && (
              <button
                onClick={() => setIsLoggedIn(false)}
                className="border-2 border-emerald-400 text-emerald-400 px-5 py-1.5 rounded-full font-semibold hover:bg-emerald-400 hover:text-black transition"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>☰</button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-slate-950 shadow-md px-6 py-4 space-y-4">

            <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>

            <NavLink to="/adminDashboard" onClick={() => setIsOpen(false)}>Admin Dashboard</NavLink>
            <NavLink to="/subadminDashboard" onClick={() => setIsOpen(false)}>Sub Admin</NavLink>
            <NavLink to="/employee" onClick={() => setIsOpen(false)}>Employee</NavLink>
            <NavLink to="/userDashboard" onClick={() => setIsOpen(false)}>User Dashboard</NavLink>

            <NavLink to="/signup" onClick={() => setIsOpen(false)}>Signup</NavLink>

            {!isLoggedIn ? (
              <NavLink to="/login" onClick={() => setIsOpen(false)}>Login</NavLink>
            ) : (
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                  setIsOpen(false);
                }}
              >
                Logout
              </button>
            )}
          </div>
        )}
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
