import React from "react";
import { RiMoreFill } from "react-icons/ri";
import { TrendData } from "../types/types";

interface trend {
  trend: TrendData;
}

const Trend: React.FC<trend> = ({ trend }) => {
  return (
    <div className="px-4 py-2 flex justify-between hover:bg-slate-400 hover:bg-opacity-5 hover:transition">
      <div>
        <span className=" text-slate-500 text-sm">{trend.trendName}</span>
        <p className="text-lg font-semibold">{trend.description}</p>
        <span className=" text-slate-500 text-sm">{trend.tweetCount}</span>
      </div>
      <div className="text-xl h-9 w-9 flex items-center justify-center rounded-full hover:text-blue-500 hover:bg-blue-300 hover:bg-opacity-10 transition duration-200">
        <RiMoreFill />
      </div>
    </div>
  );
};

export default Trend;
