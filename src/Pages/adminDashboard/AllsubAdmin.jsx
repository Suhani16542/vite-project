import React, { useState } from "react";
import {
  Pencil,
  Trash2,
  KeyRound,
  UserX,
  Users,
  UserCheck,
  UserX as UserInactive,
  Search
} from "lucide-react";

export default function AllsubAdmin() {
  const originalData = [
    { name: "Rahul Sharma", email: "rahul@gmail.com", role: "Member", status: "Active" },
    { name: "Pooja Verma", email: "pooja@gmail.com", role: "Member", status: "Inactive" },
    { name: "Saloni Yadav", email: "saloni@gmail.com", role: "Member", status: "Inactive" },
    { name: "Suhani Yadav", email: "suhani@gmail.com", role: "Member", status: "Active" },
    { name: "Aakansha Yadav", email: "aakansha@gmail.com", role: "Member", status: "Inactive" },
  ];

  const [search, setSearch] = useState("");

  const data = originalData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.email.toLowerCase().includes(search.toLowerCase()) ||
    item.role.toLowerCase().includes(search.toLowerCase()) ||
    item.status.toLowerCase().includes(search.toLowerCase())
  );

  const totalMembers = originalData.length;
  const activeMembers = originalData.filter((x) => x.status === "Active").length;
  const inactiveMembers = originalData.filter((x) => x.status === "Inactive").length;

  return (
    <div className=" p-8 bg-gray-50 min-h-screen">

      {/* TITLE + SEARCH + ADD BUTTON */}
      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold text-purple-700">Member Management</h1>

        {/* Search Bar */}
        <div className="flex items-center bg-white shadow border border-gray-300 px-3 py-2 rounded-xl w-72">
          <Search className="text-gray-500 mr-2" size={20} />
          <input
            type="text"
            placeholder="Search Member..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none text-gray-700"
          />
        </div>

        <button className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-xl shadow-md transition">
          + Add Member
        </button>
      </div>

      {/* TOP CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">

        <div className="bg-white shadow-lg border border-gray-200 p-6 rounded-xl flex items-center gap-4 hover:shadow-xl transition">
          <Users className="text-purple-700" size={40} />
          <div>
            <h3 className="text-lg font-bold text-gray-700">Total Members</h3>
            <p className="text-2xl font-bold text-purple-700">{totalMembers}</p>
          </div>
        </div>

        <div className="bg-white shadow-lg border border-gray-200 p-6 rounded-xl flex items-center gap-4 hover:shadow-xl transition">
          <UserCheck className="text-green-600" size={40} />
          <div>
            <h3 className="text-lg font-bold text-gray-700">Active Members</h3>
            <p className="text-2xl font-bold text-green-600">{activeMembers}</p>
          </div>
        </div>

        <div className="bg-white shadow-lg border border-gray-200 p-6 rounded-xl flex items-center gap-4 hover:shadow-xl transition">
          <UserInactive className="text-red-600" size={40} />
          <div>
            <h3 className="text-lg font-bold text-gray-700">Inactive Members</h3>
            <p className="text-2xl font-bold text-red-600">{inactiveMembers}</p>
          </div>
        </div>

      </div>

      {/* TABLE */}
      <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-gray-200">
        <table className="w-full">
          <thead className="bg-purple-700 text-white">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Role</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, i) => (
              <tr key={i} className="border-b hover:bg-pink-50 transition">
                <td className="p-4 font-medium text-gray-700">{item.name}</td>
                <td className="p-4 text-gray-600">{item.email}</td>
                <td className="p-4 text-gray-600">{item.role}</td>

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
