import React from "react";

const Subscribe = () => {
  return (
    <div className="w-full">
      <input
        className="bg-slate-300 bg-opacity-10 py-2 px-4 rounded-full w-full"
        placeholder="Search"
        type="text"
      />
      <div className="p-4 border-[1px] border-gray-600 rounded-xl my-6">
        <h2 className="font-bold text-lg">Subscribe to Premium</h2>
        <p className="py-2">
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 transition duration-300 py-1 px-4 rounded-full cursor-pointer font-bold">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
