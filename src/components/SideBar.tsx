import Subscribe from "./Subscribe";
import FollowSuggestion from "./FollowSuggestion";
import Footer from "./Footer";

const SideBar = () => {
  return (
    <div className="w-[30%] min-w-[28%] max-lg:hidden top-0 sticky xl:flex flex-col overflow-x-hidden p-6">
      <Subscribe />
      <FollowSuggestion/>
      <Footer/>
    </div>
  );
};

export default SideBar;
