import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  // Form state
  const [role, setRole] = useState("User");
  const [country, setCountry] = useState("");
  const [stateVal, setStateVal] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const [errors, setErrors] = useState({});

  // Validation
  function validateStep(currentStep) {
    const e = {};

    if (currentStep === 2) {
      if (!country.trim()) e.country = "Country required";
      if (!stateVal.trim()) e.state = "State required";
      if (!city.trim()) e.city = "City required";
      if (!gender) e.gender = "Select gender";
    }

    if (currentStep === 3) {
      if (!firstName.trim()) e.firstName = "First name required";
      if (!lastName.trim()) e.lastName = "Last name required";
      if (!email.trim()) e.email = "Email required";
      else if (!/^\S+@\S+\.\S+$/.test(email)) e.email = "Invalid email";
      if (!mobile.trim()) e.mobile = "Mobile required";
      if (!password.trim()) e.password = "Password required";
      if (!agree) e.agree = "Please accept Terms";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function goNext() {
    if (validateStep(step)) {
      setStep((s) => Math.min(3, s + 1));
    }
  }

  function goPrev() {
    setErrors({});
    setStep((s) => Math.max(1, s - 1));
  }

  function handleCreateAccount() {
    if (!validateStep(3)) return;

    navigate("/otp-verify", {
      state: { email, mobile },
    });
  }

  function StepCircle({ n, step }) {
    const active = step === n;
    const done = step > n;
    return (
      <div
        className={`rounded-full w-10 h-10 flex items-center justify-center font-bold text-white ${
          done ? "bg-green-500" : active ? "bg-purple-600" : "bg-gray-300 text-gray-700"
        }`}
      >
        {done ? "✓" : n}
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-300 p-6">
      
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg border border-purple-400">

        <h2 className="text-3xl font-bold text-center mb-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          Sign Up
        </h2>

        <p className="text-center text-gray-600 mb-6">
          Create your personal account
        </p>

        {/* Stepper */}
        <div className="flex flex-col items-center w-full my-4">
          <div className="flex items-center w-full max-w-md justify-between">
            <div className="flex flex-col items-center flex-1">
              <StepCircle n={1} step={step} />
            </div>

            <div
              className={`h-[2px] flex-1 mx-2 ${
                step > 1 ? "bg-purple-600" : "bg-gray-300"
              }`}
            ></div>

            <div className="flex flex-col items-center flex-1">
              <StepCircle n={2} step={step} />
            </div>

            <div
              className={`h-[2px] flex-1 mx-2 ${
                step > 2 ? "bg-purple-600" : "bg-gray-300"
              }`}
            ></div>

            <div className="flex flex-col items-center flex-1">
              <StepCircle n={3} step={step} />
            </div>
          </div>

          {/* Labels */}
          <div className="flex justify-between w-full max-w-md mt-3 text-gray-800 text-sm">
            <div className="flex-1 text-center">Role Setup</div>
            <div className="flex-1 text-center">Location Details</div>
            <div className="flex-1 text-center">Account Setup</div>
          </div>
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <div>
            <h3 className="text-lg font-semibold mb-4 text-center">Role Setup</h3>

            <label className="block text-sm font-medium mb-1">Select Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-3 border rounded-lg bg-gray-50"
            >
              <option>User</option>
            </select>

            <div className="flex justify-between mt-6">
              <div />
              <button className="px-6 py-2 rounded-lg text-white bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600" onClick={goNext}>
                Next
              </button>
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div>
            <h3 className="text-lg font-semibold mb-4 text-center">Location Details</h3>

            <div className="space-y-4">

              <div className="flex gap-4">
                <input
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="Country"
                  className="w-1/2 p-3 border rounded-lg bg-gray-50"
                />
                <input
                  value={stateVal}
                  onChange={(e) => setStateVal(e.target.value)}
                  placeholder="State"
                  className="w-1/2 p-3 border rounded-lg bg-gray-50"
                />
              </div>
              {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
              {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}

              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="City"
                className="w-full p-3 border rounded-lg bg-gray-50"
              />
              {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}

              {/* Gender */}
              <div className="flex gap-6 mt-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={gender === "Male"}
                    onChange={() => setGender("Male")}
                    className="accent-purple-600"
                  />
                  Male
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={gender === "Female"}
                    onChange={() => setGender("Female")}
                    className="accent-purple-600"
                  />
                  Female
                </label>
              </div>
              {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}

              <div className="flex justify-between mt-6">
                <button onClick={goPrev} className="px-6 py-2 border rounded-lg">
                  Previous
                </button>

                <button
                  className="px-6 py-2 rounded-lg text-white bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600"
                  onClick={goNext}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div>
            <h3 className="text-lg font-semibold mb-4 text-center">Account Setup</h3>

            <div className="space-y-4">
              <div className="flex gap-4">
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
                  className="w-1/2 p-3 border rounded-lg bg-gray-50"
                />
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                  className="w-1/2 p-3 border rounded-lg bg-gray-50"
                />
              </div>
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}

              <div className="flex gap-4">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-1/2 p-3 border rounded-lg bg-gray-50"
                />
                <input
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Mobile"
                  className="w-1/2 p-3 border rounded-lg bg-gray-50"
                />
              </div>
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}

              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="w-full p-3 border rounded-lg bg-gray-50"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

              <label className="flex gap-2">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                />
                I agree to Terms & Policy
              </label>
              {errors.agree && <p className="text-red-500 text-sm">{errors.agree}</p>}

              <div className="flex justify-between mt-6">
                <button onClick={goPrev} className="px-6 py-2 border rounded-lg">
                  Previous
                </button>

                <button
                  onClick={handleCreateAccount}
                  className="px-6 py-2 rounded-lg text-white bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600"
                >
                  Create Account
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
