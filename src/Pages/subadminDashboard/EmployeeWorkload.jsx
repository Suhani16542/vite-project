import React, { useState } from "react";
import { Search } from "lucide-react";

const EmployeeWorkload = () => {
  const [query, setQuery] = useState("");

  const employees = [
    {
      id: "EMP1024",
      name: "Amit Sharma",
      lastActive: "12 Aug 2024, 3:14 PM",
      progress: 70, // percentage of tasks done today
    },
    {
      id: "EMP1033",
      name: "Riya Patel",
      lastActive: "12 Aug 2024, 2:50 PM",
      progress: 40,
    },
    {
      id: "EMP1040",
      name: "Deepak Verma",
      lastActive: "12 Aug 2024, 1:30 PM",
      progress: 90,
    },
  ];

  const filtered = employees.filter((emp) =>
    emp.id.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-[#0b0b0d] text-gray-300 p-6">
      {/* Page Title */}
      <h2 className="text-2xl font-semibold mb-6">Employee Workload</h2>

      {/* Search Bar */}
      <div className="max-w-md mb-6 bg-[#121216] px-4 py-2 rounded-xl shadow-[0_0_20px_rgba(128,0,255,0.15)] flex items-center gap-2">
        <Search size={18} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search by Employee ID..."
          className="bg-transparent outline-none w-full text-sm text-gray-300 placeholder-gray-500"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Employees Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((emp, idx) => (
          <div
            key={idx}
            className="bg-[#121216] p-5 rounded-2xl shadow-[0_0_25px_rgba(128,0,255,0.2)] border border-[#1e1e24]"
          >
            {/* Name + ID */}
            <h3 className="text-lg font-semibold">{emp.name}</h3>
            <p className="text-sm text-gray-400">{emp.id}</p>

            {/* Last Active */}
            <p className="mt-3 text-sm text-gray-400">
              Last Active:{" "}
              <span className="text-gray-300">{emp.lastActive}</span>
            </p>

            {/* Progress Bar Label */}
            <div className="mt-4 flex justify-between text-sm">
              <span className="text-gray-400">Today's Progress</span>
              <span className="text-gray-300">{emp.progress}%</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-[#1e1e24] rounded-full overflow-hidden mt-2">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
                style={{ width: `${emp.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EmployeeWorkload;