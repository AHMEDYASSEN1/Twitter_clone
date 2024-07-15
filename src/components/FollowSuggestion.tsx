import React, { useState } from "react";
import SuggestedAccount from "./SuggestedAccount";
import data from "../data/usersData.json";

interface User {
  accountName: string;
  username: string;
  img: string;
}

interface MainUser {
  id: number;
  user: User;
}

const FollowSuggestion: React.FC = () => {
  const users: MainUser[] = data;
  const [showMore, setShowMore] = useState(false);
  const showMoreHandler = () => {
    setShowMore(!showMore);
  }

  const visibleProducts = showMore ? users : users.slice(0, 3);

  return (
    <div className="py-4 border-[1px] border-gray-600 rounded-xl">
      <h1 className="text-xl font-semibold px-4 pb-2">Who to follow</h1>
      {visibleProducts.map((user) => (
        <SuggestedAccount key={user.id} user={user.user} id={user.id} />
      ))}
      <button
        className="px-4 py-2 text-sm text-blue-500"
        onClick={showMoreHandler}
        >
        {showMore ? "Show less" : "Show more"}
      </button>
    </div>
  );
};

export default FollowSuggestion;
