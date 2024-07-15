import React, { useState } from "react";

interface User {
  accountName: string;
  username: string;
  img: string;
}

interface MainUser {
  id: number;
  user: User;
}

const SuggestedAccount: React.FC<MainUser> = ({ user }) => {
  const [follow, setFollow] = useState(false);
  const followHandler = () => {
    setFollow(!follow);
  };
  return (
    <div>
      <div className="flex items-center gap-2 w-full hover:bg-slate-300 hover:bg-opacity-5 px-4 py-2 transition duration-300 cursor-pointer">
        <div>
          <div className="h-11 w-11">
            <img src={user.img} alt="" className="h-full w-full rounded-full"></img>
          </div>
        </div>
        <div className="flex items-center justify-between w-full h-12">
          <div>
            <div className="font-semibold text-start">{user.accountName}</div>
            <span className="text-sm">{user.username}</span>
          </div>
          <button
            className="bg-white text-black hover:bg-[#ffffffe2] font-medium transition duration-300 py-1 px-4 rounded-full cursor-pointer text-sm"
            onClick={followHandler}
          >
            {follow ? "Following" : "Follow"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuggestedAccount;
