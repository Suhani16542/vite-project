import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react"; // icons

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
    bg-gradient-to from-purple-600 via-pink-500 to-purple-600 text-white p-4">

      {/* FORM BOX */}
      <div className="bg-white rounded-2xl shadow-lg border border-purple-200 p-10 w-full max-w-md text-black">

        <h2 className="text-3xl font-bold text-center text-pink-500  mb-2">
          Welcome Back 👋
        </h2>
        <p className="text-center  mb-8">
          Login to continue your journey
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* EMAIL */}
          <div className="space-y-1">
            <label className="block text-white font-medium">Email</label>
            <div className="flex items-center gap-2 px-4 py-3 border rounded-xl bg-white/80 
            focus-within:ring-2 focus-within:ring-pink-400">
              <Mail className="w-5 h-5 text-gray-700" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none text-black"
                required
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div className="space-y-1">
            <label className="block text-white font-medium">Password</label>
            <div className="flex items-center gap-2 px-4 py-3 border rounded-xl bg-white/80 
            focus-within:ring-2 focus-within:ring-pink-400">
              <Lock className="w-5 h-5 text-gray-700" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full bg-transparent outline-none text-black"
                required
              />
            </div>
          </div>

          {/* FORGOT PASSWORD */}
          <div className="text-right mt-3">
            <Link 
              to="/forgot" 
              className="text-yellow-200 hover:text-yellow-300 font-medium transition"
            >
              Forgot Password?
            </Link>
          </div>

          {/* LOGIN BUTTON */}
          <Link to="/Dasboard">
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white font-semibold 
            hover:bg-green-700 transition-all duration-300 shadow-md"
          >
            Login
          </button>
          </Link>
        </form>

        {/* OR SECTION */}
        <div className="text-center text-white">
          <div className="flex items-center my-5">
            <div className="flex-1 h-px bg-white/40"></div>
            <span className="px-3 text-white text-sm font-medium">OR</span>
            <div className="flex-1 h-px bg-white/40"></div>
          </div>

          <Link 
            to="/signup" 
            className="text-yellow-200 hover:text-yellow-300 font-medium transition"
          >
            Don't have an account? Sign Up
          </Link>
        </div>

      </div>
    </div>
  );
}

