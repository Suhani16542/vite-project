import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Settings, LogOut, ChevronDown } from "lucide-react";

export default function UserDasboard() {
      const [open, setOpen] = useState(false); 
  return (
    
    <div className="w-full bg-white px-6 py-4 rounded-xl flex items-center justify-between">

      {/* LEFT SIDE */}
      <div className=" bg-gradient-to-r from-purple-700 via-pink-500 to-purple-600 text-white  h-25 rounded-2xl  w-[70%]">
      <div className="flex items-center   gap-6">

        {/* FILL IT LOGO + TAGLINE */}
        <div className="m-5">
          <div className="flex items-center gap-1 text-xl font-bold text-[30px]">
            <span className="text-yellow-400">Fill</span>
            <span className="text-yellow-400">It</span>
          </div>
          <p className="text-[15px] text-white mt-0">Form Filling Service</p>
        </div>

        {/* DATE BUTTON */}
        <div className="flex items-center gap-2 bg-white text-purple-700 px-4 py-2 rounded-lg">

          {/* Calendar Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M8 2v4M16 2v4M3 9h18M5 21h14a2 2 0 002-2V7a2 2
              0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" />
          </svg>

          <span className="text-sm">Tue, Apr 21</span>
        </div>

        {/* TIME BUTTON */}
        <div className="flex items-center gap-2 bg-white text-purple-700 px-4 py-2 rounded-lg">

          {/* Clock Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M12 6v6l4 2" />
          </svg>

          <span className="text-sm">10:35 AM</span>
        </div>

        {/* ONE WAY BUTTON */}
        <div className="bg-white text-purple-700 px-5 py-2 rounded-lg text-sm">
          One Way
        </div>

      </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-xl shadow h-25">

        {/* User Image */}
        <img
          src="/user.jpg"
          className="w-10 h-10 rounded-full object-cover"
        />

        {/* Name */}
        <p className="text-gray-800 text-sm font-medium">Benjamin Rous</p>

        {/* 3 DOT MENU */}
             <div className="relative inline-block text-left">
      {/* Dropdown Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-xl border hover:bg-emerald-50 transition"
      >
        
        <span className="font-medium text-gray-700">⋮</span>
        
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-xl border py-2 z-20">
          {/* Profile */}
          <div className="flex items-center gap-3 px-4 py-2 hover:bg-emerald-50 cursor-pointer transition">
            <User className="w-5 h-5 text-emerald-600" />
            <span className="text-gray-700">Profile</span>
          </div>

          {/* Setting */}
          <div className="flex items-center gap-3 px-4 py-2 hover:bg-emerald-50 cursor-pointer transition">
            <Settings className="w-5 h-5 text-emerald-600" />
            <span className="text-gray-700">Setting</span>
          </div>

          {/* Logout */}
          <div className="flex items-center gap-3 px-4 py-2 hover:bg-red-50 cursor-pointer transition">
            <LogOut className="w-5 h-5 text-red-600" />
            <span className="text-red-600 font-medium">Logout</span>
          </div>
        </div>
      )}
    </div>
      </div>

    </div>
  );
}

