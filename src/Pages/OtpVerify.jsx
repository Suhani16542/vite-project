import React, { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function OtpVerify() {
  const navigate = useNavigate();
  const location = useLocation();

  const { email } = location.state || {};

  const OTP_LENGTH = 5;
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const otpRefs = useRef([]);

  otpRefs.current = Array.from({ length: OTP_LENGTH }, (_, i) => otpRefs.current[i] || React.createRef());

  const [error, setError] = useState("");

  function handleOtpChange(e, idx) {
    const val = e.target.value.replace(/\D/g, "").slice(0, 1);

    const newOtp = [...otp];
    newOtp[idx] = val;
    setOtp(newOtp);

    if (val && idx < OTP_LENGTH - 1) {
      otpRefs.current[idx + 1].current.focus();
    }
  }

  function handleVerify() {
    if (otp.some((d) => d === "")) {
      setError("Enter full OTP");
      return;
    }

    alert("Account Created Successfully!");
    navigate("/login");
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white flex items-center justify-center p-6">

      {/* FORM BOX */}
      <div className="bg-purple-300 shadow-xl p-8 rounded-2xl w-full max-w-md text-black">

        <h2 className="text-2xl font-bold text-center mb-2 text-white">Verify Your Email</h2>

        <p className="text-center text-white mb-6">
          Enter the 5-digit OTP sent to  
          <br />
          <span className="text-yellow-300">{email || "demo@example.com"}</span>
        </p>

        <div className="flex justify-center gap-3 mb-4">
          {otp.map((digit, i) => (
            <input
              key={i}
              ref={otpRefs.current[i]}
              value={digit}
              onChange={(e) => handleOtpChange(e, i)}
              className="w-12 h-12 text-center border rounded-lg text-xl bg-white"
              maxLength={1}
            />
          ))}
        </div>

        {error && <p className="text-red-700 text-center text-sm">{error}</p>}

        <button
          onClick={handleVerify}
          className="w-full bg-green-600 text-white py-3 mt-4 rounded-lg"
        >
          Verify OTP
        </button>

        <button
          onClick={() => alert("OTP Resent!")}
          className="mt-4 w-full text-yellow-200 text-sm text-center"
        >
          Resend OTP
        </button>

      </div>
    </div>
  );
}
