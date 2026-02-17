import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../api/axios";

export default function PublicFormList() {
  const { subSlug } = useParams();

  const [forms, setForms] = useState([]);

  /* ===============================
     WISHLIST STATE (localStorage)
  =============================== */
  const [wishlist, setWishlist] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("wishlist")) || [];
    } catch {
      return [];
    }
  });

  /* ===============================
     FORMAT SLUG FOR TITLE
  =============================== */
  const formattedTitle = subSlug
    ? subSlug.replace(/\//g, " ").replace(/-/g, " ").toUpperCase()
    : "FORMS";

  /* ===============================
     FETCH FORMS BY SUB CATEGORY
  =============================== */
  useEffect(() => {
    if (!subSlug) return;

    const fetchForms = async () => {
      try {
        const res = await api.get("/form/filter", {
          params: {
            subcategory: subSlug,
            isActive: true,
            visibility: "public",
            sortBy: "latest",
          },
        });

        setForms(res.data?.data || []);
      } catch (error) {
        console.error("Failed to fetch forms", error);
      }
    };

    fetchForms();
  }, [subSlug]);

  /* ===============================
     WISHLIST TOGGLE
  =============================== */
  const toggleWishlist = (form) => {
    let updatedWishlist;

    if (wishlist.some((f) => f._id === form._id)) {
      updatedWishlist = wishlist.filter((f) => f._id !== form._id);
    } else {
      updatedWishlist = [...wishlist, form];
    }

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const isWishlisted = (id) => wishlist.some((f) => f._id === id);

  /* ===============================
     SHARE LOGIC
  =============================== */
  const handleShare = async (form) => {
    const shareUrl = `${window.location.origin}/form/${form.slug || form._id}`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: form.title,
          text: "Check out this form on FillIt",
          url: shareUrl,
        });
      } else {
        await navigator.clipboard.writeText(shareUrl);
        alert("Link copied to clipboard");
      }
    } catch (err) {
      console.error("Share failed", err);
    }
  };

  /* ===============================
     JSX
  =============================== */
  return (
    <div className="min-h-screen bg-[#0B1020] px-6 py-14">
      <h2 className="text-2xl font-bold text-white mb-8 uppercase">
        {formattedTitle} Forms
      </h2>

      <div className="space-y-5">
        {forms.map((form, i) => (
          <div
            key={form._id || i}
            className="bg-[#121933] border border-[#1E2A5A]
              rounded-xl p-6 flex justify-between items-center"
          >
            {/* LEFT */}
            <div>
              <h3 className="text-lg text-white">{form.title}</h3>
              <p className="text-slate-400 text-sm mt-1">
                Last Date:{" "}
                {form.applicationEndDate
                  ? new Date(form.applicationEndDate).toLocaleDateString(
                      "en-IN"
                    )
                  : "N/A"}
              </p>
            </div>

            {/* RIGHT ACTIONS */}
            <div className="flex gap-3">
              {/* ❤️ Wishlist */}
              <button
                onClick={() => toggleWishlist(form)}
                className={`px-3 py-2 rounded-lg text-sm transition ${
                  isWishlisted(form._id)
                    ? "bg-pink-600 text-white"
                    : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                }`}
                title="Add to Wishlist"
              >
                ♥
              </button>

              {/* 🔗 Share */}
              <button
                onClick={() => handleShare(form)}
                className="bg-indigo-600 hover:bg-indigo-500
                  text-white px-3 py-2 rounded-lg text-sm transition"
                title="Share"
              >
                Share
              </button>

              {/* 🚀 Apply */}
              <button
                className="bg-gradient-to-r from-indigo-500 to-pink-500
                text-white px-5 py-2 rounded-lg text-sm"
              >
                Apply
              </button>
            </div>
          </div>
        ))}

        {forms.length === 0 && (
          <p className="text-slate-400 text-center">
            No forms available
          </p>
        )}
      </div>
    </div>
  );
}
