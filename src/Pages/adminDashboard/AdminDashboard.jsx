import Sidebar from "../../Component/Sidebar";
import Header from "../../Component/Header";
import AdminHome from "./AdminHome";
import { NavLink, Outlet } from "react-router-dom";

import {
  Home,
  Users,
  FileText,
  UserCog,
  UserCheck,
  BarChart3,
} from "lucide-react";

import AllUsers from "./AllUsers";

export default function AdminDashboard() {
  const adminMenu = [
    { label: "Dashboard", icon: Home, Route: "/adminDashboard" },
    { label: "Users", icon: Users, Route: "/adminDashboard/users" },
    { label: "Forms request", icon: FileText, Route: "/adminDashboard/form-request" },
    { label: "Sub-admin", icon: UserCog, Route: "/adminDashboard/subadmin" },
    { label: "Employee", icon: UserCheck, Route: "/adminDashboard/employee" },
    { label: "Category", icon: UserCheck, Route: "/adminDashboard/category" },
    { label: "Billing", icon: BarChart3, Route: "/adminDashboard/Billing" },
  ];

  return (
    <div
      className="
        flex flex-col lg:flex-row min-h-screen
        bg-gradient-to-br from-white via-green-50 to-white
      "
    >
      {/* SIDEBAR */}
      <Sidebar
        menuItems={adminMenu}
        className="
          w-full lg:w-64 fixed lg:relative h-screen z-50
          bg-gradient-to-b from-green-700 via-green-600 to-green-700
          text-white shadow-xl
        "
      />

      {/* MAIN CONTENT */}
      <div className="flex-1 lg:pl-64 flex-col">

        {/* HEADER */}
        <Header
          username="Welcome, Suhani Yadav"
          className="
            bg-white
            text-green-700
            border-b border-green-200
            shadow-sm
          "
        />

        {/* ROUTES */}
        <Outlet />

        {/* PAGE CONTENT */}
        <main
          className="
            p-4 md:p-6 lg:p-8 flex-1
            text-gray-800
          "
        >
          {/* Components will render here */}
        </main>
      </div>
    </div>
  );
}
