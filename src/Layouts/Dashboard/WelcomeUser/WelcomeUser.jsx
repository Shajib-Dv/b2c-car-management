/** @format */

import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import { useLocation } from "react-router-dom";

const WelcomeUser = () => {
  const [scrollChange, setScrollChange] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();
  const { user } = useAuth();
  const [currentTime, setCurrentTime] = useState(new Date());

  const parts = location?.pathname.split("/");
  const lastPart = parts[parts.length - 1];
  const showPath = lastPart.replace(/_/g, " ");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      setScrollChange(currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsVisible(scrollChange <= 10);
  }, [scrollChange]);

  const divStyle = {
    transition: "transform 0.5s ease-in-out",
    transform: isVisible ? "translateY(0)" : "translateY(-100%)",
  };

  const handleScrollHide = () => {
    setIsVisible(false);
  };

  return (
    <div
      style={divStyle}
      className={`w-full min-h-[5rem] bg-green-600 bg-opacity-40 fixed top-0 z-20 max-w-screen-2xl mx-auto center-itm justify-between backdrop-blur-[1.5px]`}
    >
      <FaTimes
        className="absolute right-2 top-1 text-red-500 text-xl cursor-pointer"
        onClick={handleScrollHide}
      />

      <div className="px-10 w-full flex-1">
        <marquee width={"100%"} direction="left">
          <div className="center-itm gap-4">
            <h2 className="title">
              Welcome{" "}
              <span className="text-gray-500">
                {user?.displayName || "John Doe"}
              </span>
            </h2>
            <p className="text-xl font-semibold">
              Now you're in <span>{showPath}</span>
            </p>
          </div>
        </marquee>
      </div>
      <div className="title px-3 ">{currentTime.toLocaleTimeString()}</div>
    </div>
  );
};

export default WelcomeUser;
