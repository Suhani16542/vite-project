import React, { useState } from "react";

const Settings = () => {
  const [emailNotification, setEmailNotification] = useState(true);
  const [smsNotification, setSmsNotification] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="min-h-screen bg-white text-black p-6">
      <h1 className="text-3xl font-semibold mb-6 text-purple-700">Settings</h1>

      <div className="w-full flex-col items-end max-w-3xl space-y-8">

        {/* Account Settings */}
        <section className="bg-white p-6 rounded-2xl border border-purple-700 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-purple-700">Account Settings</h2>

          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="Admin Name"
                className="w-full mt-1 p-2 rounded-lg bg-white border border-gray-400 outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="admin@example.com"
                className="w-full mt-1 p-2 rounded-lg bg-white border border-gray-400 outline-none"
              />
            </div>

            <button className="px-5 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition">
              Save Changes
            </button>
          </div>
        </section>

        {/* Change Password */}
        <section className="bg-white p-6 rounded-2xl border border-purple-700 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-purple-700">Change Password</h2>

          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-700">Current Password</label>
              <input
                type="password"
                className="w-full mt-1 p-2 rounded-lg bg-white border border-gray-400 outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-700">New Password</label>
              <input
                type="password"
                className="w-full mt-1 p-2 rounded-lg bg-white border border-gray-400 outline-none"
              />
            </div>

            <button className="px-5 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition">
              Update Password
            </button>
          </div>
        </section>

        {/* Notification Settings */}
        <section className="bg-white p-6 rounded-2xl border border-purple-700 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-purple-700">Notification Preferences</h2>

          <div className="space-y-4 text-black">
            {/* Email */}
            <div className="flex items-center justify-between">
              <span>Email Notifications</span>
              <button
                onClick={() => setEmailNotification(!emailNotification)}
                className={`w-12 h-6 rounded-full flex items-center transition ${
                  emailNotification ? "bg-purple-700" : "bg-gray-400"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition ${
                    emailNotification ? "translate-x-6" : "translate-x-1"
                  }`}
                ></div>
              </button>
            </div>

            {/* SMS */}
            <div className="flex items-center justify-between">
              <span>SMS Notifications</span>
              <button
                onClick={() => setSmsNotification(!smsNotification)}
                className={`w-12 h-6 rounded-full flex items-center transition ${
                  smsNotification ? "bg-purple-700" : "bg-gray-400"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition ${
                    smsNotification ? "translate-x-6" : "translate-x-1"
                  }`}
                ></div>
              </button>
            </div>

            {/* Dark Mode */}
            <div className="flex items-center justify-between">
              <span>Dark Mode</span>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`w-12 h-6 rounded-full flex items-center transition ${
                  darkMode ? "bg-purple-700" : "bg-gray-400"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition ${
                    darkMode ? "translate-x-6" : "translate-x-1"
                  }`}
                ></div>
              </button>
            </div>
          </div>
        </section>

        {/* Danger Zone */}
        <section className="bg-white p-6 rounded-2xl border border-red-600 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-red-600">Danger Zone</h2>

          <div className="flex items-center justify-between">
            <span>Delete Account</span>
            <button className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700">
              Delete
            </button>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span>Logout</span>
            <button className="px-4 py-2 rounded-lg bg-purple-700 text-white hover:bg-purple-800">
              Logout
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Settings;
