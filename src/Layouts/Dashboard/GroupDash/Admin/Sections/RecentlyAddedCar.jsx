/** @format */

import Loader from "../../../../../Shared/components/Loader";
import getCarsByUser from "../../../../../utils/getCarsByUser";
import RecentCarCard from "./RecentCarCard";

const RecentlyAddedCar = () => {
  const { recentCars, isLoading } = getCarsByUser();

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="my-20 w-full max-h-full">
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg-grid-cols-4 gap-8 ">
        {recentCars &&
          recentCars?.map((car) => <RecentCarCard key={car?._id} car={car} />)}
      </div>
    </div>
  );
};

export default RecentlyAddedCar;
