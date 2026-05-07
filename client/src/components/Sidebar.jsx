import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const links = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Projects", path: "/projects" },
    { name: "Tasks", path: "/tasks" },
  ];

  return (
    <div className="w-64 bg-white border-r border-slate-200 p-5">

      <h1 className="text-2xl font-semibold mb-8">
        TaskManager
      </h1>

      <div className="space-y-2">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`block px-4 py-2 rounded-lg transition ${
              location.pathname === link.path
                ? "bg-slate-900 text-white"
                : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;