import React from "react";
import { Link } from "react-router-dom";

const OtpMiddle = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#020617] to-[#052e16] p-4">
      <div className="bg-[#020617] border border-[#14532D] text-gray-200 p-10 rounded-2xl shadow-2xl w-full max-w-xl">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-2 text-[#22C55E]">
          OTP Verification
        </h2>
        <p className="text-center mb-8 text-gray-400">
          Enter the 6-digit code sent to your email
        </p>

        {/* Steps */}
        <div className="flex items-center justify-between mb-10">

          {/* Step 1 */}
          <div className="flex flex-col items-center w-1/3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-gray-200 font-bold">
              1
            </div>
            <p className="mt-2 text-sm text-gray-400">Send Email</p>
          </div>

          {/* Line */}
          <div className="flex-1 h-1 bg-[#14532D] mx-2"></div>

          {/* Step 2 Active */}
          <div className="flex flex-col items-center w-1/3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#22C55E] text-black font-bold">
              2
            </div>
            <p className="mt-2 text-sm text-[#22C55E]">
              OTP Verification
            </p>
          </div>

          {/* Line */}
          <div className="flex-1 h-1 bg-[#14532D] mx-2"></div>

          {/* Step 3 */}
          <div className="flex flex-col items-center w-1/3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-gray-200 font-bold">
              3
            </div>
            <p className="mt-2 text-sm text-gray-400">
              Generate Password
            </p>
          </div>
        </div>

        {/* OTP Input */}
        <label className="block mb-2 font-semibold text-gray-300">
          Enter OTP
        </label>
        <input
          type="text"
          maxLength="6"
          className="w-full p-3 rounded-xl bg-black border border-[#14532D] text-gray-200 mb-6 outline-none"
          placeholder="Enter 6-digit OTP"
        />

        {/* Button */}
        <Link to="/forgot-reset">
          <button className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-black p-3 rounded-xl font-semibold transition">
            Verify OTP
          </button>
        </Link>

        {/* Footer */}
        <p className="mt-4 text-center text-gray-400">
          Didn't receive OTP?{" "}
          <span className="underline cursor-pointer text-[#22C55E]">
            Resend OTP
          </span>
        </p>
      </div>
    </div>
  );
};

export default OtpMiddle;
