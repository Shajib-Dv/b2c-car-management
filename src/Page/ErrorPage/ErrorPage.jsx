/** @format */

import { useEffect } from "react";
import { useState } from "react";

const ErrorPage = () => {
  const [exit, setExit] = useState(null);

  const [stop, setStop] = useState(false);

  useEffect(() => {
    if (!stop) {
      exit?.target?.classList.add("animate-bounce");
    } else {
      exit?.target?.classList.remove("animate-bounce");
    }
  }, [exit, stop]);

  return (
    <div
      onClick={() => setStop(!stop)}
      className="min-h-screen flex items-center justify-center flex-col bg-black "
    >
      <div
        onMouseEnter={(e) => setExit(e)}
        className="relative w-full md:w-3/4 center-itm justify-center"
      >
        <img
          src="https://media.discordapp.net/attachments/1149991717647421440/1151899359231868969/image0.png"
          alt="Salarput"
        />
        <div className="absolute bottom-0 md:w-1/2 text-center bg-pink-500 rounded-md p-2 text-white">
          এতো চেষ্টার পরেও আর লুকায়ি থাকতে ফারলাম না, চোদানির ফোয়া
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
