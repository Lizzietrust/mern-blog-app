import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div
      className="pt-28 pb-6 min-h-screen w-full flex items-center justify-center"
      style={{
        background: `url('/bg-image.jpg') no-repeat center center / cover`,
      }}
    >
      <div className="glass-card w-[500px] h-[550px] border border-slate-200 p-5 rounded-lg">
        <h2 className="uppercase font-semibold text-4xl text-center text-white pb-10">
          sign up
        </h2>
        <form className="w-full flex flex-col gap-5 text-white">
          <div className="flex flex-col gap-2">
            <label htmlFor="username" className="uppercase">
              Username
            </label>
            <input
              type="text"
              name=""
              id=""
              className="w-full h-14 rounded-full bg-slate-950 p-4 placeholder:text-white"
              placeholder="Enter Username"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="uppercase">
              Email
            </label>
            <input
              type="email"
              name=""
              id=""
              className="w-full h-14 rounded-full bg-slate-950 p-4 placeholder:text-white"
              placeholder="Enter Email"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="uppercase">
              Password
            </label>
            <input
              type="password"
              name=""
              id=""
              className="w-full h-14 rounded-full bg-slate-950 p-4 placeholder:text-white"
              placeholder="Enter Password"
            />
          </div>

          <button
            type="submit"
            className="w-full h-14 rounded-full bg-transparent border border-slate-950 uppercase"
          >
            submit
          </button>
        </form>

        <div className="text-center text-white pt-5">
          Already have an account?
          <Link to="/login" className="text-slate-950 font-semibold pl-2">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
