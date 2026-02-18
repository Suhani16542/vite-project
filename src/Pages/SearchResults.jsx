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
  const initialSubcategory = params.get("subCategory") || "";

  /* ===============================
     STATE
  =============================== */
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(false);

  const [feeRange, setFeeRange] = useState("all");
  const [paymentRequired, setPaymentRequired] = useState("all");
  const [minFee, setMinFee] = useState("");
  const [maxFee, setMaxFee] = useState("");
  const [isActive, setIsActive] = useState("");
  const [sortBy, setSortBy] = useState("latest");
  const [subcategory, setSubcategory] = useState(initialSubcategory);

  const [subcategories, setSubcategories] = useState([]);

  /* ===============================
     FETCH SUBCATEGORIES (BASED ON MAIN)
  =============================== */
  useEffect(() => {
    if (!maincategory) return;

    const fetchSubcategories = async () => {
      try {
        const res = await api.get(
          `/categories/${maincategory}/sub`
        );
        setSubcategories(res.data?.data || []);
      } catch (error) {
        console.error("Subcategory fetch error:", error);
      }
    };

    fetchSubcategories();
  }, [maincategory]);

  /* ===============================
     FETCH FILTERED FORMS
  =============================== */
  useEffect(() => {
    const fetchForms = async () => {
      try {
        setLoading(true);

        const cleanParams = {
          search,
          maincategory,
          subcategory,
          minFee,
          maxFee,
          isActive,
          paymentRequired: paymentRequired !== "all" ? paymentRequired : "",
          sortBy,
          page: 1,
          limit: 10
        };

        const filteredParams = Object.fromEntries(
          Object.entries(cleanParams).filter(([_, v]) => v !== "")
        );

        const res = await api.get("/form/filter", {
          params: filteredParams
        });

        setForms(res.data?.data || []);
      } catch (error) {
        console.error("Search API error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchForms();
  }, [
    search,
    maincategory,
    subcategory,
    minFee,
    maxFee,
    isActive,
    paymentRequired,
    sortBy
  ]);

  /* CLIENT SIDE FILTER */
  const filteredForms = forms.filter((form) => {
    if (feeRange === "low" && form.totalPayable > 500) return false;
    if (
      feeRange === "mid" &&
      (form.totalPayable < 500 || form.totalPayable > 1000)
    )
      return false;
    if (feeRange === "high" && form.totalPayable < 1000) return false;
    return true;
  });

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 text-white">
      
      {/* HEADING */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold">
          Search Results{" "}
          {search && (
            <span className="text-emerald-400">for "{search}"</span>
          )}
        </h2>
        <p className="text-slate-400 mt-2">
          {filteredForms.length} results found
        </p>
      </div>

      {/* FILTER BAR */}
      <div className="flex flex-wrap gap-4 bg-slate-900 border border-slate-700 rounded-xl p-4 mb-10">

        {/* ✅ FIXED SUBCATEGORY DROPDOWN */}
        <select
          value={subcategory}
          onChange={(e) => setSubcategory(e.target.value)}
          className="bg-slate-800 border border-slate-600 text-white rounded-lg px-3 py-2 text-sm appearance-none"
        >
          <option value="">All Subcategories</option>
          {subcategories.map((sub) => (
            <option key={sub._id} value={sub.slug}>
              {sub.title || sub.name}
            </option>
          ))}
        </select>

        {/* Baaki filters same hai */}


        {/* Fee Range */}
        <select
          value={feeRange}
          onChange={(e) => setFeeRange(e.target.value)}
          className="bg-slate-800 border border-slate-600 text-white rounded-lg px-3 py-2 text-sm appearance-none"
        >
          <option value="all" className="bg-slate-900 text-white">
            All Fees
          </option>
          <option value="low" className="bg-slate-900 text-white">
            Below ₹500
          </option>
          <option value="mid" className="bg-slate-900 text-white">
            ₹500 - ₹1000
          </option>
          <option value="high" className="bg-slate-900 text-white">
            Above ₹1000
          </option>
        </select>

        {/* Payment Type */}
        <select
          value={paymentRequired}
          onChange={(e) => setPaymentRequired(e.target.value)}
          className="bg-slate-800 border border-slate-600 text-white rounded-lg px-3 py-2 text-sm appearance-none"
        >
          <option value="all" className="bg-slate-900 text-white">
            Payment Type
          </option>
          <option value="true" className="bg-slate-900 text-white">
            Paid
          </option>
          <option value="false" className="bg-slate-900 text-white">
            Free
          </option>
        </select>

        {/* Min Fee */}
        <input
          type="number"
          placeholder="Min Fee"
          value={minFee}
          onChange={(e) => setMinFee(e.target.value)}
          className="bg-slate-800 border border-slate-600 text-white rounded-lg px-3 py-2 text-sm"
        />

        {/* Max Fee */}
        <input
          type="number"
          placeholder="Max Fee"
          value={maxFee}
          onChange={(e) => setMaxFee(e.target.value)}
          className="bg-slate-800 border border-slate-600 text-white rounded-lg px-3 py-2 text-sm"
        />

        {/* Status */}
        <select
          value={isActive}
          onChange={(e) => setIsActive(e.target.value)}
          className="bg-slate-800 border border-slate-600 text-white rounded-lg px-3 py-2 text-sm appearance-none"
        >
          <option value="" className="bg-slate-900 text-white">
            All Status
          </option>
          <option value="true" className="bg-slate-900 text-white">
            Active
          </option>
          <option value="false" className="bg-slate-900 text-white">
            Inactive
          </option>
        </select>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-slate-800 border border-slate-600 text-white rounded-lg px-3 py-2 text-sm appearance-none"
        >
          <option value="latest" className="bg-slate-900 text-white">
            Latest
          </option>
          <option value="oldest" className="bg-slate-900 text-white">
            Oldest
          </option>
          <option value="feeLow" className="bg-slate-900 text-white">
            Fee Low → High
          </option>
          <option value="feeHigh" className="bg-slate-900 text-white">
            Fee High → Low
          </option>
          <option value="popular" className="bg-slate-900 text-white">
            Popular
          </option>
        </select>
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
              <Link
                to={`/form/${form.slug}`}
                className="inline-block px-3 py-1.5 text-xs rounded-lg bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition"
              >
                Booking
              </Link>

             <Link
  to={`/form-detail/${form.slug}`}
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
