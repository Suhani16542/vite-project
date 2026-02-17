import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";

/* ================= SLUG GENERATOR ================= */
const generateSlug = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const CreateForm = ({ isEdit = false, editData = null, onSuccess }) => {
  const navigate = useNavigate();

  /* ================= FORM STATE ================= */
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    mainCategory: "",
    subCategory: "",
    applicationStartDate: "",
    applicationEndDate: "",
    formFees: "",
    platformCharge: "",
    termsAndConditions: "",
  });

  const [mainCategories, setMainCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  /* ================= AUTO FILL (EDIT MODE) ================= */
  useEffect(() => {
    if (isEdit && editData) {
      setFormData({
        title: editData.title || "",
        slug: editData.slug || "",
        description: editData.description || "",
        mainCategory: editData.mainCategory?._id || "",
        subCategory: editData.subCategory?._id || "",
        applicationStartDate: editData.applicationStartDate
          ? editData.applicationStartDate.slice(0, 10)
          : "",
        applicationEndDate: editData.applicationEndDate
          ? editData.applicationEndDate.slice(0, 10)
          : "",
        formFees: editData.formFees || "",
        platformCharge: editData.platformCharge || "",
        termsAndConditions: editData.termsAndConditions || "",
      });
    }
  }, [isEdit, editData]);

  /* ================= FETCH MAIN CATEGORY ================= */
  useEffect(() => {
    const fetchMain = async () => {
      try {
        const res = await api.get("/categories/main");
        setMainCategories(res.data?.data || []);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMain();
  }, []);

  /* ================= FETCH SUB CATEGORY ================= */
  useEffect(() => {
    if (!formData.mainCategory) {
      setSubCategories([]);
      return;
    }

    const selectedMain = mainCategories.find(
      (m) => m._id === formData.mainCategory
    );
    if (!selectedMain) return;

    const fetchSub = async () => {
      try {
        const res = await api.get(
          `/categories/${selectedMain.slug}/sub`
        );
        setSubCategories(res.data?.data || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSub();
  }, [formData.mainCategory, mainCategories]);

  /* ================= CHANGE HANDLER ================= */
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "title" && !isEdit) {
      setFormData((p) => ({
        ...p,
        title: value,
        slug: generateSlug(value),
      }));
      return;
    }

    if (name === "mainCategory") {
      setFormData((p) => ({
        ...p,
        mainCategory: value,
        subCategory: "",
      }));
      return;
    }

    setFormData((p) => ({ ...p, [name]: value }));
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { ...formData };
    if (!payload.subCategory) delete payload.subCategory;

    try {
      if (isEdit) {
        await api.get(`/form/getUpdate/${editData._id}`, payload);
        alert("✅ Form Updated Successfully");
      } else {
        await api.post("/form/create", payload);
        alert("✅ Form Created Successfully");
      }

      onSuccess?.();
      navigate("/adminDashboard/form-request");
    } catch (err) {
      alert(err.response?.data?.message || "❌ Failed");
    }
  };

  /* ================= UI ================= */
  return (
    <section className="min-h-screen bg-white px-4 py-6 sm:p-8">
      <div className="max-w-3xl mx-auto bg-black rounded-2xl p-6 sm:p-8 shadow-xl">
        <h1 className="text-3xl font-semibold text-green-500 mb-6 text-center">
          {isEdit ? "Edit Form" : "Create New Form"}
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {/* TITLE */}
          <div className="sm:col-span-2">
            <label className="text-green-400">Form Title</label>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full bg-black border border-gray-600 text-white rounded-xl px-4 py-2"
            />
          </div>

          {/* SLUG */}
          <div className="sm:col-span-2">
            <label className="text-green-400">Slug</label>
            <input
              value={formData.slug}
              readOnly
              className="w-full bg-gray-900 border border-gray-600 text-white rounded-xl px-4 py-2"
            />
          </div>

          {/* MAIN CATEGORY */}
          <div className="sm:col-span-2">
            <label className="text-green-400">Main Category</label>
            <select
              name="mainCategory"
              value={formData.mainCategory}
              onChange={handleChange}
              required
              className="w-full bg-gray-900 border border-gray-600 text-white rounded-xl px-4 py-2"
            >
              <option value="">Select Main Category</option>
              {mainCategories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* SUB CATEGORY */}
          {subCategories.length > 0 && (
            <div className="sm:col-span-2">
              <label className="text-green-400">Sub Category</label>
              <select
                name="subCategory"
                value={formData.subCategory}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-600 text-white rounded-xl px-4 py-2"
              >
                <option value="">None</option>
                {subCategories.map((sub) => (
                  <option key={sub._id} value={sub._id}>
                    {sub.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* DESCRIPTION */}
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="sm:col-span-2 bg-black border border-gray-600 text-white rounded-xl px-4 py-2"
          />

          {/* DATES (AUTO FILLED) */}
          <input
            type="date"
            name="applicationStartDate"
            value={formData.applicationStartDate}
            onChange={handleChange}
            required
            className="bg-black border border-gray-600 text-white rounded-xl px-4 py-2"
          />

          <input
            type="date"
            name="applicationEndDate"
            value={formData.applicationEndDate}
            onChange={handleChange}
            required
            className="bg-black border border-gray-600 text-white rounded-xl px-4 py-2"
          />

          {/* FEES */}
          <input
            type="number"
            name="formFees"
            value={formData.formFees}
            onChange={handleChange}
            placeholder="Form Fees"
            required
            className="bg-black border border-gray-600 text-white rounded-xl px-4 py-2"
          />

          <input
            type="number"
            name="platformCharge"
            value={formData.platformCharge}
            onChange={handleChange}
            placeholder="Platform Charge"
            required
            className="bg-black border border-gray-600 text-white rounded-xl px-4 py-2"
          />

          {/* TERMS */}
          <input
            name="termsAndConditions"
            value={formData.termsAndConditions}
            onChange={handleChange}
            placeholder="Terms & Conditions"
            required
            className="sm:col-span-2 bg-black border border-gray-600 text-white rounded-xl px-4 py-2"
          />

          <button className="sm:col-span-2 bg-green-600 hover:bg-green-700 text-black py-3 rounded-xl font-semibold">
            {isEdit ? "Update Form" : "Create Form"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateForm;
