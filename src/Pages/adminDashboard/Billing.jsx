import { useState } from "react";
import { Download, IndianRupee, Search } from "lucide-react";

const Billing = () => {
  const [search, setSearch] = useState("");

  const invoices = [
    { id: "INV-1001", user: "Amit Sharma", amount: 499, date: "12 Jan 2025", method: "UPI", status: "Paid" },
    { id: "INV-1002", user: "Riya Patel", amount: 299, date: "14 Jan 2025", method: "Credit Card", status: "Pending" },
    { id: "INV-1003", user: "Deepak Verma", amount: 799, date: "10 Jan 2025", method: "Wallet", status: "Failed" },
    { id: "INV-1004", user: "Karan Patel", amount: 1499, date: "20 Jan 2025", method: "Debit Card", status: "Paid" },
  ];

  const filtered = invoices.filter(
    (inv) =>
      inv.user.toLowerCase().includes(search.toLowerCase()) ||
      inv.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="p-6 space-y-8 bg-white text-black min-h-screen">

      {/* HEADER */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <h1 className="text-2xl font-semibold text-purple-700">
          Billing & Invoice Management
        </h1>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-500" size={18} />
          <input
            type="text"
            placeholder="Search invoice or user..."
            className="bg-white text-black pl-10 pr-4 py-2 rounded-xl w-72
                       outline-none border border-purple-700 
                       focus:ring-2 focus:ring-pink-600 transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* INVOICE TABLE CARD */}
      <div
        className="
          bg-white p-6 rounded-2xl 
          border border-purple-700
          shadow-md
        "
      >
        <h2 className="text-xl font-semibold pb-5 text-purple-700">Invoice Records</h2>

        <div className="overflow-x-auto rounded-xl">
          <table className="w-full border-collapse text-black">
            <thead className="bg-purple-100 text-purple-700">
              <tr>
                <th className="py-3 px-4 text-left">Invoice ID</th>
                <th className="py-3 px-4 text-left">User</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Amount</th>
                <th className="py-3 px-4 text-left">Payment Method</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Download</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((inv) => (
                <tr
                  key={inv.id}
                  className="border-t border-gray-300 hover:bg-gray-100 transition"
                >
                  <td className="py-3 px-4 font-medium">{inv.id}</td>
                  <td className="py-3 px-4">{inv.user}</td>
                  <td className="py-3 px-4">{inv.date}</td>

                  {/* Amount */}
                  <td className="py-3 px-4 flex items-center gap-1 text-purple-700">
                    <IndianRupee size={14} />
                    {inv.amount}
                  </td>

                  {/* Payment Method */}
                  <td className="py-3 px-4 text-gray-700">{inv.method}</td>

                  {/* STATUS BADGE */}
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-lg text-xs ${
                        inv.status === "Paid"
                          ? "bg-green-100 text-green-700"
                          : inv.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {inv.status}
                    </span>
                  </td>

                  {/* DOWNLOAD BUTTON */}
                  <td className="py-3 px-4">
                    <button
                      className="flex items-center gap-2 px-3 py-1 rounded-lg
                                 bg-purple-100 text-purple-700
                                 hover:bg-purple-200 transition"
                    >
                      <Download size={18} />
                      <span className="text-sm">Invoice</span>
                    </button>
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td colSpan="7" className="py-4 text-center text-gray-500 italic">
                    No invoices found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};

export default Billing;
