/** @format */

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FiMinusCircle } from "react-icons/fi";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
const PriceRange = () => {
  const [searchText, setSearchText] = useState("");
  const [rangeValue, setRangleValue] = useState([]);

  return (
    <div className="my-5">
      <div className="center-itm justify-between">
        <p className="title">Price</p>
        <FiMinusCircle className="text-xl text-gray-400" />
      </div>

      <div className=" my-2 flex justify-start items-end gap-1 h-40 overflow-hidden">
        <div
          className={`w-full rounded-t-sm price-plr  ${
            rangeValue[0] <= 1000 ? "bg-green-600" : "bg-slate-200"
          }`}
          style={{ height: `${10}%` }}
        ></div>
        <div
          className={`w-full rounded-t-sm price-plr  ${
            rangeValue[0] <= 10000 && rangeValue[0] < 10000
              ? "bg-green-600"
              : "bg-slate-200"
          }`}
          style={{ height: `${16}%` }}
        ></div>
        <div
          className={`w-full rounded-t-sm price-plr  ${
            rangeValue[0] <= 14000 || rangeValue[0] < 20000
              ? "bg-green-600"
              : "bg-slate-200"
          }`}
          style={{ height: `${20}%` }}
        ></div>
        <div
          className={`w-full rounded-t-sm price-plr  ${
            rangeValue[0] <= 21000 || rangeValue[0] < 28000
              ? "bg-green-600"
              : "bg-slate-200"
          }`}
          style={{ height: `${30}%` }}
        ></div>
        <div
          className={`w-full rounded-t-sm price-plr  ${
            rangeValue[0] <= 28000 || rangeValue[0] < 36000
              ? "bg-green-600"
              : "bg-slate-200"
          }`}
          style={{ height: `${15}%` }}
        ></div>
        <div
          className={`w-full rounded-t-sm price-plr  ${
            rangeValue[0] <= 36000 || rangeValue[0] < 42000
              ? "bg-green-600"
              : "bg-slate-200"
          }`}
          style={{ height: `${50}%` }}
        ></div>
        <div
          className={`w-full rounded-t-sm price-plr  ${
            rangeValue[0] <= 42000 || rangeValue[0] < 50000
              ? "bg-green-600"
              : "bg-slate-200"
          }`}
          style={{ height: `${70}%` }}
        ></div>
        <div
          className={`w-full rounded-t-sm price-plr  ${
            rangeValue[0] <= 50000 || rangeValue[0] < 55000
              ? "bg-green-600"
              : "bg-slate-200"
          }`}
          style={{ height: `${80}%` }}
        ></div>
        <div
          className={`w-full rounded-t-sm price-plr  ${
            rangeValue[0] <= 55000 || rangeValue[0] < 64000
              ? "bg-green-600"
              : "bg-slate-200"
          }`}
          style={{ height: `${25}%` }}
        ></div>
        <div
          className={`w-full rounded-t-sm price-plr  ${
            rangeValue[0] <= 64000 || rangeValue[0] < 72000
              ? "bg-green-600"
              : "bg-slate-200"
          }`}
          style={{ height: `${100}%` }}
        ></div>
        <div
          className={`w-full rounded-t-sm price-plr  ${
            rangeValue[0] <= 72000 || rangeValue[0] < 78000
              ? "bg-green-600"
              : "bg-slate-200"
          }`}
          style={{ height: `${66}%` }}
        ></div>
        <div
          className={`w-full rounded-t-sm price-plr  ${
            rangeValue[0] <= 78000 || rangeValue[0] < 85000
              ? "bg-green-600"
              : "bg-slate-200"
          }`}
          style={{ height: `${30}%` }}
        ></div>
        <div
          className={`w-full rounded-t-sm price-plr  ${
            rangeValue[0] <= 85000 || rangeValue[0] < 92000
              ? "bg-green-600"
              : "bg-slate-200"
          }`}
          style={{ height: `${55}%` }}
        ></div>
        <div
          className={`w-full rounded-t-sm price-plr  ${
            rangeValue[0] <= 92000 || rangeValue[0] < 95000
              ? "bg-green-600"
              : "bg-slate-200"
          }`}
          style={{ height: `${48}%` }}
        ></div>
        <div
          className={`w-full rounded-t-sm price-plr  ${
            rangeValue[0] >= 95000 ||
            (rangeValue[1] <= 100000 && rangeValue[1] >= 95000)
              ? "bg-green-600"
              : "bg-slate-200"
          }`}
          style={{ height: `${16}%` }}
        ></div>
      </div>

      <div>
        <RangeSlider
          onInput={(e) => setRangleValue(e)}
          min={0}
          max={100000}
          step={1000}
          defaultValue={[5000, 50000]}
          className="my-4"
        />
        <div className="center-itm justify-between py-4 font-bold">
          <p>₹ {rangeValue[0] === 0 ? 0 : rangeValue[0] || 5000}</p>
          <p>₹ {rangeValue[1] || 50000}</p>
        </div>
      </div>

      <div className="center-itm gap-4 flex-wrap my-4">
        <p className="bg-base-200 text-gray-400 p-1 rounded-md">0-2 Lakh</p>
        <p className="bg-base-200 text-gray-400 p-1 rounded-md">2-5 Lakh</p>
        <p className="bg-base-200 text-gray-400 p-1 rounded-md">5-8 Lakh</p>
        <p className="bg-base-200 text-gray-400 p-1 rounded-md">8-10 Lakh</p>
        <p className="bg-base-200 text-gray-400 p-1 rounded-md">10+ Lakh</p>
      </div>

      <hr />

      <div className="center-itm justify-between my-2">
        <p className="title">Make & Model</p>
        <FiMinusCircle className="text-xl text-gray-400" />
      </div>
      <div className="center-itm border rounded-lg px-2 bg-base-300 mb-5">
        <FaSearch className="text-gray-400 text-xl" />
        <input
          type="search"
          onChange={(e) => setSearchText(e.target.value)}
          className="input-src p-3"
          placeholder="New Delhi"
        />
      </div>
    </div>
  );
};

export default PriceRange;
