import React, { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function OtpVerify() {
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || {};

  const OTP_LENGTH = 5;
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const [error, setError] = useState("");
  const otpRefs = useRef([]);

  otpRefs.current = Array.from(
    { length: OTP_LENGTH },
    (_, i) => otpRefs.current[i] || React.createRef()
  );

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 1);
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < OTP_LENGTH - 1) {
      otpRefs.current[index + 1].current.focus();
    }
  };

  const handleVerify = () => {
    if (otp.includes("")) {
      setError("Please enter complete OTP");
      return;
    }
    alert("OTP Verified Successfully!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 p-4">

      {/* Glass Card */}
      <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-8 w-full max-w-sm text-white shadow-2xl">

        <h2 className="text-3xl font-bold text-center mb-1">OTP Check</h2>
        <p className="text-center text-sm mb-6 text-white/80">
          Code sent to <br />
          <span className="font-semibold text-yellow-300">
            {email || "demo@email.com"}
          </span>
        </p>

        {/* OTP Boxes */}
        <div className="flex justify-between mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={otpRefs.current[index]}
              value={digit}
              onChange={(e) => handleChange(e, index)}
              maxLength={1}
              className="w-12 h-14 rounded-xl text-center text-xl font-bold text-black outline-none focus:ring-2 focus:ring-yellow-400"
            />
          ))}
        </div>

        {error && (
          <p className="text-red-300 text-sm text-center mb-3">{error}</p>
        )}

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          className="w-full py-3 rounded-xl bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition"
        >
          Confirm OTP
        </button>

        {/* Resend */}
        <button
          onClick={() => alert("OTP Resent")}
          className="mt-4 w-full text-sm text-center text-white/80 hover:text-white"
        >
          Didn’t get code? Resend
        </button>
      </div>
    </div>
  );
}
