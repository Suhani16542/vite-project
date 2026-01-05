import React, { useState } from "react";
import { Search, CheckCircle, Clock, FileText, AlertTriangle } from "lucide-react";

const RequestTracking = () => {
  const [query, setQuery] = useState("");

  const requests = [
    {
      id: "REQ-10021",
      user: "Amit Sharma",
      formName: "Government ID Verification",
      type: "Government",
      requestedOn: "12 Aug 2024 • 2:40 PM",
      status: "Missing Docs",
      stages: {
        requiredDocs: true,
        missingDocs: true,
        assigned: false,
        inReview: false,
        completed: false,
        rejected: false,
      },
    },
    {
      id: "REQ-10022",
      user: "Rekha Patel",
      formName: "UPSC Verification",
      type: "UPSC",
      requestedOn: "12 Aug 2024 • 11:20 AM",
      status: "In Review",
      stages: {
        requiredDocs: true,
        missingDocs: false,
        assigned: true,
        inReview: true,
        completed: false,
        rejected: false,
      },
    },
    {
      id: "REQ-10025",
      user: "Deepak Verma",
      formName: "Private Company Background Check",
      type: "Private",
      requestedOn: "11 Aug 2024 • 5:10 PM",
      status: "Completed",
      stages: {
        requiredDocs: true,
        missingDocs: false,
        assigned: true,
        inReview: true,
        completed: true,
        rejected: false,
      },
    },
  ];

  const statusColors = {
    "Pending": "text-yellow-600",
    "Missing Docs": "text-red-500",
    "Assigned": "text-blue-500",
    "In Review": "text-purple-600",
    "Completed": "text-green-600",
    "Rejected": "text-red-600",
  };

  const filtered = requests.filter((r) =>
    r.id.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-white text-gray-800 p-6">

      {/* Title */}
      <h2 className="text-3xl font-semibold mb-6 bg-gradient-to-r from-purple-700 to-pink-500 bg-clip-text text-transparent">
        Request Tracking
      </h2>

      {/* Search */}
      <div className="max-w-md mb-6 bg-white px-4 py-2 rounded-xl 
        border border-purple-700/20 shadow-[0_0_15px_rgba(128,0,255,0.1)] flex items-center gap-2">
        
        <Search size={18} className="text-purple-600" />
        <input
          type="text"
          placeholder="Search request by ID..."
          className="bg-transparent outline-none w-full text-sm"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Tracking Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filtered.map((req, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-2xl border border-purple-600/20 
            shadow-[0_0_25px_rgrgba(128,0,255,0.12)]"
          >
            {/* Header */}
            <h3 className="text-lg font-semibold text-purple-700">{req.id}</h3>
            <p className="text-sm text-gray-600">
              {req.formName} • <span className="font-medium text-gray-700">{req.type}</span>
            </p>

            {/* User + Date */}
            <p className="mt-2 text-sm text-gray-600">
              Requested By: <span className="text-gray-800 font-medium">{req.user}</span>
            </p>
            <p className="text-sm text-gray-600">
              Requested On: <span className="text-gray-800 font-medium">{req.requestedOn}</span>
            </p>

            {/* Status */}
            <p className="mt-2 text-sm">
              Status:{" "}
              <span className={`font-semibold ${statusColors[req.status]}`}>
                {req.status}
              </span>
            </p>

            {/* Tracking Timeline */}
            <div className="mt-5 space-y-4">

              <StageItem
                active={req.stages.requiredDocs}
                label="Required Docs Submitted"
                icon={<FileText size={18} />}
              />

              <StageItem
                active={req.stages.missingDocs}
                label="Missing Docs"
                icon={<AlertTriangle size={18} />}
              />

              <StageItem
                active={req.stages.assigned}
                label="Assigned to Employee"
                icon={<Clock size={18} />}
              />

              <StageItem
                active={req.stages.inReview}
                label="In Review"
                icon={<Clock size={18} />}
              />

              <StageItem
                active={req.stages.completed}
                label="Completed"
                icon={<CheckCircle size={18} />}
              />

              <StageItem
                active={req.stages.rejected}
                label="Rejected"
                icon={<AlertTriangle size={18} />}
              />

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const StageItem = ({ active, label, icon }) => (
  <div className="flex items-center gap-3">
    <div
      className={`p-2 rounded-full ${
        active
          ? "bg-purple-600 text-white shadow-[0_0_10px_rgba(128,0,255,0.4)]"
          : "bg-gray-200 text-gray-500"
      }`}
    >
      {icon}
    </div>
    <p className={`text-sm ${active ? "text-gray-900 font-medium" : "text-gray-500"}`}>
      {label}
    </p>
  </div>
);

export default RequestTracking;
