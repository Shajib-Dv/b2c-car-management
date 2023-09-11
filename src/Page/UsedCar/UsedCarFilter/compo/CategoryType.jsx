/** @format */

import { useState } from "react";

import { FiMinusCircle } from "react-icons/fi";

const CategoryType = () => {
  const [category, setCategory] = useState("All");
  return (
    <div className="my-5">
      <div className="center-itm justify-between">
        <p className="title">Category</p>
        <FiMinusCircle className="text-xl text-gray-400" />
      </div>

      <div className="flex flex-col gap-2 justify-start items-start my-2">
        <div className="center-itm gap-2">
          <input
            type="radio"
            name="option"
            onChange={() => setCategory("All")}
            checked={category === "All"}
            className="radio checked:radio-accent"
            id="all"
          />
          <label className="cursor-pointer" htmlFor="all">
            All
          </label>
        </div>
        <div className="center-itm gap-2">
          <input
            type="radio"
            name="option"
            onChange={() => setCategory("V1")}
            checked={category === "V1"}
            className="radio checked:radio-accent"
            id="v1"
          />
          <label className="cursor-pointer" htmlFor="v1">
            Vmall <span className="text-gray-400">Assured</span>
          </label>
        </div>
        <div className="center-itm gap-2">
          <input
            type="radio"
            name="option"
            onChange={() => setCategory("V2")}
            checked={category === "V2"}
            className="radio checked:radio-accent"
            id="v2"
          />
          <label className="cursor-pointer" htmlFor="v2">
            Vmall <span className="text-gray-400">Partner</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default CategoryType;
