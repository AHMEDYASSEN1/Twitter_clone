import React, { useState } from "react";
import { IoImageOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineGifBox } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { RiCalendarScheduleLine } from "react-icons/ri";

const TweetForm: React.FC<{
  onAddPost: (text: string, postImage: File | null) => void;
}> = (props) => {
  const [tweetText, setTweetText] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const addTweetHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (tweetText.trim().length === 0 && selectedImage === null) {
      return;
    }
    props.onAddPost(tweetText, selectedImage);
    setTweetText("");
    setSelectedImage(null);
  };

  const addImgHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  return (
    <div className="flex p-4 gap-4 w-full border-b-[1px] border-gray-500">
      <div>
        <div className="h-11 w-11">
          <img className="h-full w-full rounded-full" src="https://images.pexels.com/photos/10311994/pexels-photo-10311994.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""></img>
        </div>
      </div>
      <form className="w-full" onSubmit={addTweetHandler}>
        <input
          onChange={(e) => {
            setTweetText(e.target.value);
          }}
          value={tweetText}
          className="py-2 text-lg outline-none bg-black w-full"
          type="text"
          placeholder="What is happening?"
        />
        <div className="flex items-center justify-between">
          <div className="flex gap-4 text-blue-600 text-xl">
            <label>
              <IoImageOutline className="cursor-pointer" />
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={addImgHandler}
              />
            </label>
            <MdOutlineGifBox />
            <BsEmojiSmile />
            <RiCalendarScheduleLine />
            <IoLocationOutline />
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 transition duration-300 py-1 px-4 rounded-full cursor-pointer font-bold">
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default TweetForm;
