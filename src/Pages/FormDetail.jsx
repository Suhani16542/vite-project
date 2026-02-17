import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api/axios";

export default function FormDetail() {
  const { slug } = useParams(); // get form slug from URL
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchForm = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/form/${slug}`);
        setForm(res.data?.data || null);
      } catch (error) {
        console.error("Form Detail API error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchForm();
  }, [slug]);

  if (loading) {
    return (
      <p className="text-center py-20 text-slate-400">
        Loading form details...
      </p>
    );
  }

  if (!form) {
    return (
      <p className="text-center py-20 text-slate-500">
        Form not found.
      </p>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-white">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-emerald-400">
          {form.title}
        </h2>
        <p className="text-slate-400 mt-2">{form.description}</p>
      </div>

      <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 space-y-4">
        <div className="flex justify-between">
          <span className="font-medium text-slate-300">Category:</span>
          <span className="text-emerald-400">
            {form.maincategory?.title || "—"} {form.subcategory?.title ? `> ${form.subcategory.title}` : ""}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-slate-300">Start Date:</span>
          <span className="text-slate-300">
            {form.applicationStartDate
              ? new Date(form.applicationStartDate).toLocaleDateString()
              : "—"}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-slate-300">Last Date:</span>
          <span className="text-red-400 font-medium">
            {form.applicationEndDate
              ? new Date(form.applicationEndDate).toLocaleDateString()
              : "—"}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-slate-300">Fees:</span>
          <span className="text-emerald-400 font-semibold">₹{form.totalPayable || 0}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-slate-300">Payment Required:</span>
          <span className="text-slate-300">{form.paymentRequired ? "Paid" : "Free"}</span>
        </div>

        <div className="pt-4 flex gap-3">
          <Link
            to="/search"
            className="inline-block px-3 py-1.5 text-xs rounded-lg bg-slate-700 text-white font-semibold hover:bg-slate-600 transition"
          >
            Back to Search
          </Link>

          <button
            className="inline-block px-3 py-1.5 text-xs rounded-lg bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition"
          >
            Booking
          </button>
        </div>
      </div>

      {/* Additional Details if needed */}
      {form.details && (
        <div className="mt-8 bg-slate-900 border border-slate-700 rounded-xl p-6 text-slate-300">
          <h3 className="text-lg font-semibold mb-2">Additional Information</h3>
          <p>{form.details}</p>
        </div>
      )}
    </section>
  );
}
