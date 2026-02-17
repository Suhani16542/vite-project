import React, { useEffect, useState } from "react";
import {
  Pencil,
  Trash2,
  KeyRound,
  UserX,
  Search,
  X
} from "lucide-react";
import api from "../../api/axios";

export default function AllSubAdmin() {

  /* ================= STATES ================= */
  const [subAdmins, setSubAdmins] = useState([]);
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    mobile: ""
  });

  /* ================= GET ALL ================= */
  const getAllSubAdmins = async () => {
    try {
      const res = await api.get("sub-admin/get-all");
      setSubAdmins(res.data.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllSubAdmins();
  }, []);

  /* ================= CREATE / UPDATE ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      await api.put(`sub-admin/update/${editId}`, formData);
    } else {
      await api.post("sub-admin/create", formData);
    }

    setOpenModal(false);
    setEditId(null);
    setFormData({
      username: "",
      email: "",
      password: "",
      mobile: ""
    });

    getAllSubAdmins();
  };

  /* ================= DELETE ================= */
  const deleteSubAdmin = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    await api.delete(`sub-admin/delete/${id}`);
    getAllSubAdmins();
  };

  /* ================= FILTER ================= */
  const data = subAdmins.filter(
    (item) =>
      item.username?.toLowerCase().includes(search.toLowerCase()) ||
      item.email?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-white min-h-screen">

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between items-start lg:items-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-green-700">
          Sub-Admin Management
        </h1>

        <div className="flex items-center bg-black text-white px-3 py-2 rounded-xl w-full sm:w-72">
          <Search size={18} className="mr-2 text-green-400" />
          <input
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent outline-none placeholder:text-gray-400"
          />
        </div>

        <button
          onClick={() => {
            setEditId(null);
            setFormData({
              username: "",
              email: "",
              password: "",
              mobile: ""
            });
            setOpenModal(true);
          }}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl w-full sm:w-auto"
        >
          + Add Sub-Admin
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-black rounded-xl overflow-x-auto border border-gray-800">
        <table className="min-w-[700px] w-full text-white">
          <thead className="bg-green-700">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Role</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr
                key={item._id}
                className="border-b border-gray-800 hover:bg-gray-900 transition"
              >
                <td className="p-4">{item.username}</td>
                <td className="p-4">{item.email}</td>
                <td className="p-4 font-semibold text-green-400">
                  {item.role}
                </td>
                <td className="p-4 flex gap-4 justify-center">
                  <Pencil
                    className="text-blue-400 cursor-pointer"
                    onClick={() => {
                      setEditId(item._id);
                      setFormData({
                        username: item.username,
                        email: item.email,
                        password: "",
                        mobile: item.mobile
                      });
                      setOpenModal(true);
                    }}
                  />
                  <Trash2
                    className="text-red-500 cursor-pointer"
                    onClick={() => deleteSubAdmin(item._id)}
                  />
                  <KeyRound className="text-yellow-400 cursor-pointer" />
                  <UserX className="text-green-400 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50">
          <div className="bg-white w-full max-w-md rounded-xl p-6 relative">

            <X
              onClick={() => setOpenModal(false)}
              className="absolute right-4 top-4 cursor-pointer"
            />

            <h2 className="text-xl font-bold mb-4 text-green-700">
              {editId ? "Update Sub-Admin" : "Create Sub-Admin"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                placeholder="Username"
                required
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                className="w-full border p-2 rounded focus:ring-2 focus:ring-green-500"
              />

              <input
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full border p-2 rounded focus:ring-2 focus:ring-green-500"
              />

              <input
                placeholder="Password"
                type="password"
                required={!editId}
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full border p-2 rounded focus:ring-2 focus:ring-green-500"
              />

              <input
                placeholder="Mobile"
                required
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
                className="w-full border p-2 rounded focus:ring-2 focus:ring-green-500"
              />

              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded">
                {editId ? "Update" : "Create"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
