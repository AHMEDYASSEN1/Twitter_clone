import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import TweetList from "./pages/TweetList";
import Explore from "./pages/Explore";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Notification from "./pages/Notifications";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";

const AppLayout = () => {
  const location = useLocation();
  const showNavbarAndSidebar = !["/signin", "/signup"].includes(
    location.pathname
  );

  return (
    <div className="flex w-full h-full justify-center items-center bg-black">
      <div className="xl:max-w-[90vw] sm:flex max-lg:max-w-[80%] max-sm:max-w-[100%] w-full h-full">
        {showNavbarAndSidebar && <Navbar />}
        <div className="flex-grow mx-auto">
          <Routes>
            <Route path="/" element={<TweetList />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
        {showNavbarAndSidebar && <SideBar />}
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
