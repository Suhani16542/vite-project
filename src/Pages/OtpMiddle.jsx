import React from "react";
import { Link } from "react-router-dom";

const OtpMiddle = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-300">
      <div className="bg-gradient-to from-purple-600 via-pink-500 to-purple-600 text-white p-10 rounded-2xl shadow-xl w-full max-w-xl">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-2">OTP Verification</h2>
        <p className="text-center mb-8">Enter the 6-digit code sent to your email</p>

        {/* Steps */}
        <div className="flex items-center justify-between mb-10">
          {/* Step 1 */}
          <div className="flex flex-col items-center w-1/3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-400 text-white font-bold">
              1
            </div>
            <p className="mt-2 text-sm">Send Email</p>
          </div>

          {/* Step Line */}
          <div className="flex-1 h-2 bg-white mx-2"></div>

          {/* Step 2 Active */}
          <div className="flex flex-col items-center w-1/3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
              2
            </div>
            <p className="mt-2 text-sm">OTP Verification</p>
          </div>

          {/* Step Line */}
          <div className="flex-1 h-2 bg-white mx-2"></div>

          {/* Step 3 */}
          <div className="flex flex-col items-center w-1/3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-400 text-white font-bold">
              3
            </div>
            <p className="mt-2 text-sm">Generate Password</p>
          </div>
        </div>

        {/* OTP Input */}
        <label className="block mb-2">Enter OTP</label>
        <input
          type="text"
          maxLength="6"
          className="w-full p-3 rounded-lg text-black mb-6 outline-none"
          placeholder="Enter 6-digit OTP"
        />

        {/* Button */} 
        <Link to="/forgot-reset">
        <button className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg font-semibold">
          Verify OTP
        </button>
        </Link>
        

        {/* Footer Link */}
        <p className="mt-4 text-center">
          Didn't receive OTP?{" "}
          <span className="underline cursor-pointer">Resend OTP</span>
        </p>
      </div>
    </div>
  );
};

export default OtpMiddle;
