import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api/axios";

export default function FormDetail() {
  const { slug } = useParams();
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
      {/* Title Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-emerald-400">
          {form.title}
        </h2>
        <p className="text-slate-400 mt-2">{form.description}</p>
      </div>

      {/* Main Card */}
      <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 space-y-4">

        <div className="flex justify-between">
          <span>Category:</span>
          <span className="text-emerald-400">
            {form.mainCategory?.name || "—"}
            {form.subCategory?.name ? ` > ${form.subCategory.name}` : ""}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Application Start:</span>
          <span>
            {form.applicationStartDate
              ? new Date(form.applicationStartDate).toLocaleDateString()
              : "—"}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Application End:</span>
          <span className="text-red-400">
            {form.applicationEndDate
              ? new Date(form.applicationEndDate).toLocaleDateString()
              : "—"}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Exam Date:</span>
          <span>
            {form.examDate
              ? new Date(form.examDate).toLocaleDateString()
              : "Not Announced"}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Form Fees:</span>
          <span>₹{form.formFees}</span>
        </div>

        <div className="flex justify-between">
          <span>Platform Charge:</span>
          <span>₹{form.platformCharge}</span>
        </div>

        <div className="flex justify-between font-semibold text-emerald-400">
          <span>Total Payable:</span>
          <span>₹{form.totalPayable}</span>
        </div>

        <div className="flex justify-between">
          <span>Payment Required:</span>
          <span>{form.paymentRequired ? "Yes" : "No"}</span>
        </div>

        <div className="flex justify-between">
          <span>Vacancies:</span>
          <span>{form.numberOfVacancies}</span>
        </div>

        <div className="flex justify-between">
          <span>Slot Booking:</span>
          <span>{form.slotBookingEnabled ? "Enabled" : "Disabled"}</span>
        </div>

        <div className="flex justify-between">
          <span>Active:</span>
          <span>{form.isActive ? "Yes" : "No"}</span>
        </div>

        <div className="flex justify-between">
          <span>Views:</span>
          <span>{form.numberOfViews}</span>
        </div>

        <div className="flex justify-between">
          <span>Total Requests:</span>
          <span>{form.numberOfRequests}</span>
        </div>

        <div className="flex justify-between">
          <span>Completed Requests:</span>
          <span>{form.completedRequests}</span>
        </div>

        <div className="flex justify-between">
          <span>Revenue Generated:</span>
          <span>₹{form.revenueGenerated}</span>
        </div>

        <div className="pt-4 flex gap-3">
          <Link
            to="/search"
            className="px-3 py-1.5 text-xs rounded-lg bg-slate-700 hover:bg-slate-600 transition"
          >
            Back to Search
          </Link>

          <Link
            to={`/form/${slug}`}
            className="px-3 py-1.5 text-xs rounded-lg bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition"
          >
            Booking
          </Link>
        </div>
      </div>

      {/* Required Documents */}
      {form.requiredDocuments?.length > 0 && (
        <div className="mt-8 bg-slate-900 border border-slate-700 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-3">
            Required Documents
          </h3>
          <ul className="list-disc pl-6 text-slate-300">
            {form.requiredDocuments.map((doc, index) => (
              <li key={index}>{doc}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Terms */}
      {form.termsAndConditions && (
        <div className="mt-8 bg-slate-900 border border-slate-700 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-3">
            Terms & Conditions
          </h3>
          <p className="text-slate-300">
            {form.termsAndConditions}
          </p>
        </div>
      )}
    </section>
  );
}
