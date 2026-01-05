import Sidebar from "../../Component/Sidebar";
import Header from "../../Component/Header";

import {
  Home,
  Users,
  FileText,
  UserCog,
  UserCheck,
  BarChart3,
} from "lucide-react";

import { Outlet } from "react-router-dom";

export default function EmployeeDashboard() {
  const adminMenu = [
    { label: "Dashboard", icon: Home, Route: "/employee" },
    { label: "Request Inbox", icon: Users, Route: "/employee/inbox" },
    { label: "Pending", icon: FileText, Route: "/employee/pending" },
    { label: "Completed Work", icon: UserCog, Route: "/employee/completed" },
    { label: "Communication", icon: UserCheck, Route: "/employee/communication" },
    { label: "Billing", icon: BarChart3, Route: "/employee/billing" },
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white text-gray-800">

      {/* SIDEBAR */}
      <Sidebar
        menuItems={adminMenu}
        className="
        w-full lg:w-64 fixed lg:relative h-screen z-50 
        bg-gradient-to-b from-purple-700 to-pink-550
        text-white 
        shadow-[0_0_25px_rgba(128,0,255,0.35)]
        border-r border-purple-600/20
        "
      />

      {/* MAIN CONTENT */}
      <div className="flex-1 lg:ml-64 flex flex-col bg-white">

        {/* HEADER */}
        <Header
          username="Welcome, Suhani Yadav"
          className="
          bg-white text-gray-800 
          border-b border-purple-700/20 
          shadow-[0_0_20px_rgba(0,0,0,0.08)]
          "
        />

        {/* PAGE CONTENT */}
        <main className="p-6 md:p-8 bg-white flex-1">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>

      </div>
    </div>
  );
}
