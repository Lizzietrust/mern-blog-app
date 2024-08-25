import { useSelector } from "react-redux";
import DashboardHeader from "../components/DashboardHeader";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="">
      <DashboardHeader pageTitle="profile settings" />
      <form className="flex flex-col items-center my-10">
        <div className="w-20 h-20 cursor-pointer">
          <img
            src={currentUser?.profilePicture}
            alt=""
            className="w-full h-full rounded-full object-cover border-[3px] border-slate-950"
          />
        </div>
        <div className="flex flex-col w-80 mt-5 mb-3 gap-1">
          <label htmlFor="" className="text-sm font-medium">
            Username
          </label>
          <input
            type="text"
            className="w-full outline-none border-none h-10 bg-slate-900 px-3 text-slate-200 rounded-md"
            placeholder="username"
            defaultValue={currentUser?.username}
          />
        </div>
        <div className="flex flex-col w-80 mb-3 gap-1">
          <label htmlFor="" className="text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            className="w-full outline-none border-none h-10 bg-slate-900 px-3 text-slate-200 rounded-md"
            placeholder="email"
            defaultValue={currentUser?.email}
          />
        </div>
        <div className="flex flex-col w-80 mb-3 gap-1">
          <label htmlFor="" className="text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            className="w-full outline-none border-none h-10 bg-slate-900 px-3 text-slate-200 rounded-md"
            placeholder="password"
          />
        </div>
        <button
          type="submit"
          className="w-80 h-11 bg-rose-700 rounded-md text-slate-200 hover:bg-slate-900 mt-5"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;
