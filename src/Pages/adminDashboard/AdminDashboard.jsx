import Sidebar from "../../Component/Sidebar";
import Header from "../../Component/Header";
import AdminHome from "./AdminHome";
import { NavLink } from "react-router-dom";

import {
  Home,
  Users,
  FileText,
  UserCog,
  UserCheck,
  BarChart3,
} from "lucide-react";

import AllUsers from "./AllUsers";
import { Outlet } from "react-router-dom";

export default function AdminDashboard() {
  const adminMenu = [
    { label: "Dashboard", icon: Home, Route: "/adminDashboard" },
    { label: "Users", icon: Users, Route: "/adminDashboard/users" },
    { label: "Forms request", icon: FileText, Route: "/adminDashboard/form-request" },
    { label: "Sub-admin", icon: UserCog, Route: "/adminDashboard/subadmin" },
    { label: "Employee", icon: UserCheck, Route: "/adminDashboard/employee" },
    { label: "Billing", icon: BarChart3, Route: "/adminDashboard/Billing" },
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen 
      bg-gradient-to-br from-[#EFF6FF] via-[#DBEAFE] to-[#EFF6FF]">

      {/* SIDEBAR */}
      <Sidebar 
        menuItems={adminMenu}
        className="w-full lg:w-64 fixed lg:relative h-screen z-50
        bg-gradient-to-b from-[#2563EB] via-[#3B82F6] to-[#2563EB]
        text-white shadow-lg"
      />

      {/* MAIN CONTENT */}
      <div className="flex-1 lg:ml-0 lg:pl-64 flex-col">

        {/* HEADER */}
        <Header
          username="Welcome, Suhani Yadav"
          className="bg-gradient-to-r from-[#2563EB] to-[#3B82F6] 
          text-[#0F172A]"
        />

        {/* ROUTES */}
        <Outlet />

        {/* PAGE CONTENT */}
        <main className="p-4 md:p-6 lg:p-8 flex-1 text-[#0F172A]">
          {/* Components will render here */}
        </main>
      </div>
    </div>
  );
}
