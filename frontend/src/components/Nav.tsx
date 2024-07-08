import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="w-full h-20 bg-slate-100 z-50 fixed top-0 left-0 shadow-lg">
      <div className="w-[90%] mx-auto h-full flex items-center justify-between">
        <div className="flex items-center gap-40">
          <Link to="/" className="text-2xl font-semibold">
            BLOG
          </Link>

          <div className="flex items-center gap-10">
            <Link to="/" className="font-medium text-lg text-gray-700">
              Home
            </Link>
            <Link to="/about" className="font-medium text-lg text-gray-700">
              About
            </Link>
            <Link to="/projects" className="font-medium text-lg text-gray-700">
              Projects
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-12">
          <div className="flex items-center justify-between p-3 w-96 h-14 rounded-full bg-slate-950">
            <input
              type="text"
              className="bg-transparent outline-none border-none text-white placeholder:text-white"
              placeholder="Type to search"
            />

            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center cursor-pointer">
              <FaSearch />
            </div>
          </div>

          <Link
            to="/login"
            className="bg-transparent border border-slate-950 rounded-full w-28 h-14 flex items-center justify-center text-slate-950 font-semibold text-lg"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
