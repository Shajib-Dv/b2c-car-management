import React, { useState } from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import getAllNewCars from "../../../utils/getAllNewCars";
import Loader from "../../../Shared/components/Loader";
import EmptyData from "../../../Shared/components/EmptyData";

const NewCar = ({ limit, show_menu, show_loader = false }) => {
  const { allCars, isLoading, refetch } = getAllNewCars(limit);

  const randomImg = (images) =>
    images[Math.floor(Math.random() * (images.length - 1))];

  if (isLoading && show_loader) {
    return <Loader />;
  }

  return (
    <>
      <div>
        {show_menu && (
          <div className='flex gap-7 items-center px-10 mb-8'>
            <h1 className='title'>New Car</h1>
            <Link to='/new_car'>
              <div className='flex gap-2'>
                <h1 className='text-sm mt-1 font-bold text-[#00A541]'>
                  View All
                </h1>
                <span className='text-[#00A541] text-2xl '>
                  <BsFillArrowRightSquareFill></BsFillArrowRightSquareFill>
                </span>
              </div>
            </Link>
          </div>
        )}

        {allCars && Array.isArray(allCars) && allCars.length > 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-4 gap-6 px-10'>
            {allCars?.map((car) => (
              <div
                className='shadow border p-3 rounded-lg flex flex-col justify-between group'
                key={car?._id}
              >
                <div className='h-40 w-full overflow-hidden rounded-md'>
                  <img
                    src={randomImg(car?.images)}
                    alt='car'
                    className='w-full h-full object-cover group-hover:scale-105 transition-all duration-700'
                  />
                </div>
                <div>
                  <h1 className='font-bold'>
                    {car?.basicInfo?.carName || "unknown"}
                  </h1>
                  <p className=' mb-4'>Rs {car?.basicInfo?.price} Lakh*</p>
                  <Link
                    to={`/new_car/details/${car?._id}`}
                    className='btn-details w-48'
                  >
                    show details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          show_loader && (
            <EmptyData message={"No cars found"} go={"back to home"} to={"/"} />
          )
        )}
      </div>
    </>
  );
};

export default NewCar;
