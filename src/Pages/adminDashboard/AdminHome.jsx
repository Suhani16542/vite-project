import React from "react";
import { Users, FileText, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { Outlet } from "react-router-dom";

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

  /* 🔥 CARD THEME FIXED */
  const cardStyle =
    "bg-[#0B0F0E] border border-[#1F2937] rounded-xl p-4 flex items-center gap-4 \
     shadow-md hover:shadow-green-500/20 transition text-white";

  const cardIcon =
    "p-2 rounded-lg bg-[#111827] text-green-500";

  return (
    <div className="p-4 md:p-6 w-full space-y-6">

      <h1 className="text-2xl md:text-3xl font-bold text-green-400">
        Admin Dashboard
      </h1>

      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className={cardStyle}>
          <div className={cardIcon}><Users size={24} /></div>
          <div>
            <p className="text-sm text-gray-400">Total Users</p>
            <h2 className="text-xl font-bold text-green-400">{stats.totalUsers}</h2>
          </div>
        </div>

        <div className={cardStyle}>
          <div className={cardIcon}><FileText size={24} /></div>
          <div>
            <p className="text-sm text-gray-400">Total Requests</p>
            <h2 className="text-xl font-bold text-green-400">{stats.totalRequests}</h2>
          </div>
        </div>

        <div className={cardStyle}>
          <div className={cardIcon}><CheckCircle2 size={24} /></div>
          <div>
            <p className="text-sm text-gray-400">Completed</p>
            <h2 className="text-xl font-bold text-green-400">{stats.completedRequests}</h2>
          </div>
        </div>

        <div className={cardStyle}>
          <div className={cardIcon}><AlertCircle size={24} /></div>
          <div>
            <p className="text-sm text-gray-400">Pending</p>
            <h2 className="text-xl font-bold text-green-400">{stats.pendingRequests}</h2>
          </div>
        </div>

        <div className={cardStyle}>
          <div className={cardIcon}><Clock size={24} /></div>
          <div>
            <p className="text-sm text-gray-400">Today Requests</p>
            <h2 className="text-xl font-bold text-green-400">{stats.todayRequests}</h2>
          </div>
        </div>
      </div>

      {/* Reusable Section Card */}
      {[
        { title: "Recent User Accounts", data: recentUsers },
        { title: "Recent Employees Joined", data: recentEmployees },
        { title: "Employees Active Today", data: activeToday },
      ].map((section, i) => (
        <div key={i}>
          <h2 className="text-xl md:text-2xl font-semibold mb-3 text-green-400">
            {section.title}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {section.data.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0B0F0E] border border-[#1F2937] rounded-xl p-4 shadow-md
                           hover:border-green-500/40 transition"
              >
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-sm text-gray-400">{item.email}</p>
                {item.join && (
                  <p className="text-sm text-gray-400">Joined: {item.join}</p>
                )}
                <p
                  className={`text-sm font-medium ${
                    item.status === "Active"
                      ? "text-green-500"
                      : "text-red-400"
                  }`}
                >
                  {item.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
