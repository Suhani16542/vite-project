import React, { useState } from "react";
import { Search, FileText, Clock, CheckCircle, AlertTriangle } from "lucide-react";

const RequestInbox = () => {
  const [query, setQuery] = useState("");

  const requests = [
    {
      id: "REQ-1021",
      form: "Aadhar Update",
      user: "Amit Sharma",
      status: "Pending",
      date: "12 Nov 2024",
    },
    {
      id: "REQ-1022",
      form: "PAN Correction",
      user: "Riya Patel",
      status: "Document Required",
      date: "13 Nov 2024",
    },
    {
      id: "REQ-1023",
      form: "Bank KYC",
      user: "Deepak Verma",
      status: "Completed",
      date: "14 Nov 2024",
    },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "Pending":
        return (
          <span className="px-3 py-1 rounded-full text-xs bg-pink-500/15 text-pink-600 flex items-center gap-1">
            <Clock size={14} /> Pending
          </span>
        );

      case "Completed":
        return (
          <span className="px-3 py-1 rounded-full text-xs bg-purple-600/20 text-purple-600 flex items-center gap-1">
            <CheckCircle size={14} /> Completed
          </span>
        );

      case "Document Required":
        return (
          <span className="px-3 py-1 rounded-full text-xs bg-red-500/15 text-red-500 flex items-center gap-1">
            <AlertTriangle size={14} /> Docs Required
          </span>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-6 md:p-8 text-gray-800 bg-white">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold bg-gradient-to-r from-purple-700 to-pink-500 bg-clip-text text-transparent flex items-center gap-3">
          <FileText className="text-pink-500" /> Request Inbox
        </h1>
        <p className="text-gray-500 mt-1">View all assigned form requests in one place</p>
      </div>

      {/* SEARCH BAR */}
      <div className="mb-6">
        <div className="flex items-center bg-white border border-pink-500/40 rounded-xl p-3 shadow-[0_0_20px_rgba(255,20,147,0.15)]">
          <Search size={20} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search by request ID, form name, user..."
            className="bg-transparent outline-none text-gray-700 ml-3 w-full"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      {/* REQUEST TABLE */}
      <div className="bg-white rounded-2xl border border-pink-500/40 shadow-[0_0_25px_rgba(255,20,147,0.15)] overflow-hidden">

        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-600 text-sm">
            <tr>
              <th className="p-4">Request ID</th>
              <th className="p-4">Form Name</th>
              <th className="p-4">Username</th>
              <th className="p-4">Status</th>
              <th className="p-4">Form Fill Date</th>
            </tr>
          </thead>

          <tbody className="text-gray-700">
            {requests
              .filter(
                (req) =>
                  req.id.toLowerCase().includes(query.toLowerCase()) ||
                  req.form.toLowerCase().includes(query.toLowerCase()) ||
                  req.user.toLowerCase().includes(query.toLowerCase())
              )
              .map((req, index) => (
                <tr
                  key={index}
                  className="border-b border-pink-500/10 hover:bg-gray-100 transition-all"
                >
                  <td className="p-4 font-medium">{req.id}</td>
                  <td className="p-4">{req.form}</td>
                  <td className="p-4">{req.user}</td>
                  <td className="p-4">{getStatusBadge(req.status)}</td>
                  <td className="p-4">{req.date}</td>
                </tr>
              ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default RequestInbox;
