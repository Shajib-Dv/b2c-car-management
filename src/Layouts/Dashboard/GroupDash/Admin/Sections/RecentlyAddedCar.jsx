import { useState } from "react";
import NewCarsDetails from "../../../../../Page/UsedCar/modal/NewCarsDetails";
import EmptyData from "../../../../../Shared/components/EmptyData";
import Loader from "../../../../../Shared/components/Loader";
import getCarsByUser from "../../../../../utils/getCarsByUser";
import RecentCarCard from "./RecentCarCard";
import { LiaListAlt } from "react-icons/lia";

const RecentlyAddedCar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [car, setCar] = useState({});
  const { recentCars, isLoading } = getCarsByUser();

  const handleModalOpen = (car) => {
    setModalOpen(true);
    setCar(car);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setCar({});
  };

  return (
    <div className='w-full h-hull my-20'>
      <h1 className='text-2xl font-bold mb-5 flex gap-2 justify-center items-center'>
        {" "}
        <span className='text-green-600'>
          <LiaListAlt />
        </span>{" "}
        Recent Cars{" "}
      </h1>

      {isLoading && <Loader />}

      {recentCars && recentCars.length > 0 && Array.isArray(recentCars) ? (
        <div className='w-full max-h-full'>
          <div className='w-full grid grid-cols-2 md:grid-cols-3 lg-grid-cols-4 gap-8 '>
            {recentCars &&
              recentCars?.map((car) => (
                <RecentCarCard
                  key={car?._id}
                  car={car}
                  handleModalOpen={handleModalOpen}
                />
              ))}
          </div>
        </div>
      ) : (
        !isLoading && (
          <EmptyData
            message='Please add some car'
            reason='You have no cars to show'
            go={"Add Car"}
            to='/dashboard/admin/add_new_car'
          />
        )
      )}

      <NewCarsDetails close={handleModalClose} car={car} open={modalOpen} />
    </div>
  );
};

export default RecentlyAddedCar;
