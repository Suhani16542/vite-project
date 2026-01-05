import Sidebar from "../../Component/Sidebar";
import Header from "../../Component/Header";

import { Outlet } from "react-router-dom";

import {
  Home,
  Users2,
  FileText,
  UserCog,
  UserCheck,
  BarChart3,
  Route,
  SearchCheck,
  BookDashed,
  ChartBarStacked,
  ClipboardCheck,
  MessageSquare
} from "lucide-react";
import SubAdminHome from "./SubAdminHome";
import RequestTracking from "./RequestTracking";

export default function SubadminDashboard() {
  const adminMenu = [
   { label: "Dashboard", icon: Home, Route: "/subadminDashboard" },

{ label: "Request Tracking", icon: SearchCheck, Route: "/subadminDashboard/request-tracking" },

{ label: "Requests", icon: FileText, Route: "/subadminDashboard/request-from-admin" },

{ label: "Teams", icon: Users2, Route: "/subadminDashboard/teams" },

{ label: "Employee Workload", icon: ChartBarStacked, Route: "/subadminDashboard/employee-workload" },

{ label: "Assign Form", icon: ClipboardCheck, Route: "/subadminDashboard/form-request" },

{ label: "Communication", icon: MessageSquare, Route: "/subadminDashboard/communication" },

  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-purple-100">

      {/* SIDEBAR */}
      <Sidebar
        menuItems={adminMenu}
        className="w-full lg:w-64 fixed lg:relative h-screen z-50 bg-gradient-to-b from-purple-700 to-pink-300 text-white shadow-lg"
      />

      {/* MAIN CONTENT */}
      <div className="flex-1 lg:ml-0 lg:pl-64 flex-col">

        {/* HEADER */}
        <Header
          username="Welcome, Suhani Yadav"
          className="bg-gradient-to-r from-purple-700 to-pink-300 text-white"
        />

        <Outlet />

        {/* CONTENT */}
        <main className="p-4 md:p-6 lg:p-8 flex-1">

       {/* <SubAdminHome/>
       <RequestTracking/>
        */}
      
        
        </main>
      </div>
    </div>
  );
}
