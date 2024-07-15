import React, { useRef, useState, useEffect } from "react";
import { TweetData } from "../types/types";
import { RiMoreFill, RiUserUnfollowLine, RiFlag2Line } from "react-icons/ri";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { IoBookmarkOutline } from "react-icons/io5";
import { LuBarChart2 } from "react-icons/lu";
import { FiShare } from "react-icons/fi";
import { GoHeart, GoHeartFill, GoMute } from "react-icons/go";
import { BiVolumeMute } from "react-icons/bi";
import { FaRegFaceFrown } from "react-icons/fa6";


interface TweetProps {
  tweet: TweetData;
}

const Tweet: React.FC<TweetProps> = ({ tweet }) => {
  const [liked, setLiked] = useState(false);
  const [moreOptMenu, setMoreOPt] = useState(false);
  const optMenuRef = useRef<HTMLDivElement>(null);

  const toggleLike = () => {
    setLiked(!liked);
  };

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
    <li className="flex gap-4 w-full py-2 px-4 border-b-[1px] border-gray-500">
      <div className="h-11 w-11">
        <img
          src={tweet.user.profileImage}
          alt="profile"
          className="h-full w-full rounded-full"
        />
      </div>
      <div className="flex-1">
        <div
          ref={optMenuRef}
          className="flex items-center justify-between text-gray-500 relative"
        >
          <div className="flex items-center gap-3">
            <h3 className="font-semibold text-white">{tweet.user.name}</h3>
            <span>{tweet.user.handle}</span>
            <span>{tweet.time}</span>
          </div>
          <button
            onClick={toggleMoreOpt}
            className="text-xl p-2 rounded-full hover:text-blue-500 hover:bg-blue-300 hover:bg-opacity-10 transition duration-200"
          >
            <RiMoreFill />
          </button>
          {moreOptMenu && (
            <div className="absolute right-10 top-0 border border-gray-500 bg-black text-white font-semibold shadow shadow-gray-500 rounded-md z-10">
              <ul>
                <li className="flex items-center gap-2 py-3 px-4 hover:bg-slate-400 hover:bg-opacity-10 cursor-pointer">
                  <FaRegFaceFrown />
                  Not interested in this post
                </li>
                <li className="flex items-center gap-2 py-3 px-4 hover:bg-slate-400 hover:bg-opacity-10 cursor-pointer">
                  <RiUserUnfollowLine />
                  Unfollow @{tweet.user.handle}
                </li>
                <li className="flex items-center gap-2 py-3 px-4 hover:bg-slate-400 hover:bg-opacity-10 cursor-pointer">
                  <GoMute />
                  Mute @{tweet.user.handle}
                </li>
                <li className="flex items-center gap-2 py-3 px-4 hover:bg-slate-400 hover:bg-opacity-10 cursor-pointer">
                  <BiVolumeMute />
                  Block @{tweet.user.handle}
                </li>
                <li className="flex items-center gap-2 py-3 px-4 hover:bg-slate-400 hover:bg-opacity-10 cursor-pointer">
                  <RiFlag2Line />
                  Peport @{tweet.user.handle}
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="py-3">{tweet.content}</div>
        {tweet.postImage && (
          <img
            src={tweet.postImage}
            alt="Tweet"
            className="rounded-lg py-3 w-auto"
          />
        )}
        <div className="flex items-center justify-between text-gray-500">
          <div className="flex items-center space-x-1 hover:text-blue-500 cursor-pointer tarnsition duration-200">
            <FaRegComment className="text-xl" />
            <span>{tweet.comments}</span>
          </div>
          <div className="flex items-center space-x-1 hover:text-green-500 cursor-pointer tarnsition duration-200">
            <AiOutlineRetweet className="text-xl" />
            <span>{tweet.retweets}</span>
          </div>
          <button
            onClick={toggleLike}
            className="flex items-center space-x-1 hover:text-red-500 cursor-pointer tarnsition duration-200"
          >
            {liked ? (
              <GoHeartFill className="text-red-500 text-xl" />
            ) : (
              <GoHeart className="text-xl" />
            )}
            <span>{liked ? tweet.likes + 1 : tweet.likes}</span>
          </button>
          <div className="flex items-center space-x-1 hover:text-blue-500 cursor-pointer tarnsition duration-200">
            <LuBarChart2 className="text-xl" />
            <span>{tweet.view}</span>
          </div>
          <span className="flex items-center">
            <div className="text-xl p-2 rounded-full hover:text-blue-500 hover:bg-blue-300 hover:bg-opacity-10 transition duration-200">
              <IoBookmarkOutline className="text-xl" />
            </div>
            <div className="text-xl p-2 rounded-full hover:text-blue-500 hover:bg-blue-300 hover:bg-opacity-10 transition duration-200">
              <FiShare className="text-xl" />
            </div>
          </span>
        </div>
      </div>
    </li>
  );
};

export default Tweet;
