import React, { useState } from "react";
import { Camera, User, Mail, Phone, MapPin, Lock } from "lucide-react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Suhani Yadav",
    email: "Suhani1402@gmail.com",
    phone: "7806093542",
    address: "Indore, Madhya Pradesh",
  });

  const [passwords, setPasswords] = useState({
    old: "",
    newPass: "",
    confirm: "",
  });

  return (
    <section className="p-6 space-y-12 min-h-screen bg-white text-black">

      {/* PAGE TITLE */}
      <h1 className="text-2xl font-semibold mb-3 text-purple-700">
        Profile Settings
      </h1>

      {/* TOP SECTION → AVATAR + BASIC INFO */}
      <div className="flex gap-10 items-center pb-8 border-b border-purple-700/30">

        {/* Avatar */}
        <div className="relative w-32 h-32">
          <img
            src="https://i.ibb.co/4pDNDk1/avatar.png"
            className="w-32 h-32 rounded-full object-cover border border-purple-700/40"
            alt="avatar"
          />

          {/* Upload Button */}
          <button className="absolute bottom-1 right-1 bg-purple-700 p-2 text-white rounded-full hover:bg-purple-800 transition">
            <Camera size={16} />
          </button>
        </div>

        {/* Basic Info */}
        <div>
          <h2 className="text-xl font-semibold">{profile.name}</h2>
          <p className="text-gray-700">{profile.email}</p>
          <p className="text-gray-500 mt-1 text-sm">Member since 2024</p>
        </div>
      </div>

      {/* PROFILE DETAILS FORM */}
      <div className="space-y-8 bg-white p-6 rounded-xl border border-purple-700/30 shadow">

        {/* NAME */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 flex items-center gap-2">
            <User size={16} /> Name
          </label>
          <input
            type="text"
            className="bg-white text-black p-3 rounded-xl outline-none border border-purple-700/40"
            value={profile.name}
            onChange={(e) =>
              setProfile({ ...profile, name: e.target.value })
            }
          />
        </div>

        {/* EMAIL */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 flex items-center gap-2">
            <Mail size={16} /> Email
          </label>
          <input
            type="email"
            className="bg-white text-black p-3 rounded-xl outline-none border border-purple-700/40"
            value={profile.email}
            onChange={(e) =>
              setProfile({ ...profile, email: e.target.value })
            }
          />
        </div>

        {/* PHONE */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 flex items-center gap-2">
            <Phone size={16} /> Phone Number
          </label>
          <input
            type="text"
            className="bg-white text-black p-3 rounded-xl outline-none border border-purple-700/40"
            value={profile.phone}
            onChange={(e) =>
              setProfile({ ...profile, phone: e.target.value })
            }
          />
        </div>

        {/* ADDRESS */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 flex items-center gap-2">
            <MapPin size={16} /> Address
          </label>
          <textarea
            className="bg-white text-black p-3 rounded-xl outline-none border border-purple-700/40"
            rows="2"
            value={profile.address}
            onChange={(e) =>
              setProfile({ ...profile, address: e.target.value })
            }
          />
        </div>
      </div>

      {/* CHANGE PASSWORD SECTION */}
      <div className="pt-10 border-t border-purple-700/30 space-y-6 bg-white p-6 rounded-xl shadow border border-purple-700/40">

        <h2 className="text-xl font-semibold text-purple-700 flex items-center gap-2">
          <Lock size={20} /> Change Password
        </h2>

        {/* Old Password */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-700">Old Password</label>
          <input
            type="password"
            className="bg-white text-black p-3 rounded-xl outline-none border border-purple-700/40"
            value={passwords.old}
            onChange={(e) =>
              setPasswords({ ...passwords, old: e.target.value })
            }
          />
        </div>

        {/* New Password */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-700">New Password</label>
          <input
            type="password"
            className="bg-white text-black p-3 rounded-xl outline-none border border-purple-700/40"
            value={passwords.newPass}
            onChange={(e) =>
              setPasswords({ ...passwords, newPass: e.target.value })
            }
          />
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-700">Confirm Password</label>
          <input
            type="password"
            className="bg-white text-black p-3 rounded-xl outline-none border border-purple-700/40"
            value={passwords.confirm}
            onChange={(e) =>
              setPasswords({ ...passwords, confirm: e.target.value })
            }
          />
        </div>

        <button className="mt-4 bg-purple-700 px-6 py-2 rounded-xl text-white hover:bg-purple-800 transition">
          Save Changes
        </button>
      </div>
    </section>
  );
};

export default Profile;
