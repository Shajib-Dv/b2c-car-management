/** @format */

import { useState } from "react";
import RecommendedCarsSlider from "./RecommendedCarsSlider";

const RecommendedCarsSection = () => {
  const [select, setSelect] = useState("A");

  const handleOptionSelect = (opt) => {
    setSelect(opt);
  };

  return (
    <div className="my-14 md:px-9 p-5 lg:p-0">
      <div className="lg:flex items-center justify-between">
        <h2 className="title">Recommended Cars For You</h2>
        <div className="lg:flex items-center gap-5">
          <button
            onClick={() => handleOptionSelect("A")}
            className={select === "A" ? "btn-act" : "btn-cmn"}
          >
            Volkswagen
          </button>
          <button
            onClick={() => handleOptionSelect("B")}
            className={select === "B" ? "btn-act" : "btn-cmn"}
          >
            Audi
          </button>
          <button
            onClick={() => handleOptionSelect("C")}
            className={select === "C" ? "btn-act" : "btn-cmn"}
          >
            Ford
          </button>
          <button
            onClick={() => handleOptionSelect("D")}
            className={select === "D" ? "btn-act" : "btn-cmn"}
          >
            BMW
          </button>
          <button
            onClick={() => handleOptionSelect("E")}
            className={select === "E" ? "btn-act" : "btn-cmn"}
          >
            Chevrolet
          </button>
          <button
            onClick={() => handleOptionSelect("F")}
            className={select === "F" ? "btn-act" : "btn-cmn"}
          >
            Honda
          </button>
        </div>
      </div>
      <div className="my-6 ">
        <RecommendedCarsSlider />
      </div>
    </div>
  );
};

export default RecommendedCarsSection;
