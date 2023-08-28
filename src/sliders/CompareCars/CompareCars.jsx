/** @format */

import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import CompareCarsSlider from "./CompareCarsSlider";

const CompareCars = () => {
  return (
    <>
      <div className="flex md:gap-7 justify-between md:justify-start items-center md:px-10 px-4 mb-8">
        <h1 className="md:text-2xl font-bold">Compare to buy the right car</h1>
        <Link>
          <div className="flex gap-2">
            <h1 className="text-sm mt-1 font-bold text-[#00A541]">View All</h1>
            <span className="text-[#00A541] text-2xl ">
              <BsFillArrowRightSquareFill />
            </span>
          </div>
        </Link>
      </div>
      <CompareCarsSlider />
    </>
  );
};

export default CompareCars;
