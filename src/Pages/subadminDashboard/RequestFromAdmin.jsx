import React, { useState } from "react";
import { Search, Users } from "lucide-react";

const RequestFromAdmin = () => {
  const [query, setQuery] = useState("");

  const requests = [
    {
      id: "REQ-1001",
      user: "Amit Sharma",
      type: "Government",
      form: "PAN Update",
      date: "22 Nov 2025",
      time: "10:45 AM",
      status: "Pending",
    },
    {
      id: "REQ-1002",
      user: "Riya Patel",
      type: "SSC",
      form: "SSC Correction",
      date: "22 Nov 2025",
      time: "09:15 AM",
      status: "In Review",
    },
    {
      id: "REQ-1003",
      user: "Deepak Verma",
      type: "Private",
      form: "Company KYC",
      date: "21 Nov 2025",
      time: "04:30 PM",
      status: "Completed",
    },
    {
      id: "REQ-1004",
      user: "Anjali Mehta",
      type: "UPSC",
      form: "Profile Update",
      date: "20 Nov 2025",
      time: "11:20 AM",
      status: "Assigned",
    },
    {
      id: "REQ-1005",
      user: "Rohan Singh",
      type: "Government",
      form: "Voter ID",
      date: "19 Nov 2025",
      time: "01:50 PM",
      status: "Rejected",
    },
  ];

  // Status Color Logic
  const statusColor = {
    Pending: "text-yellow-600 bg-yellow-100 border-yellow-300",
    Assigned: "text-blue-600 bg-blue-100 border-blue-300",
    "In Review": "text-purple-600 bg-purple-100 border-purple-300",
    Completed: "text-green-600 bg-green-100 border-green-300",
    Rejected: "text-red-600 bg-red-100 border-red-300",
  };

  const filtered = requests.filter((r) =>
    r.id.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-6 md:p-8 bg-white text-gray-800">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold bg-gradient-to-r from-purple-700 to-pink-500 bg-clip-text text-transparent">
          Requests From Admin
        </h1>
      </div>

      {/* SEARCH BAR */}
      <div className="mb-8 max-w-md">
        <div className="flex items-center gap-3 bg-white border border-purple-300 rounded-xl px-4 py-2 shadow-[0_0_15px_rgba(128,0,255,0.1)]">
          <Search size={20} className="text-purple-600" />
          <input
            type="text"
            placeholder="Search by Request ID..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent outline-none text-gray-800"
          />
        </div>
      </div>

      {/* REQUEST LIST */}
      <div className="space-y-6">
        {filtered.map((req, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-white border border-purple-200 shadow-[0_0_25px_rgba(128,0,255,0.1)] hover:shadow-[0_0_35px_rgba(128,0,255,0.15)] transition-all duration-300"
          >

            {/* TOP ROW */}
            <div className="flex flex-col sm:flex-row justify-between gap-6">

              {/* LEFT SECTION */}
              <div>
                <p className="text-gray-500 text-sm">Request ID</p>
                <p className="text-lg font-semibold text-purple-700">{req.id}</p>

                <p className="text-gray-500 text-sm mt-3">User</p>
                <p className="font-medium">{req.user}</p>
              </div>

              {/* MIDDLE SECTION */}
              <div>
                <p className="text-gray-500 text-sm">Form Type</p>
                <p className="font-medium">{req.type}</p>

                <p className="text-gray-500 text-sm mt-3">Form Name</p>
                <p className="font-medium">{req.form}</p>
              </div>

              {/* RIGHT SECTION */}
              <div className="text-right">
                <p className="text-gray-500 text-sm">Date</p>
                <p className="font-medium">{req.date}</p>

                <p className="text-gray-500 text-sm mt-3">Time</p>
                <p className="font-medium">{req.time}</p>
              </div>

            </div>

            {/* BOTTOM ROW */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">

              {/* STATUS BADGE */}
              <span
                className={`px-4 py-2 rounded-xl border text-sm font-medium ${statusColor[req.status]}`}
              >
                {req.status}
              </span>

              {/* ACTION BUTTON */}
              <button className="flex items-center gap-2 bg-purple-50 border border-purple-300 hover:bg-purple-100 px-5 py-2 rounded-xl transition-all text-purple-700 font-medium">
                <Users size={18} className="text-purple-600" />
                <span>View / Assign Team</span>
              </button>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default RequestFromAdmin;
