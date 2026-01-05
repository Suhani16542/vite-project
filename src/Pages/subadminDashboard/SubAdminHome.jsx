import React from "react";
import {
  FileText,
  CheckCircle,
  Clock,
  Calendar,
  Users,
  Activity,
  BarChart3,
  FolderPlus,
  ClipboardCheck
} from "lucide-react";

const SubAdminHome = () => {

  const recentRequests = [
    { user: "Amit Sharma", form: "PAN Update", status: "Pending", time: "2 hrs ago" },
    { user: "Riya Patel", form: "Bank KYC", status: "In Review", time: "5 hrs ago" },
    { user: "Deepak Verma", form: "Aadhar Correction", status: "Completed", time: "1 day ago" },
  ];

  const teams = [
    { name: "Verification Team", members: 5 },
    { name: "Document Team", members: 3 },
    { name: "Review Team", members: 4 },
  ];

  // Card Styling
  const card = "p-6 rounded-2xl bg-white border border-purple-200 shadow-[0_0_25px_rgba(128,0,255,0.1)] hover:shadow-[0_0_35px_rgba(128,0,255,0.15)] transition-all duration-300";

  return (
    <div className="p-6 md:p-8 bg-white text-gray-800">

      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-3xl font-semibold bg-gradient-to-r from-purple-700 to-pink-500 bg-clip-text text-transparent">
          Sub-Admin Dashboard
        </h1>
        <p className="text-gray-500 mt-1">Overview of requests & team workflow</p>
      </div>

      {/* TOP CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-5 mb-12">

        <div className={card}>
          <Clock size={36} className="text-yellow-500" />
          <div className="mt-3">
            <p className="text-sm text-gray-500">Monthly Pending</p>
            <h2 className="text-2xl font-bold">120</h2>
          </div>
        </div>

        <div className={card}>
          <CheckCircle size={36} className="text-green-500" />
          <div className="mt-3">
            <p className="text-sm text-gray-500">Monthly Completed</p>
            <h2 className="text-2xl font-bold">310</h2>
          </div>
        </div>

        <div className={card}>
          <Activity size={36} className="text-indigo-500" />
          <div className="mt-3">
            <p className="text-sm text-gray-500">In Review</p>
            <h2 className="text-2xl font-bold">58</h2>
          </div>
        </div>

        <div className={card}>
          <Clock size={36} className="text-orange-400" />
          <div className="mt-3">
            <p className="text-sm text-gray-500">Today Pending</p>
            <h2 className="text-2xl font-bold">12</h2>
          </div>
        </div>

        <div className={card}>
          <CheckCircle size={36} className="text-green-600" />
          <div className="mt-3">
            <p className="text-sm text-gray-500">Today Completed</p>
            <h2 className="text-2xl font-bold">14</h2>
          </div>
        </div>

        <div className={card}>
          <Calendar size={36} className="text-pink-500" />
          <div className="mt-3">
            <p className="text-sm text-gray-500">Recent Requests</p>
            <h2 className="text-2xl font-bold">26</h2>
          </div>
        </div>

      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">

        {/* LEFT SECTION */}
        <div className="xl:col-span-3 space-y-8">

          {/* ANALYTICS SUMMARY */}
          <div className={card}>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <BarChart3 className="text-purple-600" /> Request Overview
            </h3>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-4 bg-purple-50 rounded-xl border border-purple-100 hover:bg-purple-100 transition-all">
                <p className="text-gray-500 text-sm">Total Requests</p>
                <h2 className="text-3xl font-bold mt-1">488</h2>
              </div>

              <div className="p-4 bg-purple-50 rounded-xl border border-purple-100 hover:bg-purple-100 transition-all">
                <p className="text-gray-500 text-sm">Completion Rate</p>
                <h2 className="text-3xl font-bold mt-1">72%</h2>
              </div>
            </div>
          </div>

          {/* RECENT REQUESTS */}
          <div className={card}>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FileText className="text-purple-600" /> Recent Requests
            </h3>

            <div className="space-y-4">
              {recentRequests.map((req, i) => (
                <div
                  key={i}
                  className="p-4 bg-purple-50 rounded-xl border border-purple-100 hover:bg-purple-100 transition-all"
                >
                  <p className="font-medium text-gray-800">{req.user}</p>
                  <p className="text-sm text-gray-500">{req.form} • {req.status}</p>
                  <p className="text-xs text-gray-400">{req.time}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT SECTION */}
        <div className="space-y-8">

          {/* TEAMS OVERVIEW */}
          <div className={card}>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Users className="text-purple-600" /> Teams Overview
            </h3>

            <div className="space-y-4">
              {teams.map((team, index) => (
                <div
                  key={index}
                  className="p-4 bg-purple-50 rounded-xl border border-purple-100 hover:bg-purple-100 transition-all"
                >
                  <p className="font-medium text-gray-800">{team.name}</p>
                  <p className="text-sm text-gray-500">{team.members} Members</p>
                </div>
              ))}
            </div>
          </div>

          {/* QUICK ACTIONS */}
          <div className={card}>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Activity className="text-purple-600" /> Quick Actions
            </h3>

            <div className="space-y-4">
              <button className="w-full flex items-center justify-between bg-purple-50 hover:bg-purple-100 p-4 rounded-xl border border-purple-100 transition-all">
                <span className="font-medium text-gray-800">Create New Form</span>
                <FolderPlus className="text-purple-600" />
              </button>

              <button className="w-full flex items-center justify-between bg-purple-50 hover:bg-purple-100 p-4 rounded-xl border border-purple-100 transition-all">
                <span className="font-medium text-gray-800">Assign Request</span>
                <ClipboardCheck className="text-pink-500" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default SubAdminHome;
