import React, { useEffect, useState } from "react";
import {
  Pencil,
  Trash2,
  UserX,
  KeyRound,
  Users,
  UserCheck,
  UserX as InactiveIcon,
  Search,
  X
} from "lucide-react";
import api from "../../api/axios";

export default function AllEmployee() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  const [openModal, setOpenModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    mobile: ""
  });

  const getAllEmployees = async () => {
    try {
      const res = await api.get("/employees/get-all");
      setEmployees(res.data.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllEmployees();
  }, []);

  const createEmployee = async (e) => {
    e.preventDefault();
    await api.post("/employees/create", formData);
    setOpenModal(false);
    resetForm();
    getAllEmployees();
  };

  const updateEmployee = async (e) => {
    e.preventDefault();
    await api.put(`/employees/update/${selectedId}`, formData);
    setEditModal(false);
    resetForm();
    getAllEmployees();
  };

  const deleteEmployee = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    await api.delete(`/employees/delete/${id}`);
    getAllEmployees();
  };

  const resetForm = () => {
    setFormData({ username: "", email: "", password: "", mobile: "" });
    setSelectedId(null);
  };

  const openEdit = (emp) => {
    setSelectedId(emp._id);
    setFormData({
      username: emp.username,
      email: emp.email,
      password: "",
      mobile: emp.mobile || ""
    });
    setEditModal(true);
  };

  const data = employees.filter(
    (e) =>
      e.username?.toLowerCase().includes(search.toLowerCase()) ||
      e.email?.toLowerCase().includes(search.toLowerCase())
  );

  const totalEmp = employees.length;
  const activeEmp = employees.filter(e => e.is_active !== false).length;
  const inactiveEmp = totalEmp - activeEmp;

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-white min-h-screen">

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-green-600">
          Employee Management
        </h1>

        <div className="flex items-center bg-white border shadow px-3 py-2 rounded-xl w-full sm:w-72">
          <Search size={18} className="mr-2 text-gray-500" />
          <input
            placeholder="Search Employee..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none"
          />
        </div>

        <button
          onClick={() => setOpenModal(true)}
          className="bg-black text-white px-5 py-2 rounded-xl hover:bg-green-600 w-full sm:w-auto"
        >
          + Add Employee
        </button>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <StatCard title="Total Employees" value={totalEmp} icon={<Users />} />
        <StatCard title="Active Employees" value={activeEmp} icon={<UserCheck />} />
        <StatCard title="Inactive Employees" value={inactiveEmp} icon={<InactiveIcon />} />
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto shadow rounded-xl border">
        <table className="min-w-[700px] w-full">

          {/* HEADER – GREEN */}
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Role</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          {/* BODY – BLACK */}
          <tbody className="bg-black text-white">
            {data.map((item) => (
              <tr
                key={item._id}
                className="border-b border-gray-700 hover:bg-gray-900 transition"
              >
                <td className="p-4">{item.username}</td>
                <td className="p-4">{item.email}</td>

                {/* ROLE – DARK GREEN */}
                <td className="p-4 font-semibold text-green-400 capitalize">
                  {item.role}
                </td>

                <td className="p-4 flex gap-4 justify-center">
                  <Pencil
                    onClick={() => openEdit(item)}
                    className="cursor-pointer text-blue-400 hover:scale-110"
                  />
                  <Trash2
                    onClick={() => deleteEmployee(item._id)}
                    className="cursor-pointer text-red-400 hover:scale-110"
                  />
                  <KeyRound className="cursor-pointer text-yellow-400 hover:scale-110" />
                  <UserX className="cursor-pointer text-gray-400 hover:scale-110" />
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {openModal && (
        <Modal
          title="Create Employee"
          onClose={() => setOpenModal(false)}
          onSubmit={createEmployee}
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {editModal && (
        <Modal
          title="Update Employee"
          onClose={() => setEditModal(false)}
          onSubmit={updateEmployee}
          formData={formData}
          setFormData={setFormData}
        />
      )}
    </div>
  );
}

/* =========================
   STAT CARD
========================= */
function StatCard({ title, value, icon }) {
  return (
    <div className="bg-black text-white p-5 rounded-xl flex items-center gap-4">
      <div className="text-green-500">{icon}</div>
      <div>
        <p className="text-gray-300">{title}</p>
        <h2 className="text-2xl font-bold text-green-500">{value}</h2>
      </div>
    </div>
  );
}

/* =========================
   MODAL
========================= */
function Modal({ title, onClose, onSubmit, formData, setFormData }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-black text-white w-full max-w-md rounded-xl p-6 relative">
        <X onClick={onClose} className="absolute right-4 top-4 cursor-pointer text-gray-400" />

        <h2 className="text-xl font-bold mb-4 text-green-500">{title}</h2>

        <form onSubmit={onSubmit} className="space-y-3">
          {["username", "email", "password", "mobile"].map((field) => (
            <input
              key={field}
              type={field === "password" ? "password" : "text"}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={formData[field]}
              onChange={(e) =>
                setFormData({ ...formData, [field]: e.target.value })
              }
              className="w-full p-2 rounded bg-white text-black"
            />
          ))}

          <button className="w-full bg-green-600 py-2 rounded hover:bg-green-700">
            {title}
          </button>
        </form>
      </div>
    </div>
  );
}
