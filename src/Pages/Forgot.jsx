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
    <div className="min-h-screen bg-purple-300 flex items-center justify-center p-4">
      <div className="bg-gradient-to bg-puple-300 via-pink-500 to-purple-600 text-white p-8 rounded-2xl shadow-xl w-full max-w-md">

        <h2 className="text-2xl font-bold mb-2 text-center">Forgot Password</h2>
        <p className="text-center text-sm mb-6">Reset your password in 2 steps</p>

        <form onSubmit={handleSubmit}>
          <label className="block mb-2 font-semibold">Enter Your Email</label>

          <input
            type="email"
            className="w-full p-3 rounded-lg text-black"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Link to="/forgot-verify">
          <button
            type="submit"
            className="w-full mt-6 bg-blue-600 p-3 rounded-lg font-bold text-white"
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