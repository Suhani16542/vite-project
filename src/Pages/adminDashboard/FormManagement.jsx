import React, { useState, useEffect } from "react";
import {
  Search,
  PlusCircle,
  Pencil,
  Trash2,
  FileText,
  Eye,
} from "lucide-react";
import api from "../../api/axios";
import { NavLink } from "react-router-dom";
import ApiStatusModal from "../../Component/ApiStatusModal";
import EditFormModal from "./EditFormModal";

const FormManagement = () => {
  const [search, setSearch] = useState("");
  const [allFormData, setAllFormData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [editId, setEditId] = useState(null);

  const [modal, setModal] = useState({
    open: false,
    type: "success",
    title: "",
    message: "",
  });

  const openModal = (data) => setModal({ open: true, ...data });

  /* ================= GET ALL FORMS ================= */
  useEffect(() => {
    const getAllForm = async () => {
      try {
        const res = await api.get("/form/getAllForm");
        if (res.data.success) {
          setAllFormData(res.data.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getAllForm();
  }, [refresh]);

  /* ================= DELETE FORM ================= */
  const deleteForm = async (id) => {
    try {
      const res = await api.get(`/form/getdelete/${id}`);
      if (res.data.success) {
        openModal({
          type: "success",
          title: "Deleted Successfully",
          message: res.data.message,
        });
        setRefresh((prev) => !prev);
      }
    } catch (err) {
      console.log(err);
    }
  };

  /* ================= SEARCH FILTER ================= */
  const filteredForms = allFormData.filter((form) =>
    form.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-white p-4 sm:p-6 space-y-6">
      {/* STATUS MODAL */}
      <ApiStatusModal
        open={modal.open}
        type={modal.type}
        title={modal.title}
        message={modal.message}
        onClose={() => setModal({ ...modal, open: false })}
      />

      {/* EDIT MODAL */}
      {editId && (
        <EditFormModal
          formId={editId}
          onClose={() => setEditId(null)}
          onSuccess={() => {
            setEditId(null);
            setRefresh((p) => !p);
          }}
        />
      )}

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-2xl sm:text-3xl font-semibold text-green-600">
          Form Management
        </h1>

        <div className="flex flex-col sm:flex-row gap-3">
          {/* SEARCH */}
          <div className="relative">
            <Search size={18} className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search form..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                bg-white text-black pl-10 pr-4 py-2 rounded-xl
                outline-none w-full sm:w-64
                border border-gray-400
                focus:border-green-500 transition
              "
            />
          </div>

          {/* CREATE BUTTON */}
          <NavLink to="/adminDashboard/form-request/FormCreate">
            <button
              className="
                flex items-center justify-center gap-2
                px-5 py-2 rounded-xl
                bg-green-600 text-black font-semibold
                hover:bg-green-700 transition
              "
            >
              <PlusCircle size={18} />
              Create New Form
            </button>
          </NavLink>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-black rounded-2xl p-4 sm:p-6 shadow-xl">
        <h2 className="text-lg sm:text-xl font-semibold mb-4 text-green-500">
          Forms Overview
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-sm text-gray-200">
            <thead className="bg-green-600 text-black">
              <tr>
                <th className="py-3 px-4 text-left">Form Title</th>
                <th className="py-3 px-4 text-left">Start Date</th>
                <th className="py-3 px-4 text-left">End Date</th>
                <th className="py-3 px-4 text-left">Documents</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredForms.map((form) => (
                <tr
                  key={form._id}
                  className="border-t border-gray-700 hover:bg-gray-900 transition"
                >
                  <td className="py-3 px-4 flex items-center gap-2 font-medium">
                    <FileText size={16} className="text-green-400" />
                    {form.title}
                  </td>

                  <td className="py-3 px-4">
                    {form.applicationStartDate}
                  </td>
                  <td className="py-3 px-4">
                    {form.applicationEndDate}
                  </td>

                  {/* DOCUMENTS */}
                  <td className="py-3 px-4">
                    <div className="flex flex-wrap gap-2">
                      {form.requiredDocuments?.map((doc, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-lg
                          bg-gray-800 text-green-400 border border-green-700"
                        >
                          {doc.name}
                        </span>
                      ))}
                    </div>
                  </td>

                  {/* ACTIONS */}
                  <td className="py-3 px-4 flex gap-2">
                    {/* VIEW */}
                    <NavLink
                      to={`/adminDashboard/form-request/viewdetails/${form._id}`}
                      className="p-2 rounded-lg bg-gray-800 text-blue-400 hover:bg-gray-700"
                    >
                      <Eye size={16} />
                    </NavLink>

                    {/* EDIT */}
                    <button
                      onClick={() => setEditId(form._id)}
                      className="p-2 rounded-lg bg-gray-800 text-green-400 hover:bg-gray-700"
                    >
                      <Pencil size={16} />
                    </button>

                    {/* DELETE */}
                    <button
                      onClick={() => deleteForm(form._id)}
                      className="p-2 rounded-lg bg-gray-800 text-red-500 hover:bg-gray-700"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}

              {filteredForms.length === 0 && (
                <tr>
                  <td
                    colSpan="5"
                    className="py-6 text-center text-gray-400 italic"
                  >
                    No forms found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default FormManagement;
