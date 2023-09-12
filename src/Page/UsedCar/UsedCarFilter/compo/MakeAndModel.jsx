/** @format */

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FiMinusCircle } from "react-icons/fi";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const MakeAndModel = () => {
  const [searchText, setSearchText] = useState("");
  const [year, setYear] = useState([2000, 2023]);
  const [kilometer, setKilometer] = useState([1000, 2000]);
  const [fuel, setFuel] = useState({});
  const [seat, setSeat] = useState({});

  return (
    <>
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
      <hr />
      {/* Year */}
      <div className="my-10">
        <h2 className="title pt-2">Year</h2>
        <p className="text-center font-bold text-green-600">
          {year[0]} - {year[1]}
        </p>
        <RangeSlider
          onInput={(e) => setYear(e)}
          min={2000}
          max={2150}
          step={1}
          defaultValue={[year[0], year[1]]}
          className="my-4"
        />
      </div>

      <hr />

      {/* Kilometer Driven */}
      <div className="my-10">
        <h2 className="title pt-2">Kilometer Driven</h2>
        <p className="text-center font-bold text-green-600">
          {kilometer[0]} - {kilometer[1]} Km
        </p>
        <RangeSlider
          onInput={(e) => setKilometer(e)}
          min={1000}
          max={3000}
          step={1}
          defaultValue={[kilometer[0], kilometer[1]]}
          className="my-4"
        />
      </div>

      <hr />

      <div className="center-itm justify-between my-5">
        <p className="title">Fuel</p>
        <FiMinusCircle className="text-xl text-gray-400" />
      </div>

      <div className="form-control gap-2 mb-5">
        <label className="cursor-pointer center-itm gap-2 font-semibold">
          <input
            onChange={(e) => setFuel({ ...fuel, petrol: e.target.checked })}
            type="checkbox"
            className="checkbox checkbox-accent"
          />
          <span
            className={`label-text ${
              fuel?.petrol ? "font-bold text-black" : "text-gray-400"
            }`}
          >
            Petrol
          </span>
        </label>
        <label className="cursor-pointer center-itm gap-2 font-semibold">
          <input
            onChange={(e) => setFuel({ ...fuel, diesel: e.target.checked })}
            type="checkbox"
            className="checkbox checkbox-accent"
          />
          <span
            className={`label-text ${
              fuel?.diesel ? "font-bold text-black" : "text-gray-400"
            }`}
          >
            Diesel
          </span>
        </label>
        <label className="cursor-pointer center-itm gap-2 font-semibold">
          <input
            onChange={(e) => setFuel({ ...fuel, cng: e.target.checked })}
            type="checkbox"
            className="checkbox checkbox-accent"
          />
          <span
            className={`label-text ${
              fuel?.cng ? "font-bold text-black" : "text-gray-400"
            }`}
          >
            CNG
          </span>
        </label>
      </div>

      <hr />

      <div className="center-itm justify-between my-5">
        <p className="title">Make & Model</p>
        <FiMinusCircle className="text-xl text-gray-400" />
      </div>

      <div className="center-itm gap-5 flex-wrap mb-5">
        <div className="center-itm flex-col bg-base-200 p-2 rounded-md">
          <img
            src="https://i.ibb.co/PQXG7TY/Rectangle-178.png"
            alt="car"
            className="w-20 rounded-md"
          />
          <p className="text-gray-500 font-semibold">Suv</p>
        </div>
        <div className="center-itm flex-col bg-base-200 p-2 rounded-md">
          <img
            src="https://i.ibb.co/PQXG7TY/Rectangle-178.png"
            alt="car"
            className="w-20 rounded-md"
          />
          <p className="text-gray-500 font-semibold">Suv</p>
        </div>
        <div className="center-itm flex-col bg-base-200 p-2 rounded-md">
          <img
            src="https://i.ibb.co/PQXG7TY/Rectangle-178.png"
            alt="car"
            className="w-20 rounded-md"
          />
          <p className="text-gray-500 font-semibold">Suv</p>
        </div>
        <div className="center-itm flex-col bg-base-200 p-2 rounded-md">
          <img
            src="https://i.ibb.co/PQXG7TY/Rectangle-178.png"
            alt="car"
            className="w-20 rounded-md"
          />
          <p className="text-gray-500 font-semibold">Suv</p>
        </div>
        <div className="center-itm flex-col bg-base-200 p-2 rounded-md">
          <img
            src="https://i.ibb.co/PQXG7TY/Rectangle-178.png"
            alt="car"
            className="w-20 rounded-md"
          />
          <p className="text-gray-500 font-semibold">Suv</p>
        </div>
      </div>

      <hr />

      <div className="center-itm justify-between my-5">
        <p className="title">Seating Capacity</p>
        <FiMinusCircle className="text-xl text-gray-400" />
      </div>

      <div className="form-control gap-2 mb-5">
        <label className="cursor-pointer center-itm gap-2 font-semibold">
          <input
            onChange={(e) => setSeat({ ...seat, s4: e.target.checked })}
            type="checkbox"
            className="checkbox checkbox-accent"
          />
          <span
            className={`label-text ${
              seat?.s4 ? "font-bold text-black" : "text-gray-400"
            }`}
          >
            4 Seater
          </span>
        </label>
        <label className="cursor-pointer center-itm gap-2 font-semibold">
          <input
            onChange={(e) => setSeat({ ...seat, s5: e.target.checked })}
            type="checkbox"
            className="checkbox checkbox-accent"
          />
          <span
            className={`label-text ${
              seat?.s5 ? "font-bold text-black" : "text-gray-400"
            }`}
          >
            5 Seater
          </span>
        </label>
        <label className="cursor-pointer center-itm gap-2 font-semibold">
          <input
            onChange={(e) => setSeat({ ...seat, s6: e.target.checked })}
            type="checkbox"
            className="checkbox checkbox-accent"
          />
          <span
            className={`label-text ${
              seat?.s6 ? "font-bold text-black" : "text-gray-400"
            }`}
          >
            6 Seater
          </span>
        </label>
        <label className="cursor-pointer center-itm gap-2 font-semibold">
          <input
            onChange={(e) => setSeat({ ...seat, s7: e.target.checked })}
            type="checkbox"
            className="checkbox checkbox-accent"
          />
          <span
            className={`label-text ${
              seat?.s7 ? "font-bold text-black" : "text-gray-400"
            }`}
          >
            7 Seater
          </span>
        </label>
        <label className="cursor-pointer center-itm gap-2 font-semibold">
          <input
            onChange={(e) => setSeat({ ...seat, s8: e.target.checked })}
            type="checkbox"
            className="checkbox checkbox-accent"
          />
          <span
            className={`label-text ${
              seat?.s8 ? "font-bold text-black" : "text-gray-400"
            }`}
          >
            8 Seater
          </span>
        </label>
      </div>
    </>
  );
};

export default MakeAndModel;
