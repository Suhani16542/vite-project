import React from "react";
import { useParams } from "react-router-dom";

export default function ApplyForm() {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-slate-950 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto">

        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Application Form</h1>
          <p className="text-gray-400">
            Applying for form:
            <span className="text-emerald-400 ml-2">{slug}</span>
          </p>
        </div>

        {/* FORM CARD */}
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 shadow-lg">

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Full Name */}
            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full p-3 rounded-lg bg-slate-950 border border-slate-700 focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Mobile Number
              </label>
              <input
                type="tel"
                placeholder="Enter mobile number"
                className="w-full p-3 rounded-lg bg-slate-950 border border-slate-700 focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full p-3 rounded-lg bg-slate-950 border border-slate-700 focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Date of Birth
              </label>
              <input
                type="date"
                className="w-full p-3 rounded-lg bg-slate-950 border border-slate-700 focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Category
              </label>
              <select
                className="w-full p-3 rounded-lg bg-slate-950 border border-slate-700 focus:outline-none focus:border-emerald-500"
              >
                <option value="">Select Category</option>
                <option>General</option>
                <option>OBC</option>
                <option>SC</option>
                <option>ST</option>
              </select>
            </div>

            {/* Gender */}
            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Gender
              </label>
              <select
                className="w-full p-3 rounded-lg bg-slate-950 border border-slate-700 focus:outline-none focus:border-emerald-500"
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <label className="block mb-2 text-sm text-gray-400">
                Address
              </label>
              <textarea
                rows="3"
                placeholder="Enter full address"
                className="w-full p-3 rounded-lg bg-slate-950 border border-slate-700 focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-2 text-center mt-4">
              <button
                type="submit"
                className="px-10 py-3 rounded-xl bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition"
              >
                Proceed to Booking
              </button>

              <p className="text-xs text-gray-500 mt-3">
                Please verify details before submission.
              </p>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
