import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
function Login() {
  const { login } = useContext(AuthContext);
const navigate = useNavigate();
const handleLogin = (e) => {
  e.preventDefault();

  login("fake-jwt-token");

  navigate("/dashboard");
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">

      <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl p-8">

        <h1 className="text-3xl font-semibold mb-6">
          Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
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