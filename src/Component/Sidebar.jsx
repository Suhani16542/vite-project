import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  LayoutGrid,
  Users,
  FileText,
  Settings,
  LogOut,
  User,
  Menu,
  X,
} from "lucide-react";

export default function Sidebar({ menuItems = [] }) {
  const [open, setOpen] = useState(true);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-[#2563EB] text-white p-2 rounded-md shadow-md hover:bg-[#1E4FD9] transition"
      >
        {open ? <X /> : <Menu />}
      </button>

      {/* SIDEBAR */}
      <div
        className={`h-screen fixed top-0 left-0 z-40 
        bg-gradient-to-b from-[#2563EB] via-[#3B82F6] to-[#2563EB]
        text-white shadow-2xl border-r border-white/20
        transition-all duration-300
        ${open ? "w-64" : "w-16"} lg:w-64`}
      >
        {/* LOGO */}
        <div className="flex items-center gap-8 px-6 py-6 border-b border-white/20">
          <h2 className="text-3xl font-bold tracking-wide">FILL IT</h2>
        </div>

        {/* MAIN MENU */}
        <div className="px-4 py-4 space-y-1">
          {menuItems.map((item) => (
            <NavLink key={item.Route} to={item.Route}>
              <button
                className="flex items-center gap-3 w-full text-left px-4 py-3 
                rounded-lg hover:bg-white/10 hover:translate-x-1 
                transition-all cursor-pointer group"
              >
                <item.icon className="w-5 h-5 group-hover:scale-110 transition" />
                <span className="font-medium">{item.label}</span>
              </button>
            </NavLink>
          ))}
        </div>

        {/* BOTTOM MENU */}
        <div className="absolute bottom-0 left-0 w-full px-4 py-4 space-y-2 border-t border-white/10">
          <NavLink to="profile">
            <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-white/10 transition group">
              <User className="w-5 h-5 group-hover:scale-110 transition" />
              Profile
            </button>
          </NavLink>

          <NavLink to="settings">
            <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-white/10 transition group">
              <Settings className="w-5 h-5 group-hover:scale-110 transition" />
              Settings
            </button>
          </NavLink>

          <button className="flex items-center gap-3 w-full px-4 py-3 text-red-300 hover:bg-red-500/20 rounded-lg transition group">
            <LogOut className="w-5 h-5 group-hover:scale-110 transition" />
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
