import React from "react";
import { Clock, FileWarning, BadgeInfo, AlertTriangle, FileCheck, CreditCard, Calendar } from "lucide-react";

export default function UserPending() {
  // SAMPLE pending data (replace with API data)
  const pending = [
    {
      id: "FRM-1024",
      name: "Aadhar Update Form",
      bookingDate: "12 Nov 2025",
      status: "Pending",
      paymentStatus: "Paid",
      note: "Document not uploaded",
      type: "error",
    },
    {
      id: "FRM-2041",
      name: "PAN Application Form",
      bookingDate: "10 Nov 2025",
      status: "Pending",
      paymentStatus: "Unpaid",
      note: "Payment not completed",
      type: "warning",
    },
    {
      id: "FRM-3081",
      name: "College Admission Form",
      bookingDate: "05 Nov 2025",
      status: "Pending",
      paymentStatus: "Paid",
      note: "Waiting for admin verification",
      type: "info",
    },
  ];

  const getNoteStyle = (type) => {
    switch (type) {
      case "error":
        return "text-red-400 bg-red-900/20 border-red-500";
      case "warning":
        return "text-yellow-400 bg-yellow-900/20 border-yellow-500";
      default:
        return "text-blue-400 bg-blue-900/20 border-blue-500";
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case "error":
        return <AlertTriangle size={18} className="text-red-400" />;
      case "warning":
        return <FileWarning size={18} className="text-yellow-400" />;
      default:
        return <BadgeInfo size={18} className="text-blue-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0b0d] text-gray-300 p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* PAGE TITLE */}
        <h1 className="text-2xl font-semibold text-purple-300">Pending Requests</h1>
        <p className="text-gray-400">Here you can track your ongoing form submissions.</p>

        {/* LIST OF PENDING FORMS */}
        <div className="space-y-5">
          {pending.map((item, i) => (
            <div
              key={i}
              className="bg-[#121216] p-5 rounded-2xl shadow-[0_0_25px_rgba(128,0,255,0.15)] border border-gray-800 hover:shadow-[0_0_35px_rgba(128,0,255,0.25)] transition-all"
            >
              {/* TOP ROW */}
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">{item.name}</h3>

                <p className="text-sm flex items-center gap-2">
                  <Clock size={16} className="text-yellow-400" />
                  <span className="text-yellow-400 font-semibold">{item.status}</span>
                </p>
              </div>

              {/* DETAILS */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-sm">
                <p className="flex items-center gap-2">
                  <FileCheck size={16} className="text-purple-400" />
                  <span>Form ID: {item.id}</span>
                </p>

                <p className="flex items-center gap-2">
                  <Calendar size={16} className="text-purple-400" />
                  Booking Date: {item.bookingDate}
                </p>

                <p className="flex items-center gap-2">
                  <CreditCard
                    size={16}
                    className={item.paymentStatus === "Paid" ? "text-green-400" : "text-red-400"}
                  />
                  <span>
                    Payment:{" "}
                    <span
                      className={
                        item.paymentStatus === "Paid"
                          ? "text-green-400 font-semibold"
                          : "text-red-400 font-semibold"
                      }
                    >
                      {item.paymentStatus}
                    </span>
                  </span>
                </p>
              </div>

              {/* NOTE BOX */}
              <div
                className={`mt-4 p-3 rounded-xl border flex items-center gap-2 ${getNoteStyle(
                  item.type
                )}`}
              >
                {getIcon(item.type)}
                <p className="text-sm">{item.note}</p>
              </div>

              {/* ACTION BUTTON */}
              <div className="mt-4 flex justify-end">
                {item.paymentStatus === "Unpaid" ? (
                  <button className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-xl text-white transition">
                    Complete Payment
                  </button>
                ) : item.type === "error" ? (
                  <button className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-xl text-white transition">
                    Upload Document
                  </button>
                ) : (
                  <button className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-xl text-white transition">
                    View Details
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {pending.length === 0 && (
          <p className="text-center text-gray-400 mt-10">No pending requests found.</p>
        )}
      </div>
    </div>
  );
}