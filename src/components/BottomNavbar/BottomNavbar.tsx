import { Heart, Map, Home, Plus, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNavbar = () => {
  const location = useLocation();
  return (
    <footer className=" h-16 w-full fixed bottom-0 ">
      <div className=" h-full w-full bg-accent px-4 rounded-lg">
        <ul className="w-full h-full items-center flex justify-between">
          <li>
            <Link to={"/"}>
              <Home
                className={` text-black w-10 h-10 ${
                  location.pathname === "/"
                    ? "text-opacity-30"
                    : "text-opacity-100"
                }`}
              />
            </Link>
          </li>
          <li>
            <Link to={"/newevent"}>
              <Plus
                className={` text-black w-10 h-10 ${
                  location.pathname === "/newevent"
                    ? "text-opacity-30"
                    : "text-opacity-100"
                }`}
              />
            </Link>
          </li>
          <li>
            <Link to={"/map"}>
              <Map
                className={`w-10 h-10 ${
                  location.pathname === "/map" ? "text-primary" : "text-black"
                }`}
              />
            </Link>
          </li>
          <li>
            <Link to={"/event/saved"}>
              <Heart
                className={` text-black w-10 h-10 ${
                  location.pathname === "/event/saved"
                    ? "text-opacity-30"
                    : "text-opacity-100"
                }`}
              />
            </Link>
          </li>
          <li>
            <Link to={"/profile/1"}>
              <User
                className={` text-black w-10 h-10 ${
                  location.pathname.startsWith("/profile")
                    ? "text-opacity-30"
                    : "text-opacity-100"
                }`}
              />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default BottomNavbar;
