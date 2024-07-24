import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useState } from "react";
import { DiVim } from "react-icons/di";

const Nav = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown((prevState) => !prevState);
  };

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
            <Link to="/dashboard" className="font-medium text-lg text-gray-700">
              Dashboard
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

          {currentUser ? (
            <div className="cursor-pointer" onClick={toggleDropdown}>
              <img
                src={currentUser?.profilePicture}
                alt=""
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-transparent border border-slate-950 rounded-full w-28 h-14 flex items-center justify-center text-slate-950 font-semibold text-lg"
            >
              Login
            </Link>
          )}
        </div>
      </div>
      {dropdown && (
        <div className="bg-slate-950 w-[220px] rounded-xl absolute top-20 right-[5%] p-4">
          <div className="pb-5">
            <p className="text-white capitalize font-medium text-sm">
              {currentUser?.username}
            </p>
            <p className="text-slate-300 capitalize font-medium text-xs truncate w-[80%]">
              {currentUser?.email}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className=" hover:bg-slate-900 py-2">
              <Link to="/dashboard?tab=profile" className="text-white">
                Profile
              </Link>
            </div>
            <div className=" hover:bg-slate-900 py-2">
              <button className="text-white">Sign out</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
