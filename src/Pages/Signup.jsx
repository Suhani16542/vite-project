import axios from "axios";
import React, { useState } from "react";
import EmailOtpVerify from "./EmailOtpVerify";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: "",
    role: "user",
    password: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [showOtp, setShowOtp] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = "Username required";
    if (!formData.email.trim()) newErrors.email = "Email required";
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile required";
    if (!formData.password.trim()) newErrors.password = "Password required";
    if (!formData.agree) newErrors.agree = "Accept terms & conditions";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/user/signup",
        formData
      );
      setUserEmail(res.data.user.email);
      setShowOtp(true);
    } catch (err) {
      if (err.response?.data?.errors) {
        alert(err.response.data.errors[0]);
      }
    }
  };

  if (showOtp) {
    return <EmailOtpVerify user={userEmail} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-green-950 to-black p-4">

      <div className="bg-gray-900 rounded-2xl p-10 max-w-md w-full shadow-2xl border border-green-800">

        <h2 className="text-3xl font-bold text-center text-green-400 mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Username */}
          <div>
            <label className="block text-green-200 mb-1">Username</label>
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-black text-white border border-green-700 focus:ring-2 focus:ring-green-500 outline-none"
            />
            {errors.username && (
              <p className="text-red-400 text-sm mt-1">{errors.username}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-green-200 mb-1">Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-black text-white border border-green-700 focus:ring-2 focus:ring-green-500 outline-none"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-green-200 mb-1">Mobile</label>
            <input
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-black text-white border border-green-700 focus:ring-2 focus:ring-green-500 outline-none"
            />
            {errors.mobile && (
              <p className="text-red-400 text-sm mt-1">{errors.mobile}</p>
            )}
          </div>

          {/* Role */}
          <div>
            <label className="block text-green-200 mb-1">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-black text-white border border-green-700 focus:ring-2 focus:ring-green-500 outline-none"
            >
              <option value="user">user</option>
              <option value="employee">employee</option>
              <option value="subadmin">subadmin</option>
            </select>
          </div>

          {/* Password */}
          <div>
            <label className="block text-green-200 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-black text-white border border-green-700 focus:ring-2 focus:ring-green-500 outline-none"
            />
            {errors.password && (
              <p className="text-red-400 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Agree */}
          <label className="flex items-center gap-2 text-sm text-green-300">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            I agree to Terms & Conditions
          </label>
          {errors.agree && (
            <p className="text-red-400 text-sm">{errors.agree}</p>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={!formData.agree}
            className={`w-full py-3 rounded-xl font-semibold
              ${
                formData.agree
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "bg-gray-600 cursor-not-allowed text-gray-300"
              }`}
          >
            Sign Up
          </button>

        </form>
      </div>
    </div>
  );
}
