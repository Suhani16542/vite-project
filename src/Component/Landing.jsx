import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 text-slate-900 py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">

          {/* Left */}
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Simplify Your Form Filling <br /> with{" "}
              <span className="text-blue-600">FillIt</span>
            </h1>

            <p className="text-lg text-slate-700 mb-8">
              Book, upload, pay & get your forms filled — professionally and
              securely, right from your home.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Link to="/login">
                <button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition">
                  Get Started
                </button>
              </Link>

              <button className="border border-blue-600 text-blue-600 font-semibold px-6 py-2 rounded-full hover:bg-blue-50 transition">
                Get Demo
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://img.freepik.com/free-photo/graph-growing-financial-business-concept_53876-133967.jpg"
              alt="dashboard"
              className="rounded-2xl shadow-xl w-full max-w-md md:max-w-lg"
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 py-16">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">
            Why Choose <span className="text-blue-600">Fill It</span>?
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
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition border border-blue-100"
              >
                <h3 className="text-xl font-semibold mb-2 text-slate-900">
                  {item.title}
                </h3>
                <p className="text-slate-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 text-slate-900">
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
              className="p-6 bg-white border border-blue-200 rounded-xl shadow hover:scale-105 transition"
            >
              <div className="text-2xl text-blue-600 font-bold mb-2">
                {i + 1}.
              </div>
              <p className="text-slate-700">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 text-slate-900 py-16 px-6 flex flex-col items-center">
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
              className="bg-white border border-blue-200 text-slate-900 rounded-lg p-6 shadow-lg hover:scale-105 transition duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={r.img}
                  alt={r.name}
                  className="w-12 h-12 rounded-full border-2 border-blue-500 mr-4"
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

              <p className="text-sm">{r.review}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 text-slate-900 py-20 px-6 flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold mb-4">Experience How Fill It Works</h2>
        <p className="max-w-2xl text-lg text-slate-700 mb-14">
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
              className="bg-white border border-blue-200 rounded-2xl p-8 flex flex-col items-center hover:scale-105 transition"
            >
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-slate-700">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition">
            🚀 Get Started
          </button>
          <button className="border border-blue-600 py-3 px-8 rounded-full font-semibold text-blue-600 hover:bg-blue-50 transition">
            🎥 Watch Demo
          </button>
        </div>
      </section>
    </>
  );
}

export default Landing;
