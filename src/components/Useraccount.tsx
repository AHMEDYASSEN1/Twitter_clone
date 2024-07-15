import { RiMoreFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import useUserData from "../hooks/useUserData";

const Useraccount = () => {
  const user = useUserData();

  return (
    <Link to="/profile">
      <div className="flex items-center gap-3 w-full hover:bg-slate-300 hover:bg-opacity-10 px-3 max-xl:p-0 py-2 rounded-full transition duration-300 cursor-pointer max-sm:hidden">
        <div className="h-11 w-11 max-xl:mx-auto">
          <img
            className="h-full w-full rounded-full"
            src="https://images.pexels.com/photos/10311994/pexels-photo-10311994.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          ></img>
        </div>
        <div className="flex flex-1 items-center justify-between w-full h-12 max-xl:hidden">
          <div>
            <div className="font-semibold text-start">{user?.userName}</div>
            <span className="text-sm">{user?.handle}</span>
          </div>
          <RiMoreFill className="text-xl" />
        </div>
      </div>
    </Link>
  );
};

export default Useraccount;
