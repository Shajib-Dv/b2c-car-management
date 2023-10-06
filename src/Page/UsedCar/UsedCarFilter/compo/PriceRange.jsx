import { useEffect, useRef, useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import FilterAccordion from "../Accordion/FilterAccordion";

const PriceRange = ({ filteringTextSet }) => {
  const [rangeValue, setRangleValue] = useState([5000, 50000]);
  const pillarRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const Divider = [];

  const PillarHeight = [
    10, 16, 20, 30, 15, 50, 70, 80, 25, 100, 66, 30, 55, 48, 16,
  ];

  let Pillars = [];

  for (let i = 1; i < 16; i++) {
    Pillars.push(i);
    let Calculate = 6000 * i;

    Divider.push(Calculate);
  }

  useEffect(() => {
    const childList = pillarRef?.current?.childNodes;

    for (let i = 0; i < childList.length; i++) {
      if (Divider[i] <= rangeValue[0] || Divider[i] >= rangeValue[1]) {
        childList[i].classList.add("bg-slate-300");
        childList[i].classList.remove("bg-green-600");
      } else {
        childList[i].classList.remove("bg-slate-300");
        childList[i].classList.add("bg-green-600");
      }
    }

    filteringTextSet("price", rangeValue);
  }, [rangeValue]);

  return (
    <>
      <FilterAccordion
        title="Price"
        open={isOpen}
        toggle={() => setIsOpen((prev) => !prev)}
      >
        <div
          ref={pillarRef}
          className=" my-2 flex justify-start items-end gap-1 h-40 overflow-hidden"
        >
          {Pillars.length >= 15 &&
            Pillars.map((pl) => (
              <div
                key={pl}
                className={`w-full rounded-t-sm price-plr bg-green-600`}
                style={{ height: `${PillarHeight[pl - 1]}%` }}
              ></div>
            ))}
        </div>

        <div>
          <RangeSlider
            onInput={(e) => setRangleValue(e)}
            min={0}
            max={100000}
            step={1000}
            defaultValue={[rangeValue[0], rangeValue[1]]}
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
      </FilterAccordion>
    </>
  );
};

export default PriceRange;
