import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

function Navbar() {

  const { logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {

    logout();

    navigate("/");

  };

  return (
    <div className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">

      <h2 className="text-lg font-medium">
        Team Task Manager
      </h2>

      <button
        onClick={handleLogout}
        className="text-sm border border-slate-300 px-4 py-2 rounded-lg hover:bg-slate-100"
      >
        Logout
      </button>

    </div>
  );
}

export default Navbar;