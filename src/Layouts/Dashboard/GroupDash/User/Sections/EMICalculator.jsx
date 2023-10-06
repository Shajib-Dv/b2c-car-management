import CalculateEMI from "../../../../../Page/CarDetails/sections/CalculateEMI";
import EmiBanner from "../../../../../Page/CarDetails/sections/EmiBanner";

const EMICalculator = () => {
  return (
    <div className="mt-10 md:mt-[10px] w-[300px] md:w-full">
      <CalculateEMI />
      <EmiBanner />
    </div>
  );
};

export default EMICalculator;
