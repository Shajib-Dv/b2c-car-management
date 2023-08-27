/** @format */

import React from "react";
import { BsDot, BsFillArrowRightSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import BodyStyleSlider from "../../Shared/SectionSliders/BodyStyleSlider/BodyStyleSlider";

const FeelNBrowseByBody = () => {
  return (
    <div className="">
      <div className="lg:flex items-center justify-between lg:pr-36 py-5 px-5 lg:px-0">
        <div>
          <img
            src="https://cdn.discordapp.com/attachments/1094651413235253289/1144124572556349490/Land-Rover-New-Range-Rover-Evoque-Exterior-170043_2.png"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-bold">
            Feel the best experience <br /> with us
          </h1>
          <p className="text-[#4E4E4E] text-sm flex">
            <span className="text-base">
              <BsDot></BsDot>
            </span>{" "}
            November 2021 (36,544 miles): Battery and driver-side <br />{" "}
            high-pressure fuel pump replaced. An inspection was <br /> performed
            at this time as well.
          </p>
          <p className="text-[#4E4E4E] text-sm flex">
            <span className="text-base">
              <BsDot></BsDot>
            </span>{" "}
            November 2021 (36,544 miles): Battery and driver-side <br />{" "}
            high-pressure fuel pump replaced. An inspection was <br /> performed
            at this time as well.
          </p>
          <p className="text-[#4E4E4E] text-sm flex">
            <span className="text-base">
              <BsDot></BsDot>
            </span>{" "}
            November 2021 (36,544 miles): Battery and driver-side <br />{" "}
            high-pressure fuel pump replaced. An inspection was <br /> performed
            at this time as well.
          </p>
        </div>
      </div>

      {/* Browse by Body Style */}

      <div className="py-16 bg-[#FAFAFA] overflow-hidden">
        <div>
          <div className="flex gap-7 items-center px-10 mb-5">
            <h1 className="text-xl font-bold">Browse by Body Style</h1>
            <Link>
              <div className="flex gap-2">
                <h1 className="text-sm mt-1 font-bold text-[#00A541]">
                  View All
                </h1>
                <span className="text-[#00A541] text-2xl ">
                  <BsFillArrowRightSquareFill></BsFillArrowRightSquareFill>
                </span>
              </div>
            </Link>
          </div>
          <div className="px-9 flex items-center gap-10">
            <div className="w-[100%]">
              <BodyStyleSlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeelNBrowseByBody;
