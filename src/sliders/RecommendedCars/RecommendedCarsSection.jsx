/** @format */

import { useState } from "react";
import RecommendedCarsSlider from "./RecommendedCarsSlider";

const RecommendedCarsSection = () => {
  const [select, setSelect] = useState("Volkswagen");

  const handleOptionSelect = (opt) => {
    setSelect(opt);
  };

  return (
    <div className="my-14 md:px-9 p-5 lg:p-0">
      <div className="lg:flex items-center justify-between">
        <h2 className="title">Recommended Cars For You</h2>
        <div className="lg:flex items-center gap-3">
          <button
            onClick={() => handleOptionSelect("Volkswagen")}
            className={select === "Volkswagen" ? "btn-act" : "btn-cmn"}
          >
            Volkswagen
          </button>
          <button
            onClick={() => handleOptionSelect("Audi")}
            className={select === "Audi" ? "btn-act" : "btn-cmn"}
          >
            Audi
          </button>
          <button
            onClick={() => handleOptionSelect("Ford")}
            className={select === "Ford" ? "btn-act" : "btn-cmn"}
          >
            Ford
          </button>
          <button
            onClick={() => handleOptionSelect("BMW")}
            className={select === "BMW" ? "btn-act" : "btn-cmn"}
          >
            BMW
          </button>
          <button
            onClick={() => handleOptionSelect("Chevrolet")}
            className={select === "Chevrolet" ? "btn-act" : "btn-cmn"}
          >
            Chevrolet
          </button>
          <button
            onClick={() => handleOptionSelect("Honda")}
            className={select === "Honda" ? "btn-act" : "btn-cmn"}
          >
            Honda
          </button>
        </div>
      </div>
      <div className="my-6">
        <RecommendedCarsSlider />
      </div>
    </div>
  );
};

export default RecommendedCarsSection;
