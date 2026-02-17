import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/forgot-verify");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#020617] to-[#052e16] p-4">
      <div className="bg-[#020617] border border-[#14532D] text-gray-200 p-8 rounded-2xl shadow-2xl w-full max-w-md">

        <h2 className="text-2xl font-bold mb-2 text-center text-[#22C55E]">
          Forgot Password
        </h2>
        <p className="text-center text-sm mb-6 text-gray-400">
          Reset your password in 2 steps
        </p>

        <form onSubmit={handleSubmit}>
          <label className="block mb-2 font-semibold text-gray-300">
            Enter Your Email
          </label>

          <input
            type="email"
            className="w-full p-3 rounded-xl bg-black border border-[#14532D] text-gray-200 outline-none"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Link to="/forgot-verify">
            <button
              type="submit"
              className="w-full mt-6 bg-[#22C55E] text-black p-3 rounded-xl font-bold hover:bg-[#16A34A] transition"
            >
              Send OTP
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Forgot;
