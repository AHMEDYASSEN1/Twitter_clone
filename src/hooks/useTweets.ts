import { useState, useEffect } from "react";
import { TweetData } from "../types/types";
import { db } from "../config/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

const useTweets = () => {
  const [tweets, setTweets] = useState<TweetData[]>([]);
  const tweetsCollection = collection(db, "tweets");

  const [isLoading, setIsLoading] = useState<boolean>(true);


  useEffect(() => {
    const getTweetsList = async () => {
      try {
        const tweetsDocs = await getDocs(tweetsCollection);
        const tweetsData = tweetsDocs.docs.map((doc) => {
          const data = doc.data() as Omit<TweetData, "id">;
          return {
            ...data,
            id: doc.id,
          };
        });
        setTweets(tweetsData);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    getTweetsList();
  },[] );

  const addtTweet = async (postText: string, postImage: File | null) => {
    const newPost: Omit<TweetData, "id"> = {
      user: {
        name: "john_doe",
        handle: "@johndoe",
        profileImage: "https://via.placeholder.com/48",
      },
      content: postText,
      postImage: postImage ? URL.createObjectURL(postImage) : null,
      time: "6h",
      comments: 0,
      retweets: 0,
      likes: 0,
      view: 0,
    };

    try {
      const docRef = await addDoc(tweetsCollection, newPost);
      setTweets((prevTweets) => [...prevTweets, { ...newPost, id: docRef.id }]);
    } catch (err) {
      console.error("Error adding tweet: ", err);
    }
  };
  return { tweets, isLoading, addtTweet };
};

export default useTweets;
