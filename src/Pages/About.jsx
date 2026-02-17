import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200 p-6 sm:p-8">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-green-600 mb-6">
          About Fill-It
        </h1>

        {/* Intro */}
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-10">
          Fill-It is a simple and smart platform designed to help users easily
          submit forms, manage information, and streamline their workflow with
          a clean and user-friendly experience.
        </p>

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Mission */}
          <div className="p-6 border border-black rounded-xl text-center bg-black text-white hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-green-400">
              Our Mission
            </h3>
            <p className="text-gray-300">
              To make form-filling fast, easy, and accessible for everyone using
              modern and reliable technology.
            </p>
          </div>

          {/* Vision */}
          <div className="p-6 border border-black rounded-xl text-center bg-black text-white hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-green-400">
              Our Vision
            </h3>
            <p className="text-gray-300">
              To become a trusted platform for managing digital forms with
              simplicity and efficiency.
            </p>
          </div>

          {/* Values */}
          <div className="p-6 border border-black rounded-xl text-center bg-black text-white hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-green-400">
              Our Values
            </h3>
            <p className="text-gray-300">
              Simplicity, transparency, security, and a user-first approach in
              everything we build.
            </p>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-3">
            Why Choose <span className="text-green-600">Fill-It?</span>
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            We focus on clean design, smooth performance, and easy usability so
            you can focus on what matters most—getting things done.
          </p>
        </div>

      </div>
    </div>
  );
}
