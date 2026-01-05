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
     console.log("LOGIN RESPONSE 👉", res.data);
      // Redux store update
      dispatch(LoginSuccess(res.data));

      // Role nikaalna (safe way)
      const role = res.data?.user?.role;

      if (role === "admin") {
        navigate("/adminDashboard");
      } else if (role === "employee") {
        navigate("/employee");
      } else if (role === "subadmin") {
        navigate("/subadminDashboard");
      } else if (role === "user") {
        navigate("/userDashboard");
      } else {
        setError("Invalid user role");
      }
    } catch (err) {
      if (err.response) {
        setError(
          err.response.data?.message ||
            err.response.data?.errors?.[0] ||
            "Login failed"
        );
      } else {
        setError("Server not responding");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 p-4">
      <div className="bg-white rounded-2xl p-10 max-w-md w-full shadow-lg">

        <h2 className="text-3xl font-bold text-center text-pink-500 mb-4">
          Welcome Back 👋
        </h2>

        {error && (
          <p className="bg-red-100 text-red-600 p-3 rounded-lg text-center mb-4">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* EMAIL */}
          <div>
            <label className="block font-medium mb-1">Email</label>
            <div className="flex items-center gap-2 px-4 py-3 border rounded-xl">
              <Mail className="w-5 h-5 text-gray-700" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                className="w-full outline-none"
                required
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block font-medium mb-1">Password</label>
            <div className="flex items-center gap-2 px-4 py-3 border rounded-xl">
              <Lock className="w-5 h-5 text-gray-700" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full outline-none"
                required
              />
            </div>
          </div>

          <div className="text-right">
            <Link to="/forgot" className="text-sm text-pink-500">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-pink-500 text-white font-semibold hover:bg-pink-600 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-pink-500 font-medium">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
