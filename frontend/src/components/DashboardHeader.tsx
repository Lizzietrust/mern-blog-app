import React from "react";
import { FaSearch } from "react-icons/fa";
import { MdNotificationsNone } from "react-icons/md";
import { useSelector } from "react-redux";

interface DashboardHeaderProps {
  pageTitle: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ pageTitle }) => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="border-b border-slate-300 h-16 w-full flex items-center justify-between px-5">
      <h1 className="capitalize text-slate-900 font-semibold text-2xl">
        {pageTitle}
      </h1>

      <div className="flex items-center h-10 w-[250px] rounded-md bg-slate-950 px-3">
        <FaSearch className="text-slate-300 " />
        <input
          type="text"
          className="w-[90%] h-full border-none outline-none bg-transparent text-slate-300 text-sm  pl-3"
          placeholder="Search"
        />
      </div>

      <div className="flex items-center gap-10">
        <div className="flex items-center justify-center w-10 h-10 rounded-full relative bg-slate-900 cursor-pointer">
          <MdNotificationsNone className="text-slate-300 font-black text-2xl" />
        </div>
        <div className="flex items-center gap-3">
          <p className="text-sm font-medium text-slate-700">
            {currentUser?.username}
          </p>
          <img
            src={currentUser?.profilePicture}
            alt="Profile picture"
            className="w-10 h-10 rounded-full object-cover cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
