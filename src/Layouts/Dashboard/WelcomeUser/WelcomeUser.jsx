import { BiSolidHomeCircle } from "react-icons/bi";
import { GiHomeGarage } from "react-icons/gi";
import GetCurrentTime from "../../../Shared/components/GetCurrentTime";
import { Link } from "react-router-dom";

const WelcomeUser = () => {
  // const location = useLocation();
  // const parts = location?.pathname.split("/");
  // const lastPart = parts[parts.length - 1];
  // const showPath = lastPart.replace(/_/g, " ");

  return (
    <div
      className={`w-full min-h-[5rem] bg-green-600 bg-opacity-40 max-w-screen-2xl mx-auto center-itm justify-between backdrop-blur-[1.5px] px-10`}
    >
      <div className="w-full flex-1">
        <h2 className="title font-serif">Good Morning</h2>
        <GetCurrentTime />
      </div>
      <div className="flex-1 justify-end center-itm gap-4">
        <Link to="/">
          <GiHomeGarage className="text-3xl text-green-800" />
        </Link>
      </div>
    </div>
  );
};

export default WelcomeUser;
