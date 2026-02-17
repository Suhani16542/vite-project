import React, { useState, useRef } from "react";
import axios from "axios";

export default function EmailOtpVerify({ user }) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const inputRefs = useRef([]);

  /* ================= SEND OTP ================= */
  const sendOtp = async () => {
    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    }

    setEmailError("");

    try {
      setLoading(true);
      setMessage("");

      const res = await axios.post(
        "http://localhost:3000/api/v1/user/send-otp",
        {
          sendBy: email,
          otpType: "email",
        }
      );

      setMessage(res.data.message || "OTP sent to email");
      setStep(2);
    } catch (err) {
      setMessage(err.response?.data?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  /* ================= OTP INPUT ================= */
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const pasted = e.clipboardData.getData("text").slice(0, 6);
    if (!/^\d+$/.test(pasted)) return;

    const newOtp = pasted.split("");
    setOtp(newOtp);

    newOtp.forEach((val, i) => {
      if (inputRefs.current[i]) {
        inputRefs.current[i].value = val;
      }
    });
  };

  /* ================= VERIFY OTP ================= */
  const verifyOtp = async () => {
    try {
      setLoading(true);
      setMessage("");

      const res = await axios.post(
        "http://localhost:3000/api/v1/user/verify-otp",
        {
          sendBy: email,
          otp: otp.join(""),
        }
      );

      setMessage(res.data.message || "Email verified successfully");
    } catch (err) {
      setMessage(err.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#020617] to-[#052e16] p-4">
      <div className="bg-[#020617] border border-[#14532D] p-8 rounded-2xl shadow-2xl w-full max-w-md">

        <h2 className="text-2xl font-bold text-center text-[#22C55E] mb-6">
          Verify Email
        </h2>

        {/* ================= STEP 1 ================= */}
        {step === 1 && (
          <>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
              }}
              placeholder="Enter your email"
              className="w-full p-3 rounded-xl border border-[#14532D] bg-black text-gray-200 outline-none"
            />

            {emailError && (
              <p className="text-sm mt-2 text-red-400">
                {emailError}
              </p>
            )}

            <button
              onClick={sendOtp}
              disabled={loading}
              className="w-full py-3 mt-5 rounded-xl bg-[#22C55E] text-black font-semibold hover:bg-[#16A34A] transition disabled:opacity-60"
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </>
        )}

        {/* ================= STEP 2 ================= */}
        {step === 2 && (
          <>
            <p className="text-sm text-gray-400 mb-5 text-center">
              Enter 6-digit OTP sent to <br />
              <span className="text-[#22C55E] font-medium">{email}</span>
            </p>

            <div
              className="flex justify-between gap-2 mb-6"
              onPaste={handlePaste}
            >
              {otp.map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  ref={(el) => (inputRefs.current[index] = el)}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-12 h-12 text-center text-lg rounded-lg border border-[#14532D] bg-black text-gray-200 focus:outline-none focus:border-[#22C55E]"
                />
              ))}
            </div>

            <button
              onClick={verifyOtp}
              disabled={loading || otp.includes("")}
              className="w-full py-3 rounded-xl bg-[#22C55E] text-black font-semibold hover:bg-[#16A34A] transition disabled:opacity-50"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </>
        )}

        {message && (
          <p className="text-center text-sm mt-5 text-[#22C55E]">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
