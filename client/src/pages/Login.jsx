import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import API from "../services/api";

import { AuthContext } from "../context/AuthContext";

function Login() {

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await API.post(
        "/auth/login",
        formData
      );

      login(response.data.access_token);

      navigate("/dashboard");

    } catch (error) {

      console.log(error.response.data);

    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">

      <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl p-8">

        <h1 className="text-3xl font-semibold mb-6">
          Login
        </h1>

        <form
          onSubmit={handleLogin}
          className="space-y-4"
        >

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
            Login
          </button>

        </form>

        <p className="text-sm text-slate-600 mt-5">
          Don’t have an account?{" "}
          <Link to="/signup" className="underline">
            Signup
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;