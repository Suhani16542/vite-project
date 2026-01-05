import React, { useState } from "react";
import { Pencil, Trash2, UserX, KeyRound, Users, UserCheck, UserX as InactiveIcon, Search } from "lucide-react";

export default function Allemployee() {
  const originalData = [
    { name: "Aman Gupta", email: "aman@gmail.com", dept: "Sales", status: "Active" },
    { name: "Kirti Bhatt", email: "Kirti@gmail.com", dept: "HR", status: "Inactive" },
    { name: "priya jamre", email: "Priya@gmail.com", dept: "HR", status: "Inactive" },
    { name: "Neha Sharma", email: "Neha@gmail.com", dept: "seles", status: "Active" },
    { name: "Saniya mehra", email: "Saniya@gmail.com", dept: "HR", status: "Inactive" },
  ];

  const [search, setSearch] = useState("");

  const data = originalData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.email.toLowerCase().includes(search.toLowerCase()) ||
    item.dept.toLowerCase().includes(search.toLowerCase()) ||
    item.status.toLowerCase().includes(search.toLowerCase())
  );

  const totalEmp = originalData.length;
  const activeEmp = originalData.filter((e) => e.status === "Active").length;
  const inactiveEmp = originalData.filter((e) => e.status === "Inactive").length;

  return (
    <div className=" p-8 bg-gray-50 min-h-screen">

      {/* PAGE TITLE + SEARCH BAR + ADD BUTTON */}
      <div className="flex justify-between items-center mb-6">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-purple-700">Employee Management</h1>

        {/* Search Bar */}
        <div className="flex items-center bg-white shadow border border-gray-300 px-3 py-2 rounded-xl w-72">
          <Search className="text-gray-500 mr-2" size={20} />
          <input
            type="text"
            placeholder="Search Employee..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none text-gray-700"
          />
        </div>

        {/* Add Button */}
        <button className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-xl shadow-md transition">
          + Add Employee
        </button>
      </div>

      {/* TOP CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">

        {/* Total Employees */}
        <div className="bg-white shadow-lg p-6 rounded-xl border border-gray-200 flex gap-4 items-center hover:shadow-xl transition">
          <Users size={40} className="text-purple-700" />
          <div>
            <h3 className="text-lg font-bold text-gray-700">Total Employees</h3>
            <p className="text-2xl font-bold text-purple-700">{totalEmp}</p>
          </div>
        </div>

        {/* Active Employees */}
        <div className="bg-white shadow-lg p-6 rounded-xl border border-gray-200 flex gap-4 items-center hover:shadow-xl transition">
          <UserCheck size={40} className="text-green-600" />
          <div>
            <h3 className="text-lg font-bold text-gray-700">Active Employees</h3>
            <p className="text-2xl font-bold text-green-600">{activeEmp}</p>
          </div>
        </div>

        {/* Inactive Employees */}
        <div className="bg-white shadow-lg p-6 rounded-xl border border-gray-200 flex gap-4 items-center hover:shadow-xl transition">
          <InactiveIcon size={40} className="text-red-600" />
          <div>
            <h3 className="text-lg font-bold text-gray-700">Inactive Employees</h3>
            <p className="text-2xl font-bold text-red-600">{inactiveEmp}</p>
          </div>
        </div>
      </div>

      {/* EMPLOYEE TABLE */}
      <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-gray-200">
        <table className="w-full">
          <thead className="bg-purple-700 text-white">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Department</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, i) => (
              <tr
                key={i}
                className="border-b hover:bg-pink-50 transition"
              >
                <td className="p-4 text-gray-700 font-medium">{item.name}</td>
                <td className="p-4 text-gray-600">{item.email}</td>
                <td className="p-4 text-gray-600">{item.dept}</td>

                <td
                  className={`p-4 font-semibold ${
                    item.status === "Active" ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {item.status}
                </td>

                <td className="p-4 flex gap-4 justify-center">
                  <Pencil className="text-blue-600 cursor-pointer hover:scale-110 transition" />
                  <Trash2 className="text-red-600 cursor-pointer hover:scale-110 transition" />
                  <KeyRound className="text-yellow-500 cursor-pointer hover:scale-110 transition" />
                  <UserX className="text-purple-700 cursor-pointer hover:scale-110 transition" />
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}
