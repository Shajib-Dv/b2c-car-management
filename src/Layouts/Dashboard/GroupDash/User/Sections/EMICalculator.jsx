/** @format */

import CalculateEMI from "../../../../../Page/CarDetails/sections/CalculateEMI";
import EmiBanner from "../../../../../Page/CarDetails/sections/EmiBanner";

const EMICalculator = () => {
  return (
    <div className="mt-10 md:mt-[10px] w-full">
      <CalculateEMI/>
      <EmiBanner/>
    </div>
  )
};

export default EMICalculator;
