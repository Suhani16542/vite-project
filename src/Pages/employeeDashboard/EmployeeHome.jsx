
import React from "react";
import {
  ClipboardList,
  Clock,
  CheckCircle,
  BarChart3,
  FileText,
  Play,
  ClipboardCheck,
  ListTodo,
} from "lucide-react";

const EmployeeHome = () => {

  const assignedRequests = [
    { form: "Aadhar Update", user: "Amit Sharma", status: "Assigned", time: "1 hr ago" },
    { form: "PAN Correction", user: "Neha Verma", status: "Pending", time: "3 hrs ago" },
    { form: "GST Registration", user: "Rahul Singh", status: "Completed", time: "1 day ago" },
  ];

  const card =
    "p-6 rounded-2xl bg-[#0f0f13]/70 border border-purple-700/30 " +
    "backdrop-blur-xl shadow-[0_0_25px_rgba(128,0,255,0.25)] " +
    "hover:shadow-[0_0_35px_rgba(128,0,255,0.45)] transition-all duration-300";

  return (
    <div className="p-6 md:p-8 text-gray-200">

      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-3xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Employee Dashboard
        </h1>
        <p className="text-gray-400 mt-1">Your assigned form requests & daily workflow</p>
      </div>

      {/* TOP SUMMARY CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

        {/* Assigned Requests */}
        <div className={card}>
          <ClipboardList size={38} className="text-indigo-400" />
          <div className="mt-3">
            <p className="text-sm text-gray-400">Total Assigned</p>
            <h2 className="text-3xl font-bold">38</h2>
          </div>
        </div>

        {/* Pending Assigned */}
        <div className={card}>
          <Clock size={38} className="text-yellow-400" />
          <div className="mt-3">
            <p className="text-sm text-gray-400">Pending</p>
            <h2 className="text-3xl font-bold">12</h2>
          </div>
        </div>

        {/* Completed Assigned */}
        <div className={card}>
          <CheckCircle size={38} className="text-green-400" />
          <div className="mt-3">
            <p className="text-sm text-gray-400">Completed</p>
            <h2 className="text-3xl font-bold">26</h2>
          </div>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">

        {/* LEFT SECTION (LARGER) */}
        <div className="xl:col-span-3 space-y-8">

          {/* REQUEST OVERVIEW */}
          <div className="bg-[#0f0f13]/70 p-6 rounded-2xl border border-purple-700/30 backdrop-blur-xl shadow-[0_0_25px_rgba(128,0,255,0.25)]">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <BarChart3 className="text-purple-400" /> Request Overview
            </h3>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-4 bg-[#1a1a1f] rounded-xl border border-purple-800/20 hover:bg-[#22222a] transition-all">
                <p className="text-gray-400 text-sm">Today's Assigned</p>
                <h2 className="text-3xl font-bold mt-1">7</h2>
              </div>

              <div className="p-4 bg-[#1a1a1f] rounded-xl border border-purple-800/20 hover:bg-[#22222a] transition-all">
                <p className="text-gray-400 text-sm">Today's Completed</p>
                <h2 className="text-3xl font-bold mt-1">4</h2>
              </div>
            </div>
          </div>

          {/* ASSIGNED REQUEST LIST */}
          <div className="bg-[#0f0f13]/70 p-6 rounded-2xl border border-purple-700/30 backdrop-blur-xl shadow-[0_0_25px_rgba(128,0,255,0.25)]">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FileText className="text-purple-400" /> Assigned Requests
            </h3>

            <div className="space-y-4">
              {assignedRequests.map((req, i) => (
                <div
                  key={i}
                  className="p-4 bg-[#1a1a1f] rounded-xl border border-purple-800/20 hover:bg-[#22222a] transition-all"
                >
                  <p className="font-medium">{req.form}</p>
                  <p className="text-sm text-gray-400">
                    {req.user} • {req.status}
                  </p>
                  <p className="text-xs text-gray-500">{req.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="space-y-8">

          {/* QUICK ACTIONS */}
          <div className="bg-[#0f0f13]/70 p-6 rounded-2xl border border-purple-700/30 backdrop-blur-xl shadow-[0_0_25px_rgba(128,0,255,0.25)]">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <ListTodo className="text-green-400" /> Quick Actions
            </h3>

            <div className="space-y-4">
              {/* Start Processing */}
              <button className="w-full flex items-center justify-between bg-[#1a1a1f] hover:bg-[#22222a] p-4 rounded-xl border border-purple-800/20 transition-all">
                <span className="font-medium">Start Processing</span>
                <Play className="text-indigo-400" />
              </button>

              {/* Update Status */}
              <button className="w-full flex items-center justify-between bg-[#1a1a1f] hover:bg-[#22222a] p-4 rounded-xl border border-purple-800/20 transition-all">
                <span className="font-medium">Update Request Status</span>
                <ClipboardCheck className="text-pink-400" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default EmployeeHome;
