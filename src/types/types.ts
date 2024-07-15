export interface User {
  name: string;
  handle: string;
  profileImage: string;
}

export interface TweetData {
  id: number | string;
  user: User;
  content: string;
  postImage?: string | null;
  time: string;
  comments: number;
  retweets: number;
  likes: number;
  view: number;
}


export interface TrendData {
  id: number;
  trendName: string;
  tweetCount: string;
  description: string;
}

export interface Notification {
  id: number;
  type: string;
  userImage: string;
  message: string;
  timestamp: string;
}


export interface ProfileUser {
  id: string| number;
  handle: string;
  userName: string;
  bio: string;
  following: number;
  followers: number;
  profileImg: string;
  coverImg: string;
  tweets: TweetData[];
}