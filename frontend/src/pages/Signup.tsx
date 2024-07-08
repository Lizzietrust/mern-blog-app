import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errormsg, setErrorMsg] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const incompleteData =
      formData.username === "" ||
      formData.email === "" ||
      formData.password === "";

    if (incompleteData) {
      setErrorMsg("Please fill all fields");
    } else {
      setIsLoading(true);
      try {
        const res = await fetch("/api/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await res.json();
        console.log({ data });

        if (data.success === false) {
          toast.error(data.message);
        }

        setIsLoading(false);

        if (res.ok) {
          navigate("/login");
        }
      } catch (error) {
        console.log(error);
        toast.error(error.message);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    if (errormsg) {
      setTimeout(() => {
        setErrorMsg(null);
      }, 5000);
    }
  }, [errormsg]);

  return (
    <div
      className="pt-28 pb-6 min-h-screen w-full flex items-center justify-center"
      style={{
        background: `url('/bg-image.jpg') no-repeat center center / cover`,
      }}
    >
      <div className="glass-card w-[500px] h-[570px] border border-slate-200 p-5 rounded-lg">
        <h2
          className={`uppercase font-semibold text-4xl text-center text-white pb-10 ${
            errormsg && "pb-5"
          }`}
        >
          sign up
        </h2>
        {errormsg && (
          <div className=" w-full h-10 flex items-center justify-center bg-red-100 text-red-500 text-sm text-center mb-3">
            {errormsg}
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-5 text-white"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="username" className="uppercase">
              Username
            </label>
            <input
              type="text"
              name="username"
              id=""
              className="w-full h-14 rounded-full bg-slate-950 p-4 placeholder:text-white"
              placeholder="Enter Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="uppercase">
              Email
            </label>
            <input
              type="email"
              name="email"
              id=""
              className="w-full h-14 rounded-full bg-slate-950 p-4 placeholder:text-white"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="uppercase">
              Password
            </label>
            <input
              type="password"
              name="password"
              id=""
              className="w-full h-14 rounded-full bg-slate-950 p-4 placeholder:text-white"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full h-14 rounded-full bg-transparent border border-slate-950 uppercase"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "submit"}
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
