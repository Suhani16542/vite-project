import React, { useState } from "react";
import { Search, PlusCircle, Pencil, Trash2, FileText } from "lucide-react";
import api from "../../api/axios"; // your axios instance

const FormManagement = () => {
  const [search, setSearch] = useState("");
  const [forms, setForms] = useState([]); // state to store forms
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false); // modal visibility

  // Input states for new form
  const [newForm, setNewForm] = useState({
    title: "",
    description: "",
    category: "",
    examAuthority: "",
    officialWebsite: "",
    applicationStartDate: "",
    applicationEndDate: "",
    examDate: "",
    resultDate: "",
    formFees: 0,
    platformCharge: 0,
    numberOfVacancies: 0,
    eligibilityCriteria: "",
    requiredDocuments: [{ name: "", isMandatory: true, allowedFormats: ["pdf", "jpg", "png"], maxSizeMB: 2, source: "Upload" }],
    extraDetails: "",
    instructions: "",
    termsAndConditions: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewForm({ ...newForm, [name]: value });
  };

  // Handle document change
  const handleDocChange = (index, field, value) => {
    const docs = [...newForm.requiredDocuments];
    docs[index][field] = value;
    setNewForm({ ...newForm, requiredDocuments: docs });
  };

  // Add new document field
  const addDocumentField = () => {
    setNewForm({
      ...newForm,
      requiredDocuments: [
        ...newForm.requiredDocuments,
        { name: "", isMandatory: true, allowedFormats: ["pdf", "jpg", "png"], maxSizeMB: 2, source: "Upload" },
      ],
    });
  };

  // Remove document field
  const removeDocumentField = (index) => {
    const docs = [...newForm.requiredDocuments];
    docs.splice(index, 1);
    setNewForm({ ...newForm, requiredDocuments: docs });
  };

  // Create new form API call
  const createNewForm = async () => {
    try {
      setLoading(true);
      const formData = {
        ...newForm,
        totalPayable: Number(newForm.formFees) + Number(newForm.platformCharge),
      };

      const response = await api.post("/form/create", formData); // ✅ sahi


      if (response.data.success) {
        setForms([...forms, response.data.data]);
        alert("Form created successfully!");
        setShowForm(false); // close modal
        // Reset form
        setNewForm({
          title: "",
          description: "",
          category: "",
          examAuthority: "",
          officialWebsite: "",
          applicationStartDate: "",
          applicationEndDate: "",
          examDate: "",
          resultDate: "",
          formFees: 0,
          platformCharge: 0,
          numberOfVacancies: 0,
          eligibilityCriteria: "",
          requiredDocuments: [{ name: "", isMandatory: true, allowedFormats: ["pdf", "jpg", "png"], maxSizeMB: 2, source: "Upload" }],
          extraDetails: "",
          instructions: "",
          termsAndConditions: "",
        });
      } else {
        alert(response.data.message || "Failed to create form");
      }
    } catch (error) {
      console.error(error);
      alert("Error creating form: " + (error.response?.data?.message || error.message));
    } finally {
      setLoading(false);
    }
  };

  const filteredForms = forms.filter((form) =>
    form.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="p-6 space-y-8 min-h-screen bg-white text-black">

      {/* TOP CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-xl border border-purple-700 shadow-lg">
          <h3 className="text-xl font-semibold text-purple-700">Total Forms</h3>
          <p className="text-3xl font-bold mt-2 text-pink-600">{forms.length}</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-purple-700 shadow-lg">
          <h3 className="text-xl font-semibold text-purple-700">Active Forms</h3>
          <p className="text-3xl font-bold mt-2 text-pink-600">{forms.filter(f => f.isActive).length}</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-purple-700 shadow-lg">
          <h3 className="text-xl font-semibold text-purple-700">Pending Approvals</h3>
          <p className="text-3xl font-bold mt-2 text-pink-600">0</p>
        </div>
      </div>

      {/* HEADER */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <h1 className="text-2xl font-semibold text-purple-700">Form Management</h1>
        <div className="relative">
          <Search size={18} className="absolute left-3 top-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search form..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-white text-black pl-10 pr-4 py-2 rounded-xl outline-none w-64 border border-purple-700 focus:ring-2 focus:ring-pink-600 transition-all"
          />
        </div>
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-700 text-white hover:bg-purple-800 transition"
          onClick={() => setShowForm(true)}
        >
          <PlusCircle size={18} />
          Create New Form
        </button>
      </div>

      {/* MODAL FOR NEW FORM */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-10 z-50 overflow-auto">
          <div className="bg-white p-6 rounded-xl w-full max-w-2xl shadow-lg m-4">
            <h2 className="text-xl font-semibold mb-4 text-purple-700">New Form</h2>
            <div className="space-y-3 max-h-[70vh] overflow-y-auto">
              <input name="title" value={newForm.title} onChange={handleChange} placeholder="Title" className="w-full border p-2 rounded" />
              <input name="description" value={newForm.description} onChange={handleChange} placeholder="Description" className="w-full border p-2 rounded" />
              <input name="category" value={newForm.category} onChange={handleChange} placeholder="Category" className="w-full border p-2 rounded" />
              <input name="examAuthority" value={newForm.examAuthority} onChange={handleChange} placeholder="Exam Authority" className="w-full border p-2 rounded" />
              <input name="officialWebsite" value={newForm.officialWebsite} onChange={handleChange} placeholder="Official Website" className="w-full border p-2 rounded" />
              <input type="date" name="applicationStartDate" value={newForm.applicationStartDate} onChange={handleChange} className="w-full border p-2 rounded" />
              <input type="date" name="applicationEndDate" value={newForm.applicationEndDate} onChange={handleChange} className="w-full border p-2 rounded" />
              <input type="number" name="formFees" value={newForm.formFees} onChange={handleChange} placeholder="Form Fees" className="w-full border p-2 rounded" />
              <input type="number" name="platformCharge" value={newForm.platformCharge} onChange={handleChange} placeholder="Platform Charge" className="w-full border p-2 rounded" />
              
              <h3 className="font-semibold mt-3">Required Documents</h3>
              {newForm.requiredDocuments.map((doc, index) => (
                <div key={index} className="flex gap-2 mb-2 items-center">
                  <input
                    value={doc.name}
                    onChange={(e) => handleDocChange(index, "name", e.target.value)}
                    placeholder="Document Name"
                    className="flex-1 border p-2 rounded"
                  />
                  <button onClick={() => removeDocumentField(index)} className="bg-red-500 text-white px-2 rounded">X</button>
                </div>
              ))}
              <button onClick={addDocumentField} className="bg-purple-700 text-white px-3 py-1 rounded">Add Document</button>
            </div>

            <div className="mt-4 flex justify-end gap-3">
              <button className="px-4 py-2 bg-gray-300 rounded" onClick={() => setShowForm(false)}>Cancel</button>
              <button className="px-4 py-2 bg-purple-700 text-white rounded" onClick={createNewForm} disabled={loading}>
                {loading ? "Creating..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TABLE */}
      <div className="bg-white p-6 rounded-2xl border border-purple-700">
        <h2 className="text-xl font-semibold mb-5 text-purple-700">Forms Overview</h2>
        <div className="overflow-x-auto rounded-xl">
          <table className="w-full border-collapse text-black">
            <thead className="bg-purple-100 text-purple-700">
              <tr>
                <th className="py-3 px-4 text-left">Form Title</th>
                <th className="py-3 px-4 text-left">Start Date</th>
                <th className="py-3 px-4 text-left">End Date</th>
                <th className="py-3 px-4 text-left">Required Documents</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredForms.map((form) => (
                <tr key={form._id} className="border-t border-gray-300 hover:bg-gray-100 transition">
                  <td className="py-3 px-4 font-medium flex items-center gap-2">
                    <FileText size={18} className="text-purple-700" />
                    {form.title}
                  </td>
                  <td className="py-3 px-4 text-gray-700">{new Date(form.applicationStartDate).toLocaleDateString()}</td>
                  <td className="py-3 px-4 text-gray-700">{new Date(form.applicationEndDate).toLocaleDateString()}</td>
                  <td className="py-3 px-4">
                    <div className="flex flex-wrap gap-2">
                      {form.requiredDocuments.map((doc, index) => (
                        <span key={index} className="text-xs px-3 py-1 rounded-lg bg-purple-100 text-purple-700 border border-purple-700">
                          {doc.name}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3 px-4 flex gap-3">
                    <button className="p-2 rounded-lg bg-purple-100 text-purple-700 hover:bg-purple-200 transition">
                      <Pencil size={18} />
                    </button>
                    <button className="p-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 transition">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredForms.length === 0 && (
                <tr>
                  <td colSpan="5" className="py-4 text-center text-gray-500 italic">
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
