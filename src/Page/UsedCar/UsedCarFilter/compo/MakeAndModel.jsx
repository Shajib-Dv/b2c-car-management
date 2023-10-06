import { useEffect, useMemo, useState } from "react";
import { FaCheck, FaSearch } from "react-icons/fa";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import FilterAccordion from "../Accordion/FilterAccordion";

const Colors = [
  "#F30000",
  "#FFFFFF",
  "#DFDFDF",
  "#808080",
  "#365672",
  "#D06D4F",
  "#23262B",
  "#FB9400",
  "#FFDC00",
  "#00a541",
];

const MakeAndModel = ({ filteringTextSet }) => {
  const [storeColor, setStoreColor] = useState({});
  const [year, setYear] = useState([2000, 2023]);
  const [kilometer, setKilometer] = useState([1000, 2000]);
  const [fuel, setFuel] = useState({});
  const [seat, setSeat] = useState({});
  const [transmission, setTransmission] = useState({});
  const [rto, setRto] = useState({});
  const [owner, setOwner] = useState({});
  const [isOpen, setIsOpen] = useState({});

  const handleStoreColor = (color) => {
    if (storeColor[color]) {
      setStoreColor((prev) => {
        return { ...prev, [color]: false };
      });
      return;
    } else {
      setStoreColor((prev) => {
        return { ...prev, [color]: true };
      });
    }
  };

  const dependency = [
    storeColor,
    year,
    kilometer,
    fuel,
    seat,
    transmission,
    rto,
    owner,
    isOpen,
  ];

  const filterData = [
    { type: "color", data: Object.keys(storeColor) },
    { type: "year", data: year },
    { type: "milage", data: kilometer },
    { type: "fuel", data: Object.keys(fuel) },
    { type: "seat", data: Object.keys(seat) },
    { type: "transmission", data: Object.keys(transmission) },
    { type: "rto", data: Object.keys(rto) },
    { type: "owner", data: Object.keys(owner) },
  ];

  useEffect(() => {
    filterData.forEach(({ type, data }) => filteringTextSet(type, data));
  }, dependency);

  return (
    <>
      <FilterAccordion
        title="Make & Model"
        open={isOpen?.makeYear}
        toggle={() => setIsOpen({ ...isOpen, makeYear: !isOpen?.makeYear })}
      >
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
      </FilterAccordion>

      <hr />

      <FilterAccordion
        title="Fuel"
        open={isOpen?.fuel}
        toggle={() => setIsOpen({ ...isOpen, fuel: !isOpen?.fuel })}
      >
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
      </FilterAccordion>

      <hr />

      <FilterAccordion
        title="Make & Model"
        open={isOpen?.makeModel}
        toggle={() => setIsOpen({ ...isOpen, makeModel: !isOpen?.makeModel })}
      >
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
      </FilterAccordion>

      <hr />

      <FilterAccordion
        title="Seating Capacity"
        open={isOpen?.seating}
        toggle={() => setIsOpen({ ...isOpen, seating: !isOpen?.seating })}
      >
        <div className="form-control gap-2 mb-5">
          <label className="cursor-pointer center-itm gap-2 font-semibold">
            <input
              onChange={(e) => setSeat({ ...seat, 4: e.target.checked })}
              type="checkbox"
              className="checkbox checkbox-accent"
            />
            <span
              className={`label-text ${
                seat?.["4"] ? "font-bold text-black" : "text-gray-400"
              }`}
            >
              4 Seater
            </span>
          </label>
          <label className="cursor-pointer center-itm gap-2 font-semibold">
            <input
              onChange={(e) => setSeat({ ...seat, 5: e.target.checked })}
              type="checkbox"
              className="checkbox checkbox-accent"
            />
            <span
              className={`label-text ${
                seat?.["5"] ? "font-bold text-black" : "text-gray-400"
              }`}
            >
              5 Seater
            </span>
          </label>
          <label className="cursor-pointer center-itm gap-2 font-semibold">
            <input
              onChange={(e) => setSeat({ ...seat, 6: e.target.checked })}
              type="checkbox"
              className="checkbox checkbox-accent"
            />
            <span
              className={`label-text ${
                seat?.["6"] ? "font-bold text-black" : "text-gray-400"
              }`}
            >
              6 Seater
            </span>
          </label>
          <label className="cursor-pointer center-itm gap-2 font-semibold">
            <input
              onChange={(e) => setSeat({ ...seat, 7: e.target.checked })}
              type="checkbox"
              className="checkbox checkbox-accent"
            />
            <span
              className={`label-text ${
                seat?.["7"] ? "font-bold text-black" : "text-gray-400"
              }`}
            >
              7 Seater
            </span>
          </label>
          <label className="cursor-pointer center-itm gap-2 font-semibold">
            <input
              onChange={(e) => setSeat({ ...seat, 8: e.target.checked })}
              type="checkbox"
              className="checkbox checkbox-accent"
            />
            <span
              className={`label-text ${
                seat?.["8"] ? "font-bold text-black" : "text-gray-400"
              }`}
            >
              8 Seater
            </span>
          </label>
        </div>
      </FilterAccordion>

      <hr />

      <FilterAccordion
        title="Transmission"
        open={isOpen?.transmission}
        toggle={() =>
          setIsOpen({ ...isOpen, transmission: !isOpen?.transmission })
        }
      >
        <div className="form-control gap-2 mb-5">
          <label className="cursor-pointer center-itm gap-2 font-semibold">
            <input
              onChange={(e) =>
                setTransmission({ ...transmission, manual: e.target.checked })
              }
              type="checkbox"
              className="checkbox checkbox-accent"
            />
            <span
              className={`label-text ${
                transmission?.manual ? "font-bold text-black" : "text-gray-400"
              }`}
            >
              Manual
            </span>
          </label>
          <label className="cursor-pointer center-itm gap-2 font-semibold">
            <input
              onChange={(e) =>
                setTransmission({
                  ...transmission,
                  automatic: e.target.checked,
                })
              }
              type="checkbox"
              className="checkbox checkbox-accent"
            />
            <span
              className={`label-text ${
                transmission?.automatic
                  ? "font-bold text-black"
                  : "text-gray-400"
              }`}
            >
              Automatic
            </span>
          </label>
        </div>
      </FilterAccordion>
      <hr />

      <FilterAccordion
        title="Color"
        open={isOpen?.color}
        toggle={() => setIsOpen({ ...isOpen, color: !isOpen?.color })}
      >
        <div className="center-itm gap-2 flex-wrap mb-5">
          {Colors.map((color, idx) => (
            <div
              draggable
              onClick={() => handleStoreColor(color)}
              key={idx}
              className={`h-16 w-16 rounded-md center-itm justify-center border cursor-pointer ${
                storeColor[color] ? "scale-90 transition-all ease-out" : ""
              }`}
              style={{ backgroundColor: color }}
            >
              <p
                className={`font-bold text-2xl ${
                  storeColor[color] ? "" : "hidden text-base-content"
                }`}
              >
                <FaCheck />
              </p>
            </div>
          ))}
        </div>
      </FilterAccordion>

      <hr />

      <FilterAccordion
        title="RTO"
        open={isOpen?.rto}
        toggle={() => setIsOpen({ ...isOpen, rto: !isOpen?.rto })}
      >
        <div className="form-control gap-2 mb-5">
          <label className="cursor-pointer center-itm gap-2 font-semibold">
            <input
              onChange={(e) => setRto({ ...rto, rto1: e.target.checked })}
              type="checkbox"
              className="checkbox checkbox-accent"
            />
            <span
              className={`label-text ${
                rto?.rto1 ? "font-bold text-black" : "text-gray-400"
              }`}
            >
              Delhi
            </span>
          </label>
          <label className="cursor-pointer center-itm gap-2 font-semibold">
            <input
              onChange={(e) => setRto({ ...rto, rto2: e.target.checked })}
              type="checkbox"
              className="checkbox checkbox-accent"
            />
            <span
              className={`label-text ${
                rto?.rto2 ? "font-bold text-black" : "text-gray-400"
              }`}
            >
              Haryana
            </span>
          </label>
          <label className="cursor-pointer center-itm gap-2 font-semibold">
            <input
              onChange={(e) => setRto({ ...rto, rto3: e.target.checked })}
              type="checkbox"
              className="checkbox checkbox-accent"
            />
            <span
              className={`label-text ${
                rto?.rto3 ? "font-bold text-black" : "text-gray-400"
              }`}
            >
              Uttar Pradesh
            </span>
          </label>
          <label className="cursor-pointer center-itm gap-2 font-semibold">
            <input
              onChange={(e) => setRto({ ...rto, rto4: e.target.checked })}
              type="checkbox"
              className="checkbox checkbox-accent"
            />
            <span
              className={`label-text ${
                rto?.rto4 ? "font-bold text-black" : "text-gray-400"
              }`}
            >
              Rajasthan
            </span>
          </label>
          <label className="cursor-pointer center-itm gap-2 font-semibold">
            <input
              onChange={(e) => setRto({ ...rto, rto5: e.target.checked })}
              type="checkbox"
              className="checkbox checkbox-accent"
            />
            <span
              className={`label-text ${
                rto?.rto5 ? "font-bold text-black" : "text-gray-400"
              }`}
            >
              Maharashtra
            </span>
          </label>
        </div>
      </FilterAccordion>
      <hr />

      <FilterAccordion
        title="Owner"
        open={isOpen?.owner}
        toggle={() => setIsOpen({ ...isOpen, owner: !isOpen?.owner })}
      >
        <div className="form-control gap-2 mb-5">
          <label className="cursor-pointer center-itm gap-2 font-semibold">
            <input
              onChange={(e) => setOwner({ ...owner, owner1: e.target.checked })}
              type="checkbox"
              className="checkbox checkbox-accent"
            />
            <span
              className={`label-text ${
                owner?.owner1 ? "font-bold text-black" : "text-gray-400"
              }`}
            >
              First Owner
            </span>
          </label>
          <label className="cursor-pointer center-itm gap-2 font-semibold">
            <input
              onChange={(e) => setOwner({ ...owner, owner2: e.target.checked })}
              type="checkbox"
              className="checkbox checkbox-accent"
            />
            <span
              className={`label-text ${
                owner?.owner2 ? "font-bold text-black" : "text-gray-400"
              }`}
            >
              Second Owner
            </span>
          </label>
        </div>
      </FilterAccordion>
    </>
  );
};

export default MakeAndModel;
