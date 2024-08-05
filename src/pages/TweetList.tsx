import TweetForm from "../components/TweetForm";
import Tweet from "../components/Tweet";
import useTweets from "../hooks/useTweets";

const TweetList: React.FC = () => {
  const { tweets, isLoading, addtTweet } = useTweets();

  return (
    <div className=" border-x-[1px] border-gray-500 max-sm:border-none">
      {isLoading ? (
        <section>
          <p className=" text-center py-10">
            Loading...
          </p>
        </section>
      ) : (
        <ul>
          <TweetForm onAddPost={addtTweet} />
          {tweets.map((tweet) => (
            <Tweet key={tweet.id} tweet={tweet} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TweetList;
