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
  Route,
} from "lucide-react";
import AllUsers from "./AllUsers";
import { Outlet } from "react-router-dom";

export default function AdminDashboard() {
  const adminMenu = [
    { label: "Dashboard", icon: Home,Route:"/adminDashboard" },
    { label: "Users", icon: Users ,Route:"/adminDashboard/users"},
    { label: "Forms request", icon: FileText },
    { label: "Sub-admin", icon: UserCog },
    { label: "Employee", icon: UserCheck },
    { label: "Reports", icon: BarChart3 },
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-purple-100">

      {/* SIDEBAR */}
      <Sidebar 
        menuItems={adminMenu} 
        className="w-full lg:w-64 fixed lg:relative h-screen z-50 bg-gradient-to-b from-purple-700 to-pink-300 text-white shadow-lg"
      />

      {/* MAIN CONTENT */}
      <div className="flex-1 lg:ml-0 lg:pl-64  flex-col">

        {/* HEADER */}
        <Header username="Welcome, Suhani Yadav" className="bg-gradient-to-r from-purple-700 to-pink-300 text-white" />
        <Outlet/>
        {/* CONTENT */}
        <main className="p-4 md:p-6 lg:p-8 flex-1">
          {/* <AdminHome /> */}
          {/* <AllUsers/> */}
        </main>
      </div>
    </div>
  );
}
