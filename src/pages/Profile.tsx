import React, { useState, useEffect } from "react";
import Tweet from "../components/Tweet";
import useTweets from "../hooks/useTweets";
import useUserData from "../hooks/useUserData";

const Profile: React.FC = () => {
  const { tweets } = useTweets();
  const user = useUserData();

  const [editing, setEditing] = useState(false);
  const [bio, setBio] = useState<string>("");

  useEffect(() => {
    if (user?.bio) {
      setBio(user.bio);
    }
  }, [user]);

  const [activeTab, setActiveTab] = useState("tweets");

  const handleEditProfile = () => {
    setEditing(!editing);
  };
  const handleBioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBio(e.target.value);
  };
  const handleSave = () => {
    setEditing(false);
  };

  const secForm = (text1: string, text2: string) => {
    return (
      <div className="flex items-center justify-center h-32">
        <div>
          <h2 className="text-3xl font-bold mb-4">{text1}</h2>
          <p className="text-gray-500">{text2}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      <div
        className="bg-cover bg-center h-40 mb-4"
        style={{ backgroundImage: `url(${user?.coverImg})` }}
      />
      <div className="p-4">
        <img
          src={user?.profileImg}
          alt=""
          className="w-24 h-24 rounded-full border-4 border-white"
        />
        <div className="">
          <h1 className="text-2xl font-bold">{user?.userName}</h1>
          <p className="text-gray-500">{user?.handle}</p>
          {editing ? (
            <input
              type="text"
              value={bio}
              onChange={handleBioChange}
              className="border border-gray-300 p-2 rounded-lg mt-2 w-full"
            />
          ) : (
            <p className="text-gray-600 mt-2">{bio}</p>
          )}
          <div className="flex items-center gap-6 py-2">
            <div className="text-gray-600 ">
              <span className="text-white pr-1">{user?.following}</span>
              Following
            </div>
            <div className="text-gray-600 ">
              <span className="text-white pr-1">{user?.followers}</span>
              Followers
            </div>
          </div>
          {editing ? (
            <button
              onClick={handleSave}
              className="bg-blue-500 p-2 rounded-lg mt-2"
            >
              Save
            </button>
          ) : (
            <button
              onClick={handleEditProfile}
              className="p-2 rounded-lg mt-2 border-[1px] border-gray-500"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
      <div className="mt-6">
        <div className="flex justify-between mb-4 border-b-[1px] border-gray-500 px-4">
          {[
            "tweets",
            "replies",
            "articles",
            "likes",
            "highlights",
            "media",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`p-2 ${
                activeTab === tab
                  ? "border-b-4 border-blue-500 transition duration-700"
                  : "text-gray-500 pb-3"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        {activeTab === "tweets" && (
          <ul>
            {tweets
              .filter((tweet) => tweet.user.handle === user?.handle)
              .map((tweet) => (
                <Tweet key={tweet.id} tweet={tweet} />
              ))}
          </ul>
        )}
        {activeTab === "replies" &&
          secForm(
            "Replies on your profile",
            "There are no replies on your profile"
          )}
        {activeTab === "highlights" &&
          secForm(
            "Lights, camera ... attachments!",
            "When you post photos or videos, they aill show up here."
          )}
        {activeTab === "articles" &&
          secForm(
            "Articles on your profile",
            "You must be subscribed to Premium to highlight posts on your profile."
          )}
        {activeTab === "media" &&
          secForm(
            "Media on your profile",
            "There are no media on your profile"
          )}
        {activeTab === "likes" &&
          secForm(
            "Write Articles on X",
            "You must be subscribed to Premium to write Articles on X"
          )}
      </div>
    </div>
  );
};

export default Profile;
