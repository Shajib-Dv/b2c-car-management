import React from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import getUpComingCarData from "../../../utils/getUpComingCarData";
import Loader from "../../../Shared/components/Loader";

const UpcomingCar = ({limit,show_menu,loader=false}) => {
  const { carData, loading } = getUpComingCarData();

  const randomImg = (images) => images[Math.floor(Math.random() *(images.length - 1))];

if(loading && loader){
  return <Loader/>
}


  return (
    <div className='my-16'>
     {show_menu && <div className='flex gap-7 items-center px-10 mb-8'>
        <h1 className='title'>Upcoming Car</h1>
        <Link to="/upcoming">
          <div className='flex gap-2'>
            <h1 className='text-sm mt-1 font-bold text-[#00A541]'>View All</h1>
            <span className='text-[#00A541] text-2xl '>
              <BsFillArrowRightSquareFill></BsFillArrowRightSquareFill>
            </span>
          </div>
        </Link>
      </div>}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6 px-10'>
        {carData &&
          Array.isArray(carData) &&
          carData.slice(0, limit ? +limit : (carData.length)).map((car) => (
            <div className='shadow border p-3 rounded-lg flex flex-col justify-between gap-2 group' key={car?._id}>
             <div className="h-40 w-full overflow-hidden rounded-md">
             <img
                src={randomImg(car?.images)}
                alt='car'
                className="w-full h-full object-contain group-hover:scale-105 transition-all duration-700"
              />
             </div>
              <div>
                <h1 className='font-bold'>{car?.basicData?.carName || 'unknown'}</h1>
                <p>Rs {car?.basicData?.price} - {+car?.basicData?.price +- 1500} Lakh*</p>
              <button className='btn-details w-48 mt-2'>Notify Me</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UpcomingCar;
