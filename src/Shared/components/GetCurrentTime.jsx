/** @format */

import { useEffect } from "react";
import { useState } from "react";

const GetCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return <p>{currentTime.toLocaleTimeString()}</p>;
};

export default GetCurrentTime;
