import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">

      <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl p-8">

        <h1 className="text-3xl font-semibold mb-6">
          Create Account
        </h1>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none"
          />

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