import React, { useState } from "react";
import { Users, FileText, Search } from "lucide-react";


export default function AllUsers() {
  const usersData = [
    { name: "Arjun Mehta", email: "arjun@example.com", phone: "9876543210", status: "Active", join: "12 Nov 2025", requests: 5 },
    { name: "Priya Sharma", email: "priya@example.com", phone: "9876543211", status: "Active", join: "14 Nov 2025", requests: 8 },
    { name: "Rahul Verma", email: "rahul@example.com", phone: "9876543212", status: "Active", join: "15 Nov 2025", requests: 2 },
    { name: "Vikas Gupta", email: "vikas@example.com", phone: "9876543213", status: "Active", join: "18 Nov 2025", requests: 4 },
    { name: "Kavita Jain", email: "kavita@example.com", phone: "9876543214", status: "Active", join: "16 Nov 2025", requests: 6 },
    { name: "Suman Das", email: "suman@example.com", phone: "9876543215", status: "Deactivated", join: "15 Nov 2025", requests: 1 },
  ];

  const [search, setSearch] = useState("");

  const filteredUsers = usersData.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  const totalUsers = usersData.length;
  const totalRequests = usersData.reduce((acc, user) => acc + user.requests, 0);

  return (
    <div className="p-4 md:p-6 space-y-6 w-full">
      {/* -------- HEADER -------- */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">All Users</h1>

      {/* -------- STAT CARDS -------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-gradient-to-r from-purple-700 to-pink-300 text-white rounded-lg p-4 flex items-center gap-4 shadow-lg">
          <Users size={32} />
          <div>
            <p className="text-sm">Total Users</p>
            <h2 className="text-xl font-bold">{totalUsers}</h2>
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-700 to-pink-300 text-white rounded-lg p-4 flex items-center gap-4 shadow-lg">
          <FileText size={32} />
          <div>
            <p className="text-sm">Total Requests</p>
            <h2 className="text-xl font-bold">{totalRequests}</h2>
          </div>
        </div>
      </div>

      {/* -------- SEARCH BAR WITH ICON -------- */}
      <div className="mt-4 w-full md:w-1/3">
        <div className="relative text-gray-400 focus-within:text-gray-600">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Search size={20} />
          </span>
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      {/* -------- USER TABLE -------- */}
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full bg-white rounded-lg shadow divide-y divide-gray-200">
          <thead className="bg-gradient-to-r from-purple-700 to-pink-300 text-white">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold">Name</th>
              <th className="px-4 py-2 text-left text-sm font-semibold">Email</th>
              <th className="px-4 py-2 text-left text-sm font-semibold">Phone</th>
              <th className="px-4 py-2 text-left text-sm font-semibold">Join Date</th>
              <th className="px-4 py-2 text-left text-sm font-semibold">Requests</th>
              <th className="px-4 py-2 text-left text-sm font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-4 py-3">{user.name}</td>
                  <td className="px-4 py-3">{user.email}</td>
                  <td className="px-4 py-3">{user.phone}</td>
                  <td className="px-4 py-3">{user.join}</td>
                  <td className="px-4 py-3">{user.requests}</td>
                  <td className={`px-4 py-3 font-medium ${user.status === "Active" ? "text-green-600" : "text-red-500"}`}>
                    {user.status}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-4 py-3 text-center text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
