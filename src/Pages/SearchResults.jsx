import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import api from "../api/axios";

export default function SearchResult() {
  const location = useLocation();

  /* ===============================
     READ QUERY PARAMS
  =============================== */
  const params = new URLSearchParams(location.search);

  const search = params.get("search") || "";
  const maincategory = params.get("mainCategory") || "";
  const subcategory = params.get("subCategory") || "";

  /* ===============================
     STATE
  =============================== */
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(false);

  /* FILTER STATE */
  const [feeRange, setFeeRange] = useState("all");
  const [paymentRequired, setPaymentRequired] = useState("all");

  /* ===============================
     FETCH FILTERED FORMS (YOUR API)
  =============================== */
  useEffect(() => {
    const fetchForms = async () => {
      try {
        setLoading(true);

        const res = await api.get("/form/filter", {
          params: {
            search,
            maincategory,
            subcategory,
            page: 1,
            limit: 10
          }
        });

        setForms(res.data?.data || []);
      } catch (error) {
        console.error("Search API error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchForms();
  }, [search, maincategory, subcategory]);

  /* ===============================
     CLIENT SIDE FILTER
  =============================== */
  const filteredForms = forms.filter((form) => {
    if (paymentRequired !== "all") {
      if (String(form.paymentRequired) !== paymentRequired) return false;
    }

    if (feeRange === "low" && form.totalPayable > 500) return false;
    if (feeRange === "mid" && (form.totalPayable < 500 || form.totalPayable > 1000)) return false;
    if (feeRange === "high" && form.totalPayable < 1000) return false;

    return true;
  });

  /* ===============================
     UI
  =============================== */
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 text-white">

      {/* HEADING */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold">
          Search Results{" "}
          {search && (
            <span className="text-emerald-400">
              for "{search}"
            </span>
          )}
        </h2>
        <p className="text-slate-400 mt-2">
          {filteredForms.length} results found
        </p>
      </div>

      {/* FILTER BAR */}
      <div className="flex flex-wrap gap-4 bg-slate-900 border border-slate-700 rounded-xl p-4 mb-10">

        <select
          value={feeRange}
          onChange={(e) => setFeeRange(e.target.value)}
          className="bg-slate-800 border border-slate-600 text-white rounded-lg px-3 py-2 text-sm"
        >
          <option value="all">All Fees</option>
          <option value="low">Below ₹500</option>
          <option value="mid">₹500 - ₹1000</option>
          <option value="high">Above ₹1000</option>
        </select>

        <select
          value={paymentRequired}
          onChange={(e) => setPaymentRequired(e.target.value)}
          className="bg-slate-800 border border-slate-600 text-white rounded-lg px-3 py-2 text-sm"
        >
          <option value="all">Payment Type</option>
          <option value="true">Paid</option>
          <option value="false">Free</option>
        </select>
      </div>

      {/* TABLE HEADER */}
      <div className="hidden md:grid grid-cols-12 text-sm font-semibold text-slate-400 px-4 mb-4 border-b border-slate-700 pb-3">
        <div className="col-span-3">Form Name</div>
        <div className="col-span-2">Category</div>
        <div className="col-span-2">Start Date</div>
        <div className="col-span-2">Last Date</div>
        <div className="col-span-1">Fees</div>
        <div className="col-span-2 text-right">Action</div>
      </div>

      {/* LOADING */}
      {loading && (
        <p className="text-center py-10 text-slate-400">
          Searching forms...
        </p>
      )}

      {/* NO DATA */}
      {!loading && filteredForms.length === 0 && (
        <p className="text-center py-12 text-slate-500">
          No forms found.
        </p>
      )}

      {/* ROWS */}
      <div className="space-y-4">
        {filteredForms.map((form) => (
          <div
            key={form._id}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-slate-900 border border-slate-700 rounded-xl p-5 hover:shadow-lg hover:border-emerald-500 transition"
          >
            <div className="md:col-span-3">
              <h3 className="font-semibold text-white">
                {form.title}
              </h3>
              <p className="text-xs text-slate-400 line-clamp-1">
                {form.description}
              </p>
            </div>

            <div className="md:col-span-2 text-sm">
              <div className="font-medium text-slate-300">
                {form.maincategory?.title || "—"}
              </div>
              <div className="text-xs text-emerald-400">
                {form.subcategory?.title || ""}
              </div>
            </div>

            <div className="md:col-span-2 text-sm text-slate-300">
              {form.applicationStartDate
                ? new Date(form.applicationStartDate).toLocaleDateString()
                : "—"}
            </div>

            <div className="md:col-span-2 text-sm text-red-400 font-medium">
              {form.applicationEndDate
                ? new Date(form.applicationEndDate).toLocaleDateString()
                : "—"}
            </div>

            <div className="md:col-span-1 font-semibold text-emerald-400">
              ₹{form.totalPayable || 0}
            </div>
<div className="md:col-span-2 md:text-right flex justify-end gap-2">
  {/* BOOKING BUTTON */}
  <Link
    to={`/form/${form.slug}`}
    className="inline-block px-3 py-1.5 text-xs rounded-lg bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition"
  >
    Booking
  </Link>

  {/* VIEW DETAILS BUTTON */}
 <Link
    to={`/form/details/${form.slug}`}
    className="inline-block px-3 py-1.5 text-xs rounded-lg bg-slate-700 text-white font-semibold hover:bg-slate-600 transition"
  >
    View Details
  </Link>
</div>


          </div>
        ))}
      </div>
    </section>
  );
}
