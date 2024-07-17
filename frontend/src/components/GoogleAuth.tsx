import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

const GoogleAuth = () => {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });

    try {
      const googleRes = await signInWithPopup(auth, provider);
      console.log({ googleRes });

      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: googleRes?.user?.displayName,
          email: googleRes?.user?.email,
          googlePhotoUrl: googleRes?.user?.photoURL,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="w-full h-14 rounded-full flex items-center gap-2 justify-center cursor-pointer bg-gradient-to-tr from-slate-700 to-rose-700 text-white mt-5"
      onClick={handleClick}
    >
      <FcGoogle className="text-2xl" />
      Continue with google
    </div>
  );
};

export default GoogleAuth;
