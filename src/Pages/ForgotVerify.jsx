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
    <div className="min-h-screen bg-purple-300 flex items-center justify-center p-4">
      <div className="bg-gradient-to from-purple-600 via-pink-500 to-purple-600 text-white p-8 rounded-2xl shadow-xl w-full max-w-md">

        <h2 className="text-2xl font-bold mb-2 text-center">Verify OTP</h2>
        <p className="text-center text-sm mb-6">Enter OTP & Create New Password</p>

        <form onSubmit={handleSubmit}>
          
          <label className="block mb-2 font-semibold">Enter OTP</label>
          <input
            type="number"
            className="w-full p-3 rounded-lg text-black mb-4"
            placeholder="123456"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />

          <label className="block mb-2 font-semibold">New Password</label>
          <input
            type="password"
            className="w-full p-3 rounded-lg text-black mb-4"
            placeholder="Enter new password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />

          <label className="block mb-2 font-semibold">Confirm Password</label>
          <input
            type="password"
            className="w-full p-3 rounded-lg text-black mb-4"
            placeholder="Confirm password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 p-3 rounded-lg font-bold text-white"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotVerify;