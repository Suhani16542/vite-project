import React, { useState } from "react";

const ForgotVerify = () => {
  const [otp, setOtp] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Password Reset Successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#020617] to-[#052e16] p-4">
      <div className="bg-[#020617] border border-[#14532D] text-gray-200 p-8 rounded-2xl shadow-2xl w-full max-w-md">

        <h2 className="text-2xl font-bold mb-2 text-center text-[#22C55E]">
          Verify OTP
        </h2>
        <p className="text-center text-sm mb-6 text-gray-400">
          Enter OTP & Create New Password
        </p>

        <form onSubmit={handleSubmit}>

          {/* OTP */}
          <label className="block mb-2 font-semibold text-gray-300">
            Enter OTP
          </label>
          <input
            type="number"
            className="w-full p-3 rounded-xl bg-black border border-[#14532D] text-gray-200 outline-none mb-4"
            placeholder="123456"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />

          {/* New Password */}
          <label className="block mb-2 font-semibold text-gray-300">
            New Password
          </label>
          <input
            type="password"
            className="w-full p-3 rounded-xl bg-black border border-[#14532D] text-gray-200 outline-none mb-4"
            placeholder="Enter new password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />

          {/* Confirm Password */}
          <label className="block mb-2 font-semibold text-gray-300">
            Confirm Password
          </label>
          <input
            type="password"
            className="w-full p-3 rounded-xl bg-black border border-[#14532D] text-gray-200 outline-none mb-4"
            placeholder="Confirm password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full mt-4 bg-[#22C55E] text-black p-3 rounded-xl font-bold hover:bg-[#16A34A] transition"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotVerify;
