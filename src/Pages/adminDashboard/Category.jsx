import React, { useEffect, useState } from "react";
import { Layers, PlusCircle, Trash2 } from "lucide-react";
import api from "../../api/axios";

/* ================= UTILS ================= */
const slugify = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

/* ================= COMPONENT ================= */
export default function Category() {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [level, setLevel] = useState(1);
  const [parent, setParent] = useState("");

  const [mainCategories, setMainCategories] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [selectedMain, setSelectedMain] = useState(null);
  const [loading, setLoading] = useState(false);

  /* ================= FETCH ================= */
  const fetchCategories = async () => {
    const mainRes = await api.get("/categories/main");
    const mains = mainRes.data?.data || [];

    let subs = [];
    for (let m of mains) {
      const subRes = await api.get(`/categories/${m.slug}/sub`);
      subs = [...subs, ...(subRes.data?.data || [])];
    }

    setMainCategories(mains);
    setAllCategories([...mains, ...subs]);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  /* ================= AUTO SLUG ================= */
  useEffect(() => {
    setSlug(slugify(name));
  }, [name]);

  /* ================= CREATE ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await api.post("/categories/create", {
      name,
      slug,
      level,
      ...(level === 2 && { parent }),
    });

    setName("");
    setSlug("");
    setLevel(1);
    setParent("");
    fetchCategories();
    setLoading(false);
  };

  /* ================= ACTIONS ================= */
  const toggleActive = async (id) => {
    await api.patch(`/categories/${id}/toggle-active`);
    fetchCategories();
  };

  const deleteCategory = async (id) => {
    if (!window.confirm("Delete this category?")) return;
    await api.delete(`/categories/${id}`);
    setSelectedMain(null);
    fetchCategories();
  };

  /* ================= SUB FILTER ================= */
  const subCategories = selectedMain
    ? allCategories.filter(
        (c) => c.level === 2 && c.parent === selectedMain._id
      )
    : [];

  return (
    <section className="min-h-screen bg-white p-4 sm:p-6">
      <h1 className="text-3xl font-bold text-green-600 mb-6">
        Category Management
      </h1>

      {/* ================= FORM (UNCHANGED) ================= */}
      <div className="max-w-xl bg-black rounded-2xl p-6 border border-gray-800 mb-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <select
            value={level}
            onChange={(e) => setLevel(Number(e.target.value))}
            className="w-full p-2 bg-gray-900 text-white border border-gray-700 rounded"
          >
            <option value={1}>Main Category</option>
            <option value={2}>Sub Category</option>
          </select>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full p-2 bg-gray-900 text-white border border-gray-700 rounded"
          />

          <input
            value={slug}
            readOnly
            className="w-full p-2 bg-gray-800 text-gray-400 border border-gray-700 rounded"
          />

          {level === 2 && (
            <select
              value={parent}
              onChange={(e) => setParent(e.target.value)}
              className="w-full p-2 bg-gray-900 text-white border border-gray-700 rounded"
            >
              <option value="">Select Main Category</option>
              {mainCategories.map((m) => (
                <option key={m._id} value={m._id}>
                  {m.name}
                </option>
              ))}
            </select>
          )}

          <button className="w-full bg-green-600 text-black py-2 rounded font-semibold">
            {loading ? "Saving..." : "Create Category"}
          </button>
        </form>
      </div>

      {/* ================= TABLE UI ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* MAIN CATEGORY TABLE */}
        <div className="bg-black rounded-xl p-4 border border-gray-800">
          <h2 className="text-green-500 font-semibold mb-3">
            Main Categories
          </h2>

          <table className="w-full text-sm text-gray-200">
            <thead className="bg-green-600 text-black">
              <tr>
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">Slug</th>
                <th className="p-2">Status</th>
                <th className="p-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              {mainCategories.map((cat) => (
                <tr
                  key={cat._id}
                  onClick={() => setSelectedMain(cat)}
                  className={`cursor-pointer border-b border-gray-700 hover:bg-gray-800 ${
                    selectedMain?._id === cat._id
                      ? "bg-gray-800"
                      : ""
                  }`}
                >
                  <td className="p-2">{cat.name}</td>
                  <td className="p-2">{cat.slug}</td>
                  <td className="p-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleActive(cat._id);
                      }}
                      className={`px-2 py-1 rounded text-xs ${
                        cat.isActive
                          ? "bg-green-500 text-black"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {cat.isActive ? "Active" : "Inactive"}
                    </button>
                  </td>
                  <td className="p-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteCategory(cat._id);
                      }}
                      className="text-red-500 hover:text-red-600"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* SUB CATEGORY TABLE */}
        <div className="bg-black rounded-xl p-4 border border-gray-800">
          <h2 className="text-green-500 font-semibold mb-3">
            {selectedMain
              ? `Sub Categories of ${selectedMain.name}`
              : "Select a Main Category"}
          </h2>

          {!selectedMain && (
            <p className="text-gray-500 text-sm">
              Click a main category to view sub categories
            </p>
          )}

          {selectedMain && (
            <table className="w-full text-sm text-gray-200">
              <thead className="bg-green-600 text-black">
                <tr>
                  <th className="p-2 text-left">Name</th>
                  <th className="p-2 text-left">Slug</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Delete</th>
                </tr>
              </thead>
              <tbody>
                {subCategories.length === 0 && (
                  <tr>
                    <td
                      colSpan={4}
                      className="p-3 text-gray-500"
                    >
                      No sub categories
                    </td>
                  </tr>
                )}

                {subCategories.map((sub) => (
                  <tr
                    key={sub._id}
                    className="border-b border-gray-700"
                  >
                    <td className="p-2">{sub.name}</td>
                    <td className="p-2">{sub.slug}</td>
                    <td className="p-2">
                      <button
                        onClick={() => toggleActive(sub._id)}
                        className={`px-2 py-1 rounded text-xs ${
                          sub.isActive
                            ? "bg-green-500 text-black"
                            : "bg-red-500 text-white"
                        }`}
                      >
                        {sub.isActive ? "Active" : "Inactive"}
                      </button>
                    </td>
                    <td className="p-2">
                      <button
                        onClick={() => deleteCategory(sub._id)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </section>
  );
}
