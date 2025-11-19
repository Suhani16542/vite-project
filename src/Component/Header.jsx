import React, { useEffect, useState } from "react";
import { Bell, User2, MoreVertical } from "lucide-react";

export default function Header({ username = "Your Name" }) {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const options = {
        weekday: "long",
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };
      setDateTime(now.toLocaleString("en-IN", options));
    };

    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white h-24 md:h-26 flex items-center justify-between px-4 sm:px-6 md:px-8 shadow-lg">

      {/* LEFT SECTION */}
      <div className="flex flex-col leading-tight text-sm sm:text-base md:text-lg">
        <h2 className="font-semibold truncate">{username}</h2>
        <p className="opacity-80 truncate">{dateTime}</p>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
        <button className="hover:opacity-80 transition p-1 md:p-2">
          <Bell size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>
        <button className="hover:opacity-80 transition p-1 md:p-2">
          <User2 size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>
        <button className="hover:opacity-80 transition p-1 md:p-2">
          <MoreVertical size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>
      </div>

    </header>
  );
}
