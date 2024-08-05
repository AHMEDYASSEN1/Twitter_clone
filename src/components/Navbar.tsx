import { useState, useRef, useEffect } from "react";
import Useraccount from "./Useraccount";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import {
  IoNotificationsOutline,
  IoSearch,
  IoSettingsOutline,
} from "react-icons/io5";
import { LuMessageSquare } from "react-icons/lu";
import { RiAccountCircleLine, RiFileListLine } from "react-icons/ri";
import { CgMoreO } from "react-icons/cg";
import { FaRegBookmark } from "react-icons/fa";
import { GiElectric } from "react-icons/gi";
import { MdWorkOutline } from "react-icons/md";
import { BiSolidMicrophoneAlt } from "react-icons/bi";
import { BsPencilSquare } from "react-icons/bs";

const Navbar = () => {
  const [moreOptMenu, setMoreOPt] = useState(false);
  const optMenuRef = useRef<HTMLDivElement>(null);

  const toggleMoreOpt = () => {
    setMoreOPt(!moreOptMenu);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      optMenuRef.current &&
      !optMenuRef.current.contains(event.target as Node)
    ) {
      setMoreOPt(false);
    }
  };
  useEffect(() => {
    if (moreOptMenu) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [moreOptMenu]);
  
  return (
    <div className="xl:w-[23%] sticky top-0 px-6 max-md:px-3 h-screen items-center max-sm:h-fit bg-black max-sm:py-2">
      <div className="text-3xl mt-4 p-3 w-fit cursor-pointer rounded-full transition duration-300 hover:bg-slate-300 hover:bg-opacity-10 max-lx:mx-auto max-sm:hidden">
        <Link to="/">
          <FaXTwitter />
        </Link>
      </div>
      <ul className="mt-6 max-sm:mt-0 text-xl text-start max-xl:w-fit w-full mx-auto max-sm:flex max-sm:w-[100%] max-sm:justify-between">
        <Link to="/">
          <li className="w-full group">
            <a className="flex items-center p-3 pr-6 max-xl:pr-3 rounded-full gap-3 w-fit transition duration-300 group-hover:bg-slate-300 group-hover:bg-opacity-10 cursor-pointer">
              <GoHomeFill className="text-2xl" />
              <span className="hidden xl:inline">Home</span>
            </a>
          </li>
        </Link>
        <Link to="explore">
          <li className="w-full group">
            <a className="flex items-center p-3 pr-6 max-xl:pr-3 rounded-full gap-3 w-fit transition duration-300 group-hover:bg-slate-300 group-hover:bg-opacity-10 cursor-pointer">
              <IoSearch className="text-2xl" />
              <span className="hidden xl:inline">Explore</span>
            </a>
          </li>
        </Link>
        <Link to="notification">
          <li className="w-full group">
            <a className="flex items-center p-3 pr-6 max-xl:pr-3 rounded-full gap-3 w-fit transition duration-300 group-hover:bg-slate-300 group-hover:bg-opacity-10 cursor-pointer">
              <IoNotificationsOutline className="text-2xl" />
              <span className="hidden xl:inline">Notifications</span>
            </a>
          </li>
        </Link>
        <Link to="/messages">
          <li className="w-full group">
            <a className="flex items-center p-3 pr-6 max-xl:pr-3 rounded-full gap-3 w-fit transition duration-300 group-hover:bg-slate-300 group-hover:bg-opacity-10 cursor-pointer">
              <LuMessageSquare className="text-2xl" />
              <span className="hidden xl:inline">Messages</span>
            </a>
          </li>
        </Link>
        <Link to="/profile">
          <li className="w-full group">
            <a className="flex items-center p-3 pr-6 max-xl:pr-3 rounded-full gap-3 w-fit transition duration-300 group-hover:bg-slate-300 group-hover:bg-opacity-10 cursor-pointer">
              <RiAccountCircleLine className="text-2xl" />
              <span className="hidden xl:inline">Profile</span>
            </a>
          </li>
        </Link>
        <div ref={optMenuRef}>
          <li className="w-full group">
            <a
              onClick={toggleMoreOpt}
              className="flex items-center p-3 pr-6 max-xl:pr-3 rounded-full gap-3 w-fit transition duration-300 group-hover:bg-slate-300 group-hover:bg-opacity-10 cursor-pointer"
            >
              <CgMoreO className="text-2xl" />
              <span className="hidden xl:inline">More</span>
            </a>
          </li>
          {moreOptMenu && (
            <div className="absolute right-0 top-0 border border-gray-500 bg-black text-white font-semibold shadow shadow-gray-500 rounded-md z-10">
              <ul>
                <li className="flex items-center gap-4 py-4 px-6 hover:bg-slate-400 hover:bg-opacity-10 cursor-pointer">
                  <RiFileListLine />
                  Lists
                </li>
                <li className="flex items-center gap-4 py-3 px-6 hover:bg-slate-400 hover:bg-opacity-10 cursor-pointer">
                  <FaXTwitter />
                  Premium
                </li>
                <li className="flex items-center gap-4 py-3 px-6 hover:bg-slate-400 hover:bg-opacity-10 cursor-pointer">
                  <FaRegBookmark />
                  Bookmarks
                </li>
                <li className="flex items-center gap-4 py-3 px-6 hover:bg-slate-400 hover:bg-opacity-10 cursor-pointer">
                  <GiElectric />
                  Verified Orgs
                </li>
                <li className="flex items-center gap-4 py-3 px-6 hover:bg-slate-400 hover:bg-opacity-10 cursor-pointer">
                  <MdWorkOutline />
                  Jobs
                </li>
                <li className="flex items-center gap-4 py-3 px-6 hover:bg-slate-400 hover:bg-opacity-10 cursor-pointer">
                  <BiSolidMicrophoneAlt />
                  Create your Space
                </li>
                <li className="flex items-center gap-4 py-3 px-6 hover:bg-slate-400 hover:bg-opacity-10 cursor-pointer">
                  <IoSettingsOutline />
                  Setting and privacy
                </li>
              </ul>
            </div>
          )}
        </div>
      </ul>
      <div>
        <button
          className="bg-blue-500 mx-auto hover:bg-blue-600 transition duration-300 p-4 w-full max-xl:w-fit flex items-center justify-center rounded-full my-8 text-lg cursor-pointer max-sm:hidden"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <BsPencilSquare className=" hidden max-xl:inline" />
          <span className="hidden xl:inline">Post</span>
        </button>
        <Useraccount />
      </div>
    </div>
  );
};

export default Navbar;
