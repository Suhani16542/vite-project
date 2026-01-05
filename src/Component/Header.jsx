import React, { useEffect, useState } from "react";
import { Bell, MoreVertical, LogOut, Settings, User } from "lucide-react";
import { useSelector } from "react-redux";

export default function Header() {
  const [dateTime, setDateTime] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setDateTime(
        now.toLocaleString("en-IN", {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    update();
    const timer = setInterval(update, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 px-6 shadow-md flex items-center justify-between rounded-b-2xl">

      {/* LEFT */}
      <div>
        <h2 className="text-lg font-semibold">
          Welcome {user?.username || ""}
        </h2>
        <p className="text-white/80 text-sm">{dateTime}</p>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-5 relative">
        <Bell className="w-6 h-6" />

        {/* Avatar */}
        <div className="w-9 h-9 rounded-full bg-white text-blue-700 flex items-center justify-center font-bold">
          <p>{user?.username?.charAt(0).toUpperCase()}</p>
        </div>

        <div className="relative">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <MoreVertical className="w-6 h-6" />
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-blue-700 rounded-lg shadow-lg py-2">
              <button className="px-4 py-2 flex gap-2 w-full hover:bg-blue-50">
                <User size={16} /> Profile
              </button>
              <button className="px-4 py-2 flex gap-2 w-full hover:bg-blue-50">
                <Settings size={16} /> Settings
              </button>
              <button className="px-4 py-2 flex gap-2 w-full text-red-600 hover:bg-red-50">
                <LogOut size={16} /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
