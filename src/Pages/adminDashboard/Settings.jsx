import React, { useState } from "react";

const Settings = () => {
  const [emailNotification, setEmailNotification] = useState(true);
  const [smsNotification, setSmsNotification] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 text-black px-4 sm:px-6 py-6">
      {/* PAGE TITLE */}
      <h1 className="text-2xl sm:text-3xl font-semibold mb-6 text-green-700">
        Settings
      </h1>

      <div className="w-full max-w-3xl mx-auto space-y-8">

        {/* ACCOUNT SETTINGS */}
        <section className="bg-black text-white p-5 sm:p-6 rounded-2xl shadow-md">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-green-400">
            Account Settings
          </h2>

          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-300">Full Name</label>
              <input
                type="text"
                placeholder="Admin Name"
                className="w-full mt-1 p-3 rounded-lg bg-white text-black border border-gray-300 outline-none focus:border-green-600"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Email Address</label>
              <input
                type="email"
                placeholder="admin@example.com"
                className="w-full mt-1 p-3 rounded-lg bg-white text-black border border-gray-300 outline-none focus:border-green-600"
              />
            </div>

            <button className="px-6 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              Save Changes
            </button>
          </div>
        </section>

        {/* CHANGE PASSWORD */}
        <section className="bg-black text-white p-5 sm:p-6 rounded-2xl shadow-md">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-green-400">
            Change Password
          </h2>

          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-300">Current Password</label>
              <input
                type="password"
                className="w-full mt-1 p-3 rounded-lg bg-white text-black border border-gray-300 outline-none focus:border-green-600"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">New Password</label>
              <input
                type="password"
                className="w-full mt-1 p-3 rounded-lg bg-white text-black border border-gray-300 outline-none focus:border-green-600"
              />
            </div>

            <button className="px-6 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              Update Password
            </button>
          </div>
        </section>

        {/* NOTIFICATIONS */}
        <section className="bg-black text-white p-5 sm:p-6 rounded-2xl shadow-md">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-green-400">
            Notification Preferences
          </h2>

          <div className="space-y-4">
            <ToggleRow
              label="Email Notifications"
              enabled={emailNotification}
              onClick={() => setEmailNotification(!emailNotification)}
            />

            <ToggleRow
              label="SMS Notifications"
              enabled={smsNotification}
              onClick={() => setSmsNotification(!smsNotification)}
            />

            <ToggleRow
              label="Dark Mode"
              enabled={darkMode}
              onClick={() => setDarkMode(!darkMode)}
            />
          </div>
        </section>

        {/* DANGER ZONE */}
        <section className="bg-black text-white p-5 sm:p-6 rounded-2xl border border-red-500 shadow-md">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-red-500">
            Danger Zone
          </h2>

          <div className="flex items-center justify-between">
            <span>Delete Account</span>
            <button className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700">
              Delete
            </button>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span>Logout</span>
            <button className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-900">
              Logout
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};

/* 🔹 Toggle Component (same logic) */
const ToggleRow = ({ label, enabled, onClick }) => (
  <div className="flex items-center justify-between">
    <span className="text-gray-200">{label}</span>
    <button
      onClick={onClick}
      className={`w-12 h-6 rounded-full flex items-center transition ${
        enabled ? "bg-green-600" : "bg-gray-500"
      }`}
    >
      <div
        className={`w-5 h-5 bg-white rounded-full transition ${
          enabled ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  </div>
);

export default Settings;
