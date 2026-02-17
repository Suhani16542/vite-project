import { CheckCircle, XCircle, X } from "lucide-react";

export default function ApiStatusModal({
  open,
  type = "success", // success | error
  title,
  message,
  onClose,
}) {
  if (!open) return null;

  const isSuccess = type === "success";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl animate-[var(--animate-scale-in)]">

        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            {isSuccess ? (
              <CheckCircle className="h-9 w-9 text-emerald-500" />
            ) : (
              <XCircle className="h-9 w-9 text-red-500" />
            )}

            <h2
              className={`text-lg font-semibold ${
                isSuccess ? "text-emerald-600" : "text-red-600"
              }`}
            >
              {title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        </div>

        {/* Message */}
        <p className="mt-4 text-sm text-gray-600 leading-relaxed">
          {message}
        </p>

        {/* Footer */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className={`rounded-lg px-5 py-2 text-sm font-medium text-white transition ${
              isSuccess
                ? "bg-emerald-500 hover:bg-emerald-600"
                : "bg-red-500 hover:bg-red-600"
            }`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}