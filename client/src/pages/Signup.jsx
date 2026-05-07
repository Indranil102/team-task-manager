import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import API from "../services/api";

function Signup() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {

    e.preventDefault();

    try {

      await API.post(
        "/auth/signup",
        formData
      );

      navigate("/");

    } catch (error) {

      console.log(error.response.data);

    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">

      <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl p-8">

        <h1 className="text-3xl font-semibold mb-6">
          Create Account
        </h1>

        <form
          onSubmit={handleSignup}
          className="space-y-4"
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none"
          />

          <button
            className="w-full bg-slate-900 text-white py-3 rounded-lg"
          >
            Signup
          </button>

        </form>

        <p className="text-sm text-slate-600 mt-5">
          Already have an account?{" "}
          <Link to="/" className="underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;