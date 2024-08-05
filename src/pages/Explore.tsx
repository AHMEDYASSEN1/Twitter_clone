import React from "react";
import data from "../data/expolre.json";
import Trend from "../components/Trend";
import { TrendData } from "../types/types";

const Explore: React.FC = () => {
  const trends: TrendData[] = data;

  return (
    <div className=" border-x-[1px] border-gray-500 max-sm:border-none">
      <div className="mx-4">
        <input
          className="w-full bg-slate-300 bg-opacity-10 py-2 px-4 rounded-full my-6"
          placeholder="Search"
          type="text"
        />
      </div>
      {trends.map((trend) => (
        <Trend key={trend.id} trend={trend} />
      ))}
    </div>
  );
};

export default Explore;
