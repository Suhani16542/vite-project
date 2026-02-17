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
    <section className="p-4 sm:p-6 space-y-8 bg-gray-100 min-h-screen">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <h1 className="text-2xl font-semibold text-green-700">
          Billing & Invoice Management
        </h1>

        {/* SEARCH */}
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-3 text-gray-500" size={18} />
          <input
            type="text"
            placeholder="Search invoice or user..."
            className="w-full bg-white text-black pl-10 pr-4 py-2 rounded-xl
                       border border-gray-300 outline-none
                       focus:ring-2 focus:ring-green-600"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* TABLE CARD */}
      <div className="bg-black text-white p-4 sm:p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold pb-5 text-green-400">
          Invoice Records
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] border-collapse text-sm">
            <thead className="bg-gray-900 text-green-400">
              <tr>
                <th className="py-3 px-4 text-left">Invoice ID</th>
                <th className="py-3 px-4 text-left">User</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Amount</th>
                <th className="py-3 px-4 text-left">Method</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Download</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((inv) => (
                <tr
                  key={inv.id}
                  className="border-t border-gray-700 hover:bg-gray-900 transition"
                >
                  <td className="py-3 px-4">{inv.id}</td>
                  <td className="py-3 px-4">{inv.user}</td>
                  <td className="py-3 px-4">{inv.date}</td>

                  <td className="py-3 px-4 flex items-center gap-1 text-green-400">
                    <IndianRupee size={14} />
                    {inv.amount}
                  </td>

                  <td className="py-3 px-4 text-gray-300">{inv.method}</td>

                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-lg text-xs font-medium ${
                        inv.status === "Paid"
                          ? "bg-green-600/20 text-green-400"
                          : inv.status === "Pending"
                          ? "bg-yellow-600/20 text-yellow-400"
                          : "bg-red-600/20 text-red-400"
                      }`}
                    >
                      {inv.status}
                    </span>
                  </td>

                  <td className="py-3 px-4">
                    <button
                      className="flex items-center gap-2 px-3 py-1 rounded-lg
                                 bg-gray-800 text-green-400
                                 hover:bg-gray-700 transition"
                    >
                      <Download size={16} />
                      <span>Invoice</span>
                    </button>
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td colSpan="7" className="py-4 text-center text-gray-400 italic">
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
