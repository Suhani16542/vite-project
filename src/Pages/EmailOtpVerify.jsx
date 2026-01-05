import React, { useState, useRef } from "react";
import axios from "axios";

export default function EmailOtpVerify({ user }) {

  // ✅ FIX 1: email empty hona chahiye
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const inputRefs = useRef([]);

  console.log("verifying email for user:", user);
  console.log("Email state:", email);

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

      // ✅ FIX 2: sendBy me actual email bhejo
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

  /* ================= OTP INPUT LOGIC ================= */
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

      // ✅ FIX 3: yaha bhi actual email bhejo
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
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

        <h2 className="text-xl font-bold text-center text-blue-700 mb-6">
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
              className="w-full p-3 border rounded-lg"
            />

            {emailError && (
              <p className="text-sm mt-1 text-red-600">
                {emailError}
              </p>
            )}

            <button
              onClick={sendOtp}
              disabled={loading}
              className="w-full py-3 mt-4 text-white rounded-lg font-semibold bg-blue-600 hover:bg-blue-700"
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </>
        )}

        {/* ================= STEP 2 ================= */}
        {step === 2 && (
          <>
            <p className="text-sm text-gray-600 mb-4 text-center">
              Enter 6-digit OTP sent to <b>{email}</b>
            </p>

            <div className="flex justify-between gap-2 mb-6" onPaste={handlePaste}>
              {otp.map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  ref={(el) => (inputRefs.current[index] = el)}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-12 h-12 text-center text-lg border rounded-lg focus:outline-none focus:border-blue-600"
                />
              ))}
            </div>

            <button
              onClick={verifyOtp}
              disabled={loading || otp.includes("")}
              className="w-full py-3 text-white rounded-lg font-semibold bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </>
        )}

        {message && (
          <p className="text-center text-sm mt-4 text-blue-600">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
