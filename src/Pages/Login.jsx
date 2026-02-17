import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import api from "../api/axios";
import { useDispatch } from "react-redux";
import { LoginSuccess } from "../features/auth/authSlice";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await api.post("/user/login", formData);

      dispatch(LoginSuccess(res.data));

      localStorage.setItem("userId", res.data.user.id);
      localStorage.setItem("role", res.data.user.role);

      const role = res.data.user.role;

      if (role === "admin") navigate("/adminDashboard");
      else if (role === "employee") navigate("/employee");
      else if (role === "subadmin") navigate("/subadminDashboard");
      else if (role === "user") navigate("/userDashboard");
      else setError("Invalid user role");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          err.response?.data?.errors?.[0] ||
          "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#020617] to-[#052e16] p-4">
      <div className="bg-[#020617] border border-[#14532D] rounded-2xl p-8 sm:p-10 max-w-md w-full shadow-2xl">

        <h2 className="text-3xl font-bold text-center text-[#22C55E] mb-6">
          Welcome Back 👋
        </h2>

        {error && (
          <p className="bg-red-900/40 text-red-400 p-3 rounded-lg text-center mb-4">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Email */}
          <div>
            <label className="block font-medium mb-1 text-gray-300">
              Email
            </label>
            <div className="flex items-center gap-2 px-4 py-3 border border-[#14532D] rounded-xl bg-black">
              <Mail className="w-5 h-5 text-[#22C55E]" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full outline-none bg-transparent text-gray-200"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block font-medium mb-1 text-gray-300">
              Password
            </label>
            <div className="flex items-center gap-2 px-4 py-3 border border-[#14532D] rounded-xl bg-black">
              <Lock className="w-5 h-5 text-[#22C55E]" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full outline-none bg-transparent text-gray-200"
                required
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-[#22C55E] text-black font-semibold hover:bg-[#16A34A] transition disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center mt-6 text-gray-400">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-[#22C55E] font-medium hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
