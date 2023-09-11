/** @format */
import { FaSearch, FaSearchengin } from "react-icons/fa";
import { LuContact } from "react-icons/lu";
import { FiMinusCircle } from "react-icons/fi";
import { SiSpringsecurity } from "react-icons/si";
import { GiPoliceCar, GiReceiveMoney } from "react-icons/gi";
import SearchTopic from "./compo/SearchTopic";
import CarCollection from "./compo/CarCollection";
import { useState } from "react";
import CategoryType from "./compo/CategoryType";
import PriceRange from "./compo/PriceRange";

const UsedCarFilter = () => {
  const [searchText, setSearchText] = useState("");

  let CarsArray = [];

  for (let i = 0; i < 16; i++) {
    CarsArray.push(i);
  }
  return (
    <div className="grid grig-cols-1 md:grid-cols-6 gap-5 md:p-10 p-5">
      <div className="md:col-span-2 bg-base-100 rounded-md md:p-10">
        <h2 className="title pb-2">Location</h2>
        <div className="center-itm border rounded-lg px-2 bg-base-300 mb-5">
          <FaSearch className="text-gray-400 text-xl" />
          <input
            type="search"
            onChange={(e) => setSearchText(e.target.value)}
            className="input-src p-3"
            placeholder="New Delhi"
          />
        </div>
        <hr />
        <CategoryType />
        <hr />
        <PriceRange />
      </div>

      <div className="md:col-span-4">
        <div className="center-itm justify-between flex-wrap md:px-10 p-2 gap-3 bg-green-600 rounded-lg md:h-28 text-white font-semibold">
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

        <div className="center-itm justify-between flex-wrap gap-4 my-10">
          <h2 className="text-xl md:text-2xl font-bold">
            9793 Satisfied Used Cars in New Delhi
          </h2>
          <div className="md:w-2/5 w-full border center-itm rounded-md px-2 font-semibold">
            <span className="md:w-1/3 w-full text-gray-400">Soft by:</span>
            <select className="select-btn select-no cursor-pointer">
              <option>Relevance</option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {CarsArray.length >= 16 &&
            CarsArray.map((car) => <CarCollection key={car} />)}
        </div>
      </div>
    </div>
  );
};

export default UsedCarFilter;
