/** @format */

import { useState } from "react";
import MostSearchedCarSlider from "./MostSearchedCarSlider";

const MostSearchedCarSection = () => {
  const [select, setSelect] = useState("Volkswagen");

  const handleOptionSelect = (opt) => {
    setSelect(opt);
  };

  return (
    <div className="my-14 md:px-9">
      <div className="flex items-center justify-between">
        <h2 className="title">The most searched cars</h2>
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleOptionSelect("Volkswagen")}
            className={select === "Volkswagen" ? "btn-act" : "btn-cmn"}
          >
            Volkswagen
          </button>
          <button
            onClick={() => handleOptionSelect("Sedan")}
            className={select === "Sedan" ? "btn-act" : "btn-cmn"}
          >
            Sedan
          </button>
          <button
            onClick={() => handleOptionSelect("Auv")}
            className={select === "Auv" ? "btn-act" : "btn-cmn"}
          >
            Auv
          </button>
          <button
            onClick={() => handleOptionSelect("BMW")}
            className={select === "BMW" ? "btn-act" : "btn-cmn"}
          >
            BMW
          </button>
          <button
            onClick={() => handleOptionSelect("Muv")}
            className={select === "Muv" ? "btn-act" : "btn-cmn"}
          >
            Muv
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
        <MostSearchedCarSlider />
      </div>
    </div>
  );
};

export default MostSearchedCarSection;
