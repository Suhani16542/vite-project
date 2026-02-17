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
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div
        className="w-full max-w-md rounded-2xl shadow-lg p-8
                   bg-gradient-to-r from-black via-green-900 to-black text-white"
      >

        <header className="text-center mb-6">
          <h1 className="text-3xl font-serif font-semibold text-green-300">
            Sign in
          </h1>
          <p className="mt-2 text-green-200/80">
            Welcome back! Please sign in.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block font-semibold mb-2 text-green-200">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="You@example.com"
              className="w-full rounded-lg px-4 py-3 text-black
                         focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2 text-green-200">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-lg px-4 py-3 text-black
                         focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <div className="text-right mt-2">
              <a href="#" className="text-sm text-green-300 underline">
                Forgot Password
              </a>
            </div>
          </div>

          {error && (
            <p className="text-sm text-red-400">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700
                       font-semibold rounded-xl py-3 text-white transition"
          >
            Sign In
          </button>

          <div className="flex items-center my-3">
            <div className="flex-1 h-px bg-green-500/40" />
            <span className="px-3 text-green-300 text-sm">or</span>
            <div className="flex-1 h-px bg-green-500/40" />
          </div>

          <p className="text-center text-green-200">
            Don't have an account?{" "}
            <a href="#" className="underline font-semibold text-green-300">
              Sign Up
            </a>
          </p>
        </form>

      </div>
    </div>
  );
}
