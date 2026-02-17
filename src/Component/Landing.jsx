import React, { useState ,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";


function Landing() {

    const navigate = useNavigate()
//  / 🔹 Search states
 const [showDemo, setShowDemo] = useState(false);

  const [searchText, setSearchText] = useState("");
  const [mainCategory, setMainCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  // 🔹 Data states
  const [mainCategories, setMainCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [forms, setForms] = useState([]);

  const [loading, setLoading] = useState(false);

  /* ===============================
     FETCH MAIN CATEGORIES
  =============================== */
  useEffect(() => {
    const fetchMainCategories = async () => {
      try {
        const res = await api.get("/categories/main");
        setMainCategories(res.data.data);
      } catch (error) {
        console.error("Main category error", error);
      }
    };

    fetchMainCategories();
  }, []);

  /* ===============================
     FETCH SUB CATEGORIES
  =============================== */
  useEffect(() => {
    if (!mainCategory) {
      setSubCategories([]);
      return;
    }

    const fetchSubCategories = async () => {
      try {
       const res = await api.get(
  `/categories/${mainCategory}/sub`
);

        setSubCategories(res.data.data);
      } catch (error) {
        console.error("Sub category error", error);
      }
    };

    fetchSubCategories();
  }, [mainCategory]);

  /* ===============================
     SEARCH FORMS
  =============================== */
const handleSearch = () => {
  navigate(
    `/search?search=${searchText}&mainCategory=${mainCategory}&subCategory=${subCategory}`
  );
};


  return (
    <>

  <section className="bg-slate-950 py-10 px-6">
  <div className="max-w-5xl mx-auto text-center">

    {/* Heading (Smaller) */}
    <h2 className="text-2xl font-bold text-white mb-3">
      Find Your <span className="text-emerald-400">Form</span>
    </h2>

    <p className="text-slate-400 text-sm mb-6">
      Search by form name or filter by category
    </p>

    {/* Search Input */}
    <div className="max-w-2xl mx-auto mb-5">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        placeholder="Search form name (SSC GD 2026, JEE Main...)"
        className="w-full p-3 rounded-lg bg-slate-900 text-white border border-emerald-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
    </div>

    {/* Main Category + Search Button */}
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">

      {/* Main Category Only */}
      <select
        value={mainCategory}
        onChange={(e) => setMainCategory(e.target.value)}
        className="p-3 rounded-lg bg-slate-900 text-white border border-emerald-800 focus:outline-none w-full md:w-64"
      >
        <option value="">Select Category</option>
        {mainCategories.map((cat) => (
          <option key={cat._id} value={cat.slug}>
            {cat.name}
          </option>
        ))}
      </select>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="px-6 py-3 rounded-lg bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition w-full md:w-auto"
      >
        {loading ? "Searching..." : "Search Forms"}
      </button>
    </div>
  </div>
</section>



      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-black via-slate-900 to-emerald-950 text-white py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">

          {/* Left */}
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Simplify Your Form Filling <br /> with{" "}
              <span className="text-emerald-400">FillIt</span>
            </h1>

            <p className="text-lg text-slate-300 mb-8">
              Book, upload, pay & get your forms filled — professionally and
              securely, right from your home.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Link to="/login">
                <button className="bg-emerald-500 text-black font-semibold px-6 py-2 rounded-full hover:bg-emerald-400 transition">
                  Get Started
                </button>
              </Link>

             <button
  onClick={() => setShowDemo(true)}
  className="border border-emerald-400 text-emerald-400 font-semibold px-6 py-2 rounded-full hover:bg-emerald-500 hover:text-black transition"
>
  Get Demo
</button>

            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://img.freepik.com/free-photo/graph-growing-financial-business-concept_53876-133967.jpg"
              alt="dashboard"
              className="rounded-2xl shadow-2xl w-full max-w-md md:max-w-lg"
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-slate-950 py-16">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-12">
            Why Choose <span className="text-emerald-400">Fill It</span>?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Upload Documents Easily",
                desc: "Upload and manage files directly with smart recognition.",
              },
              {
                title: "Secure Online Payments",
                desc: "Safe, verified and encrypted transactions.",
              },
              {
                title: "Track Your Progress",
                desc: "Get real-time updates and form status.",
              },
              {
                title: "Easy Form Booking",
                desc: "Simple guided steps for quick booking.",
              },
              {
                title: "AI Assistant Support",
                desc: "Instant help & suggestions powered by AI.",
              },
              {
                title: "Mobile Friendly Design",
                desc: "Use FillIt on any device easily.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-900 p-6 rounded-2xl shadow-lg hover:shadow-emerald-500/20 transition border border-emerald-900"
              >
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-black via-slate-900 to-emerald-950 text-white">
        <h2 className="text-3xl font-bold mb-8">How Fill It Works</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            "Submit Your Request",
            "Employee Assigned",
            "Form Filled Securely",
            "Instant PDF + Payment Confirmation",
          ].map((step, i) => (
            <div
              key={i}
              className="p-6 bg-slate-900 border border-emerald-800 rounded-xl shadow hover:scale-105 transition"
            >
              <div className="text-2xl text-emerald-400 font-bold mb-2">
                {i + 1}.
              </div>
              <p className="text-slate-300">{step}</p>
            </div>
          ))}
        </div>
      </section>
  {/* 🔍 SEARCH SECTION */}
    ================= SEARCH SECTION =================





      {/* REVIEWS */}
      <section className="bg-slate-950 text-white py-16 px-6 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-10 text-center">
          What Our Users Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
          {[
            {
              name: "Aarav Sharma",
              img: "https://randomuser.me/api/portraits/men/32.jpg",
              stars: 5,
              review:
                "Fill It made my form process so easy! Very professional service.",
            },
            {
              name: "Priya Verma",
              img: "https://randomuser.me/api/portraits/women/44.jpg",
              stars: 4,
              review:
                "Fast service! Slight delay in PDF, but overall great experience.",
            },
            {
              name: "Rohit Mehta",
              img: "https://randomuser.me/api/portraits/men/51.jpg",
              stars: 5,
              review:
                "Super smooth process. The employee guided me step-by-step.",
            },
            {
              name: "Sneha Kapoor",
              img: "https://randomuser.me/api/portraits/women/65.jpg",
              stars: 5,
              review: "Amazing platform! Stress-free form filling.",
            },
            {
              name: "Aditya Singh",
              img: "https://randomuser.me/api/portraits/men/28.jpg",
              stars: 4,
              review: "Clean UI and fast employee support!",
            },
          ].map((r, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-emerald-800 rounded-lg p-6 shadow-lg hover:scale-105 transition duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={r.img}
                  alt={r.name}
                  className="w-12 h-12 rounded-full border-2 border-emerald-500 mr-4"
                />

                <div>
                  <h3 className="font-semibold text-lg">{r.name}</h3>
                  <div className="flex">
                    {[...Array(r.stars)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="gold"
                        className="w-5 h-5"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.674a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.124 2.27a1 1 0 00-.364 1.118l1.2 3.674c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.124 2.27c-.785.57-1.84-.197-1.54-1.118l1.2-3.674a1 1 0 00-.364-1.118L3.048 9.1c-.783-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.2-3.674z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-400">{r.review}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="bg-gradient-to-r from-black via-slate-900 to-emerald-950 text-white py-20 px-6 flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold mb-4">
          Experience How Fill It Works
        </h2>
        <p className="max-w-2xl text-lg text-slate-300 mb-14">
          Just a few simple steps and your paperwork is done — secure, fast and
          hassle-free!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl">
          {[
            {
              title: "Upload Your Form",
              desc: "Choose or upload your document — secure storage guaranteed.",
            },
            {
              title: "Our Expert Fills It",
              desc: "Verified FillIt employee reviews and fills your form.",
            },
            {
              title: "Download Your Form",
              desc: "Get the filled form instantly as a downloadable PDF.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-emerald-800 rounded-2xl p-8 flex flex-col items-center hover:scale-105 transition"
            >
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <button className="bg-emerald-500 text-black font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-emerald-400 transition">
            🚀 Get Started
          </button>
          <button
  onClick={() => setShowDemo(true)}
  className="border border-emerald-400 py-3 px-8 rounded-full font-semibold text-emerald-400 hover:bg-emerald-500 hover:text-black transition"
>
  🎥 Watch Demo
</button>

        </div>
      </section>

      {/* ================= DEMO VIDEO MODAL ================= */}
{showDemo && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
    
    <div className="relative w-[90%] max-w-3xl bg-black rounded-xl overflow-hidden border border-emerald-800 shadow-2xl">
      
      {/* ❌ Close Button */}
      <button
        onClick={() => setShowDemo(false)}
        className="absolute top-3 right-3 text-white text-2xl hover:text-emerald-400"
      >
        ✕
      </button>

      {/* 🎥 YouTube Video */}
      <iframe
        width="100%"
        height="420"
        src="https://www.youtube.com/embed/o0lXr4Eh4uI"
        title="FillIt Demo Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
)}

    </>
  );
}

export default Landing;
