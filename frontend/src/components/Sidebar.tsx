import { Link, useLocation } from "react-router-dom";
import { dashboardLinks } from "../constants";
import { FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-full h-full overflow-y-auto bg-slate-950 py-5 flex flex-col">
      <Link to="/" className="text-2xl font-semibold text-white px-5">
        BLOG
      </Link>

      <div className="flex flex-col gap-4 mt-5 pr-5">
        {dashboardLinks.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className={`flex items-center gap-3 w-full h-10 rounded-lg hover:bg-slate-400 hover:text-slate-950 px-5 ${
              location.pathname === item.path
                ? "bg-slate-400 text-slate-950 font-semibold"
                : "text-slate-400"
            }`}
          >
            <item.icon className="text-lg" />
            <span className="capitalize">{item.name}</span>
          </Link>
        ))}
      </div>

      <div className="mt-auto">
        <button
          className={`flex items-center gap-3 w-full h-10 rounded-lg text-red-500 px-5 hover:font-bold`}
        >
          <FaSignOutAlt className="text-lg" />
          <span className="capitalize">Sign out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
