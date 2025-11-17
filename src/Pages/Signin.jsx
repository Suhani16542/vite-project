// SignIn.jsx
import React, { useState } from "react";

export default function Signin({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email) return setError("Email darj karein.");
    if (!password) return setError("Password darj karein.");

    if (onSubmit) {
      onSubmit({ email, password });
    } else {
      console.log("Submit:", { email, password });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-300 px-4">
      <div className="w-full max-w-md rounded-2xl shadow-lg p-8 
                      bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white">

        <header className="text-center mb-6">
          <h1 className="text-3xl font-serif font-semibold">Sign in</h1>
          <p className="mt-2 text-white/90">Welcome back! Please sign in.</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="You@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black"
              aria-label="Email"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black"
              aria-label="Password"
            />
            <div className="text-right mt-2">
              <a href="#" className="text-sm text-white underline">
                Forgot Password
              </a>
            </div>
          </div>

          {error && <p className="text-sm text-yellow-200">{error}</p>}

          <button
            type="submit"
            className="w-full bg-white text-purple-700 hover:bg-gray-200 font-semibold rounded-xl py-3 shadow-sm transition"
          >
            Sign In
          </button>

          <div className="flex items-center my-3">
            <div className="flex-1 h-px bg-white/50" />
            <span className="px-3 text-white/80 text-sm">or</span>
            <div className="flex-1 h-px bg-white/50" />
          </div>

          <p className="text-center text-white/90">
            Don't have an account?{" "}
            <a href="#" className="underline font-semibold">
              Sign Up
            </a>
          </p>
        </form>

      </div>
    </div>
  );
};
