import React, { useEffect, useState } from "react";
import { Users, FileText, Search } from "lucide-react";
import api from "../../api/axios";

export default function AllUsers() {
  const [usersData, setUsersData] = useState([ ]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await api.post("/user/getallUser");
        console.log("API RESPONSE 👉", res.data);

        setUsersData(res.data.users || res.data.AllUsers || []);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = usersData.filter(
    (user) =>
      user.username.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
      
  );

  const totalUsers = usersData.length;
  const totalRequests = usersData.reduce(
    (acc, user) => acc + (user.requests || 0),
    0
  );

  return (
    <div className="p-4 md:p-6 space-y-6 w-full">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">All Users</h1>

      {/* STATS */}
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

      {/* SEARCH */}
      <div className="mt-4 w-full md:w-1/3">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
          />
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead className="bg-purple-600 text-white">
            <tr>
              <th className="px-4 py-2 text-left">username</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">mobile</th>
              <th className="px-4 py-2 text-left">role</th>
              <th className="px-4 py-2 text-left">Requests</th>
               <th className="px-4 py-2 text-left">createdAt</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td className="px-4 py-2">{user.username}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.mobile}</td>
                <td className="px-4 py-2">{user.role}</td>
                <td className="px-4 py-2">{user.requests}</td>
                  <td className="px-4 py-2">{user.createdAt}</td>
                <td className="px-4 py-2">{user.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
