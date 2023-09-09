/** @format */

import { FaStar } from "react-icons/fa";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState } from "react";
import UserReviewSlider from "./sliders/UserReviewSlider";
const UserReview = () => {
  const [option, setOption] = useState("A");
  const handleOptionSelect = (op) => {
    setOption(op);
  };

  return (
    <div className="bg-base-100 rounded-md p-4 shadow mt-10">
      <div>
        <h2 className="title">Maruti Baleno User Reviews</h2>
      </div>

      <div className="center-itm justify-between mt-10">
        <div className="center-itm gap-4">
          <FaStar className="title text-yellow-400" />
          <p className="title">4.0</p>
          <p className="font-semibold">
            Based on <br />
            {Math.round(Math.random() * 100)} user reviews
          </p>
        </div>
        <button className="btn-act">Write your review</button>
      </div>

      <div className="center-itm my-10 md:w-3/5 justify-between">
        <div className="center-itm flex-col">
          <div className="w-14">
            <CircularProgressbar
              value={4.4}
              maxValue={5}
              text={"4.4"}
              styles={buildStyles({
                textColor: "black",
                pathColor: "#00a541",
                rotation: 180,
              })}
            />
          </div>
          <p>Exterior</p>
        </div>
        <div className="center-itm flex-col">
          <div className="w-14">
            <CircularProgressbar
              value={4.4}
              maxValue={5}
              text={"4.4"}
              styles={buildStyles({
                textColor: "black",
                pathColor: "#00a541",
                rotation: 180,
              })}
            />
          </div>
          <p>Comfort</p>
        </div>
        <div className="center-itm flex-col">
          <div className="w-14">
            <CircularProgressbar
              value={4.6}
              maxValue={5}
              text={"4.6"}
              styles={buildStyles({
                textColor: "black",
                pathColor: "#00a541",
                rotation: 180,
              })}
            />
          </div>
          <p>Performance</p>
        </div>
        <div className="center-itm flex-col">
          <div className="w-14">
            <CircularProgressbar
              value={4}
              maxValue={5}
              text={"4"}
              styles={buildStyles({
                textColor: "black",
                pathColor: "#00a541",
                rotation: 180,
              })}
            />
          </div>
          <p>Fuel Economy</p>
        </div>
        <div className="center-itm flex-col">
          <div className="w-14">
            <CircularProgressbar
              value={4.1}
              maxValue={5}
              text={"4.1"}
              styles={buildStyles({
                textColor: "black",
                pathColor: "#00a541",
                rotation: 180,
              })}
            />
          </div>
          <p>Value For Money</p>
        </div>
      </div>

      <div className="px-10 center-itm justify-between">
        <button
          onClick={() => handleOptionSelect("A")}
          className={`font-semibold uppercase px-3 text-gray-500 pb-3 ${
            option === "A" && "btn-under"
          } `}
        >
          Latest
        </button>
        <button
          onClick={() => handleOptionSelect("B")}
          className={`font-semibold uppercase px-3 text-gray-500 pb-3 ${
            option === "B" && "btn-under"
          }`}
        >
          Helpful
        </button>
        <button
          onClick={() => handleOptionSelect("C")}
          className={`font-semibold uppercase px-3 text-gray-500 pb-3 ${
            option === "C" && "btn-under"
          }`}
        >
          Critical
        </button>
      </div>
      <hr />
      <div className="my-10 px-10">
        <UserReviewSlider />
      </div>
    </div>
  );
};

export default UserReview;
