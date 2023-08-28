/** @format */

import { useState } from "react";
import UsedCarsByBudgetSlider from "./UsedCarsByBudgetSlider";

const UsedCarsByBudget = () => {
  const [select, setSelect] = useState(5);

  const handleOptionSelect = (opt) => {
    setSelect(opt);
  };

  return (
    <div className="my-14 md:px-9 px-5">
      <div className="lg:flex items-center justify-between">
        <h2 className="title">Trusted used cars by budget</h2>
        <div className="lg:flex items-center gap-3">
          <button
            onClick={() => handleOptionSelect(5)}
            className={select === 5 ? "btn-act" : "btn-cmn"}
          >
            1-5 LAKH
          </button>
          <button
            onClick={() => handleOptionSelect(10)}
            className={select === 10 ? "btn-act" : "btn-cmn"}
          >
            5-10 LAKH
          </button>
          <button
            onClick={() => handleOptionSelect(15)}
            className={select === 15 ? "btn-act" : "btn-cmn"}
          >
            10-15 LAKH
          </button>
        </div>
      </div>
      <div className="my-6">
        <UsedCarsByBudgetSlider />
      </div>
    </div>
  );
};

export default UsedCarsByBudget;
