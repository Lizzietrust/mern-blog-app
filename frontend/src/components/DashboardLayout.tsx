import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="w-[18%] h-full">
        <Sidebar />
      </div>

      <div className="w-[82%] h-full bg-slate-100">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
