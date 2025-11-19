import React, { useEffect, useRef, useState } from "react";
import {
  CheckCircle,
  Clock,
  CreditCard,
  ClipboardList,
  Calendar,
} from "lucide-react";

export default function UserPanel() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSlotBook = () => {
    alert(`Slot booked for ${selectedSlot}`);
  };

  return (
    <div className="min-h-screen bg-purple-700 text-white flex justify-center p-4">
      <div className="w-full max-w-7xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-6 space-y-6">

        {/* ---------------- HEADER --------------- */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          {/* Left */}
          <div className="flex-1">
            <h2 className="text-2xl lg:text-3xl font-semibold">
              Welcome Back 👋
            </h2>
            <p className="text-sm opacity-80 mt-1">
              Track, manage & complete all your forms easily.
            </p>
          </div>

          {/* Middle */}
          <div className="flex items-center gap-2 flex-wrap justify-center md:justify-start flex-1">
            <div className="bg-white/20 rounded-lg px-4 py-2 text-sm">
              📅 Tuesday, Apr 21
            </div>
            <div className="bg-white/20 rounded-lg px-4 py-2 text-sm">
              🔁 One way
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3 justify-end flex-1">

            {/* Notification */}
            <div className="relative">
              <button className="relative p-2 rounded-full hover:bg-white/20 transition">
                🔔
              </button>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-pink-700 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                3
              </span>
            </div>

            {/* Profile */}
            <div className="relative flex items-center gap-2 bg-white/20 px-3 py-2 rounded-xl">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPFNeUn89NkscCQdePBFlIp7ixL81eU9pY3g&s"
                className="w-10 h-10 rounded-full object-cover"
              />

              <div className="hidden sm:block">
                <p className="text-xs opacity-80">Hello,</p>
                <p className="font-semibold text-sm">Abhishek Patidar</p>
              </div>

              {/* Menu */}
              <div ref={menuRef} className="relative">
                <button
                  onClick={() => setMenuOpen((v) => !v)}
                  className="text-xl font-bold p-1 rounded hover:bg-white/20"
                >
                  ⋮
                </button>

                {menuOpen && (
                  <div className="absolute right-0 top-10 bg-white text-black shadow-xl rounded-xl p-2 w-40 space-y-1 z-50">
                    <button className="block w-full text-left px-3 py-2 rounded hover:bg-gray-100 text-sm">
                      Edit Profile
                    </button>
                    <button className="block w-full text-left px-3 py-2 rounded hover:bg-gray-100 text-sm">
                      Settings
                    </button>
                    <button className="block w-full text-left px-3 py-2 rounded bg-red-50 text-red-600 text-sm">
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- CARDS --------------- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {/* CARD 1 */}
          <div className="bg-purple-800 text-white p-4 rounded-2xl shadow-lg hover:scale-105 transition border border-purple-600">
            <div className="flex justify-between">
              <p className="text-xs opacity-90">Total Bookings</p>
              <ClipboardList className="w-5 h-5 text-pink-700" />
            </div>
            <h2 className="text-3xl font-bold mt-2">1,248</h2>
            <p className="text-xs opacity-80 mt-1">Updated now</p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white/10 border border-white/30 p-4 rounded-2xl shadow-lg hover:scale-105 transition">
            <div className="flex justify-between">
              <p className="text-xs opacity-80">Completed</p>
              <CheckCircle className="w-5 h-5 text-green-300" />
            </div>
            <h2 className="text-3xl font-bold mt-2 text-green-300">1,032</h2>
            <p className="text-xs opacity-60 mt-1">All-time</p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white/10 border border-white/30 p-4 rounded-2xl shadow-lg hover:scale-105 transition">
            <div className="flex justify-between">
              <p className="text-xs opacity-80">Processing</p>
              <Clock className="w-5 h-5 text-yellow-300" />
            </div>
            <h2 className="text-3xl font-bold mt-2 text-yellow-300">142</h2>
            <p className="text-xs opacity-60 mt-1">Awaiting confirmation</p>
          </div>

          {/* CARD 4 */}
          <div className="bg-purple-800 text-white p-4 rounded-2xl shadow-lg hover:scale-105 transition border border-purple-600">
            <div className="flex justify-between">
              <p className="text-xs opacity-90">Total Payment</p>
              <CreditCard className="w-5 h-5 text-pink-700" />
            </div>
            <h2 className="text-3xl font-bold mt-2">$58,420</h2>
            <p className="text-xs opacity-80 mt-1">USD received</p>
          </div>
        </div>

        {/* ---------------- MAIN BODY --------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

          {/* LEFT FLIGHTS */}
          <div className="lg:col-span-9 space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-2xl shadow p-4 flex flex-col sm:flex-row gap-4"
              >
                <div className="sm:w-40">
                  <p className="font-semibold">10:30 AM</p>
                  <p className="text-xs opacity-80">Barcelona (BCN)</p>
                  <p className="text-xs opacity-60">Tue, Apr 21</p>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-4">
                    <div className="relative h-1 bg-white/30 flex-1 rounded-full">
                      <span className="absolute -left-1 -top-1 w-3 h-3 bg-pink-700 rounded-full"></span>
                      <span className="absolute -right-1 -top-1 w-3 h-3 bg-pink-700 rounded-full"></span>
                    </div>
                    <p className="text-xs opacity-80 w-20 text-right">1h 50m</p>
                  </div>
                  <p className="mt-2 text-xs opacity-70">Non-stop</p>
                </div>

                <div className="sm:w-40 text-right">
                  <p className="text-xl font-bold">$56</p>
                  <button className="mt-3 bg-pink-700 hover:bg-pink-800 text-white px-4 py-2 rounded-lg shadow text-sm transition">
                    Select
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:col-span-3 space-y-4">

            <div className="bg-white/10 border border-white/20 p-4 rounded-2xl shadow">
              <button className="w-full bg-pink-700 hover:bg-pink-800 text-white py-2 rounded-lg font-semibold transition">
                Get Slots Alerts
              </button>
            </div>

            {/* BOOK SLOT */}
            <div className="bg-white/10 border border-white/20 p-5 rounded-2xl shadow text-white">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-pink-700" />
                <h3 className="font-semibold text-lg">Book a Slot</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm opacity-80">Select Date</label>
                  <input
                    type="date"
                    className="w-full p-3 bg-white/20 text-white border rounded-lg focus:ring-2 focus:ring-pink-700"
                  />
                </div>

                <div>
                  <label className="block text-sm opacity-80">Select Time</label>
                  <select
                    className="w-full p-3 bg-white/20 text-white border rounded-lg focus:ring-2 focus:ring-pink-700"
                    onChange={(e) => setSelectedSlot(e.target.value)}
                  >
                    <option className="text-black" value="">
                      Choose a slot
                    </option>
                    <option className="text-black">9:00 AM - 10:00 AM</option>
                    <option className="text-black">10:00 AM - 11:00 AM</option>
                    <option className="text-black">11:00 AM - 12:00 PM</option>
                    <option className="text-black">1:00 PM - 2:00 PM</option>
                    <option className="text-black">2:00 PM - 3:00 PM</option>
                  </select>
                </div>

                <button
                  onClick={handleSlotBook}
                  disabled={!selectedSlot}
                  className="w-full bg-pink-700 hover:bg-pink-800 text-white py-3 rounded-lg font-semibold disabled:bg-gray-400 transition"
                >
                  Book Slot
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
