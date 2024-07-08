import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-slate-950 w-full h-40 flex items-center">
      <div className="flex items-center justify-between w-[90%] mx-auto h-full">
        <div className="border-r border-slate-200 w-1/3 py-8">
          <Link to="/" className="text-2xl font-semibold text-white">
            BLOG
          </Link>
        </div>

        <div className="w-1/3 px-10">
          <div className="flex items-center gap-7">
            <Link to="/" className="font-medium text-lg text-gray-300">
              Home
            </Link>
            <Link to="/about" className="font-medium text-lg text-gray-300">
              About
            </Link>
            <Link to="/projects" className="font-medium text-lg text-gray-300">
              Projects
            </Link>
          </div>

          <p className="text-gray-300 mt-2">
            © 2024 Blog. All rights reserved.
          </p>
        </div>

        <div className="w-1/3 flex items-center gap-5 text-gray-300 px-10">
          <FaLinkedin className="cursor-pointer" />
          <IoMdMail className="cursor-pointer" />
          <FaTwitter className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
