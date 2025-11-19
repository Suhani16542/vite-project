import React from "react";
import { Users, FileText, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { Outlet } from "react-router-dom"
export default function AdminHome() {
  const stats = {
    totalUsers: 450,
    totalRequests: 320,
    completedRequests: 250,
    pendingRequests: 70,
    todayRequests: 15,
  };

  const recentUsers = [
    { name: "Arjun Mehta", email: "arjun@example.com", status: "Active" },
    { name: "Priya Sharma", email: "priya@example.com", status: "Active" },
    { name: "Rahul Verma", email: "rahul@example.com", status: "Active" },
  ];

  const recentEmployees = [
    { name: "Vikas Gupta", email: "vikas@example.com", status: "Active", join: "18 Nov 2025" },
    { name: "Kavita Jain", email: "kavita@example.com", status: "Active", join: "16 Nov 2025" },
    { name: "Suman Das", email: "suman@example.com", status: "Deactivated", join: "15 Nov 2025" },
  ];

  const activeToday = [
    { name: "Arjun Sharma", email: "arjun2@example.com", status: "Active" },
    { name: "Nisha Patel", email: "nisha@example.com", status: "Active" },
    { name: "Rohan Singh", email: "rohan@example.com", status: "Active" },
  ];

  const cardStyle = "bg-gradient-to-r from-purple-700 to-pink-300 text-white rounded-lg p-4 flex items-center gap-4 shadow-lg";

  return (
    <div className="p-4 md:p-6 w-full space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>

      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className={cardStyle}><Users size={32} /><div><p className="text-sm">Total Users</p><h2 className="text-xl font-bold">{stats.totalUsers}</h2></div></div>
        <div className={cardStyle}><FileText size={32} /><div><p className="text-sm">Total Requests</p><h2 className="text-xl font-bold">{stats.totalRequests}</h2></div></div>
        <div className={cardStyle}><CheckCircle2 size={32} /><div><p className="text-sm">Completed</p><h2 className="text-xl font-bold">{stats.completedRequests}</h2></div></div>
        <div className={cardStyle}><AlertCircle size={32} /><div><p className="text-sm">Pending</p><h2 className="text-xl font-bold">{stats.pendingRequests}</h2></div></div>
        <div className={cardStyle}><Clock size={32} /><div><p className="text-sm">Today Requests</p><h2 className="text-xl font-bold">{stats.todayRequests}</h2></div></div>
      </div>

      {/* Recent Users */}
      <div>
        <h2 className="text-xl md:text-2xl font-semibold mb-3 text-gray-800">Recent User Accounts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {recentUsers.map((user, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-4 flex flex-col gap-2">
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
              <p className={`text-sm font-medium ${user.status === "Active" ? "text-green-600" : "text-red-500"}`}>{user.status}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Employees */}
      <div>
        <h2 className="text-xl md:text-2xl font-semibold mb-3 text-gray-800">Recent Employees Joined</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {recentEmployees.map((emp, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-4 flex flex-col gap-2">
              <p className="font-semibold">{emp.name}</p>
              <p className="text-sm text-gray-500">{emp.email}</p>
              <p className="text-sm text-gray-500">Joined: {emp.join}</p>
              <p className={`text-sm font-medium ${emp.status === "Active" ? "text-green-600" : "text-red-500"}`}>{emp.status}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Active Today */}
      <div>
        <h2 className="text-xl md:text-2xl font-semibold mb-3 text-gray-800">Employees Active Today</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {activeToday.map((emp, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-4 flex flex-col gap-2">
              <p className="font-semibold">{emp.name}</p>
              <p className="text-sm text-gray-500">{emp.email}</p>
              <p className={`text-sm font-medium ${emp.status === "Active" ? "text-green-600" : "text-red-500"}`}>{emp.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
