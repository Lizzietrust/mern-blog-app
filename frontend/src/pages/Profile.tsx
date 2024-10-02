import { useSelector } from "react-redux";
import DashboardHeader from "../components/DashboardHeader";
import { useEffect, useRef, useState } from "react";
import { FiCamera } from "react-icons/fi";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import { toast } from "react-toastify";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  updateStart,
  updateSuccess,
  updateFailure,
} from "../redux/user/userSlice";
import { useDispatch } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [profileImg, setProfileImg] = useState(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageUploadProgress, setImageUploadProgress] = useState<number | null>(
    null
  );
  const [imageUploadError, setImageUploadError] = useState<string | null>(null);
  const [imageUploading, setImageUploading] = useState<boolean>(false);
  const [formData, setFormData] = useState({});
  const fileRef = useRef();
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setProfileImg(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    if (profileImg) {
      uploadImage();
    }
  }, [profileImg]);

  const uploadImage = async () => {
    setImageUploading(true);
    setImageUploadError(null);

    const storage = getStorage(app);
    const fileName = new Date().getTime() + profileImg?.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, profileImg);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        setImageUploadProgress(progress.toFixed(0));
      },
      (error) => {
        setImageUploadError(
          "Could not upload image (File must be less than 2MB)"
        );
        toast.error(imageUploadError);
        setImageUploadProgress(null);
        setProfileImg(null);
        setImageUrl(null);
        setImageUploading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageUrl(downloadURL);
          setFormData({ ...formData, profilePicture: downloadURL });
          setImageUploading(false);
        });
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(formData).length === 0) {
      toast.error("No changes made");
      return;
    }

    if (imageUploading) {
      toast.error("Please wait for image to upload");
      return;
    }

    try {
      dispatch(updateStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        dispatch(updateFailure(data.message));
        // setUpdateUserError(data.message);
        toast.error(data.message);
      } else {
        dispatch(updateSuccess(data));
        // setUpdateUserSuccess("Profile updated successfully");
        toast.success("Profile updated successfully");
      }
    } catch (error) {
      dispatch(updateFailure(error.message));
      // setUpdateUserError(error.message);
      toast.error(
        error.message || "Unable to update profile, please try again"
      );
    }
  };

  return (
    <div className="">
      <DashboardHeader pageTitle="profile settings" />
      <form
        className="flex flex-col items-center my-10"
        onSubmit={handleSubmit}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          ref={fileRef}
          hidden
        />
        <div className="w-20 h-20 cursor-pointer relative">
          {imageUploadProgress && (
            <CircularProgressbar
              value={imageUploadProgress || 0}
              text={`${imageUploadProgress}%`}
              styles={{
                root: {
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                },
                path: {
                  stroke: `rgba(62, 152, 199, ${imageUploadProgress / 100})`,
                },
              }}
            />
          )}
          <img
            src={imageUrl || currentUser?.profilePicture}
            alt=""
            className={`w-full h-full rounded-full object-cover border-[3px] border-slate-950 ${
              imageUploadProgress && imageUploadProgress < 100 && "opacity-60"
            }`}
          />
          <div
            className="absolute bg-rose-700 w-7 h-7 rounded-full bottom-0 right-0 flex items-center justify-center cursor-pointer"
            onClick={() => fileRef?.current.click()}
          >
            <FiCamera className="text-slate-200" />
          </div>
        </div>
        <div className="flex flex-col w-80 mt-5 mb-3 gap-1">
          <label htmlFor="" className="text-sm font-medium">
            Username
          </label>
          <input
            type="text"
            name="username"
            className="w-full outline-none border-none h-10 bg-slate-900 px-3 text-slate-200 rounded-md"
            placeholder="username"
            defaultValue={currentUser?.username}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-80 mb-3 gap-1">
          <label htmlFor="" className="text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="w-full outline-none border-none h-10 bg-slate-900 px-3 text-slate-200 rounded-md"
            placeholder="email"
            defaultValue={currentUser?.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-80 mb-3 gap-1">
          <label htmlFor="" className="text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="w-full outline-none border-none h-10 bg-slate-900 px-3 text-slate-200 rounded-md"
            placeholder="password"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-80 h-11 bg-transparent rounded-md text-slate-800 border border-slate-900 hover:bg-slate-900 hover:text-slate-200 mt-5"
        >
          Save Changes
        </button>
        <div className="flex items-center justify-between w-80 mt-3">
          <button className="text-red-500 text-sm font-medium" type="button">
            Delete account
          </button>
          <button
            className="bg-red-500 text-slate-200 px-4 py-2 text-sm font-medium rounded-lg"
            type="button"
          >
            Sign out
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
