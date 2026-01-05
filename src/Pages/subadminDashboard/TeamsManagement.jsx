import React, { useState } from "react";
import { Search, Users, UserPlus, Edit, Trash2 } from "lucide-react";

const TeamsManagement = () => {
  const [query, setQuery] = useState("");

  const teams = [
    {
      name: "Verification Team",
      members: [
        { name: "Amit Sharma", status: "Active" },
        { name: "Riya Patel", status: "Busy" },
        { name: "Deepak Verma", status: "On Leave" },
      ],
    },
    {
      name: "Document Team",
      members: [
        { name: "Neha Singh", status: "Active" },
        { name: "Karan Mehta", status: "Active" },
      ],
    },
    {
      name: "Support Team",
      members: [
        { name: "Harsh Gupta", status: "Busy" },
        { name: "Sneha Rao", status: "Active" },
      ],
    },
  ];

  // Badge Color Logic
  const statusStyles = {
    Active: "text-green-600 bg-green-100 border-green-200",
    Busy: "text-yellow-600 bg-yellow-100 border-yellow-200",
    "On Leave": "text-red-600 bg-red-100 border-red-200",
  };

  // Filter Teams
  const filteredTeams = teams.filter((team) =>
    team.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-6 md:p-8 bg-white text-gray-800">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-semibold bg-gradient-to-r from-purple-700 to-pink-500 bg-clip-text text-transparent">
            Teams Management
          </h1>
          <p className="text-gray-500 mt-1">Create and manage your teams</p>
        </div>

        <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-purple-100 border border-purple-300 hover:bg-purple-200 transition-all text-purple-700 font-medium shadow-sm">
          <UserPlus size={20} className="text-purple-600" />
          Create Team
        </button>
      </div>

      {/* SEARCH BAR */}
      <div className="mb-8 max-w-md">
        <div className="flex items-center gap-3 bg-white border border-purple-200 rounded-xl px-4 py-2 shadow-[0_0_15px_rgba(128,0,255,0.1)]">
          <Search size={20} className="text-purple-600" />
          <input
            type="text"
            placeholder="Search teams..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent outline-none text-gray-800"
          />
        </div>
      </div>

      {/* TEAMS LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredTeams.map((team, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-white border border-purple-200 shadow-[0_0_25px_rgba(128,0,255,0.1)] hover:shadow-[0_0_35px_rgba(128,0,255,0.15)] transition-all duration-300 relative"
          >

            {/* EDIT / DELETE BUTTONS */}
            <div className="absolute top-4 right-4 flex gap-3">
              <button className="p-2 rounded-lg bg-white border border-purple-200 hover:bg-purple-50 transition-all">
                <Edit size={16} className="text-blue-600" />
              </button>
              <button className="p-2 rounded-lg bg-white border border-purple-200 hover:bg-red-50 transition-all">
                <Trash2 size={16} className="text-red-600" />
              </button>
            </div>

            {/* TEAM HEADER */}
            <div className="flex items-center gap-3 mb-4">
              <Users size={28} className="text-purple-600" />
              <h2 className="text-xl font-semibold">{team.name}</h2>
            </div>

            {/* TEAM MEMBERS */}
            <p className="text-gray-500 text-sm mb-3">Team Members</p>
            <div className="space-y-4">
              {team.members.map((member, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-between hover:bg-purple-100 transition-all"
                >
                  <p className="font-medium text-gray-800">{member.name}</p>
                  <span
                    className={`px-3 py-1 rounded-lg border text-xs font-medium ${statusStyles[member.status]}`}
                  >
                    {member.status}
                  </span>
                </div>
              ))}
            </div>

            {/* TEAM SIZE */}
            <p className="mt-6 text-sm text-gray-500">
              Total Members:{" "}
              <span className="text-gray-800 font-medium">{team.members.length}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamsManagement;
