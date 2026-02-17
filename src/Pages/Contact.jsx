import React from "react";
import { FileText, ShieldCheck, Globe, Info } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white px-4 py-12">
      <div className="max-w-5xl mx-auto">

        {/* HEADING */}
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-green-600 mb-4">
          Contact & Information
        </h1>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Fill-It is an online platform designed to help users fill and submit
          forms easily, securely, and without any hassle.
        </p>

        {/* INFO CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* PLATFORM */}
          <div className="bg-black text-white p-6 rounded-xl shadow">
            <FileText size={30} className="text-green-400 mb-3" />
            <h3 className="text-lg font-semibold text-green-400 mb-2">
              Online Form Filling
            </h3>
            <p className="text-sm text-gray-300">
              Fill-It allows users to fill online forms digitally without
              paperwork, saving time and effort.
            </p>
          </div>

          {/* SECURITY */}
          <div className="bg-black text-white p-6 rounded-xl shadow">
            <ShieldCheck size={30} className="text-green-400 mb-3" />
            <h3 className="text-lg font-semibold text-green-400 mb-2">
              Secure & Reliable
            </h3>
            <p className="text-sm text-gray-300">
              User information and form data are handled securely with modern
              data protection standards.
            </p>
          </div>

          {/* ACCESS */}
          <div className="bg-black text-white p-6 rounded-xl shadow">
            <Globe size={30} className="text-green-400 mb-3" />
            <h3 className="text-lg font-semibold text-green-400 mb-2">
              Easy Access
            </h3>
            <p className="text-sm text-gray-300">
              Access Fill-It anytime from anywhere using any device with an
              internet connection.
            </p>
          </div>

        </div>

        {/* BOTTOM INFO */}
        <div className="mt-12 bg-white border rounded-xl p-6 shadow text-center">
          <Info size={26} className="mx-auto text-green-600 mb-3" />
          <h2 className="text-xl font-semibold text-black mb-2">
            Need Help?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            If you face any issue while filling forms, please contact the
            administrator or support team assigned to your organization.
          </p>
        </div>

      </div>
    </div>
  );
}
