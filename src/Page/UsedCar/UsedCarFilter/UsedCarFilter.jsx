/** @format */
import { FaSearchengin } from "react-icons/fa";
import { LuContact } from "react-icons/lu";
import { SiSpringsecurity } from "react-icons/si";
import { GiPoliceCar, GiReceiveMoney } from "react-icons/gi";
import SearchTopic from "./compo/SearchTopic";
const UsedCarFilter = () => {
  return (
    <div className="grid grig-cols-1 md:grid-cols-6 gap-5 md:p-10 p-5">
      <div className="md:col-span-2">ami</div>
      <div className="md:col-span-4">
        <div className="center-itm justify-between flex-wrap md:px-10 p-2 gap-3 bg-green-600 rounded-lg md:h-28 text-white font-semibold ">
          <SearchTopic icon={<FaSearchengin />}>
            <p className="text-xs">
              220+ Points <br /> Inspection
            </p>
          </SearchTopic>
          <SearchTopic icon={<GiPoliceCar />}>
            <p className="text-xs">
              Car as good <br /> as new
            </p>
          </SearchTopic>
          <SearchTopic icon={<GiReceiveMoney />}>
            <p className="text-xs">
              7 Days Money <br /> Back
            </p>
          </SearchTopic>
          <SearchTopic icon={<SiSpringsecurity />}>
            <p className="text-xs">
              6 Months <br /> Warranty
            </p>
          </SearchTopic>
          <SearchTopic icon={<LuContact />}>
            <p className="text-xs">
              Free RC <br /> Transfer
            </p>
          </SearchTopic>
        </div>
      </div>
    </div>
  );
};

export default UsedCarFilter;
