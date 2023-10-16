import React, { useState } from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import getAllNewCars from "../../../utils/getAllNewCars";
import Loader from "../../../Shared/components/Loader";
import EmptyData from "../../../Shared/components/EmptyData";
import NewCarsDetails from "../modal/NewCarsDetails";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const NewCar = ({ limit, show_menu, show_loader = false }) => {
  const { user } = useAuth();
  const [openModal, setOpenModal] = useState(false);
  const [car, setCar] = useState({});
  const navigate = useNavigate();
  const { allCars, isLoading, refetch } = getAllNewCars(limit);

  const randomImg = (images) =>
    images[Math.floor(Math.random() * (images.length - 1))];

  const redirectLogin = () => {
    Swal.fire({
      title: "Please login to see car details",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#05690e",
      cancelButtonColor: "#d33",
      confirmButtonText: "Log in",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login/google");
      }
    });
  };

  const handleOpenModal = (car) => {
    if (user?.email) {
      setOpenModal(true);
      setCar(car);
    } else {
      redirectLogin();
    }
  };

  const closeModal = () => {
    setOpenModal(false);
    setCar({});
  };

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
                  <p>Rs {car?.basicInfo?.price} Lakh*</p>
                  <button
                    onClick={() => handleOpenModal(car)}
                    className='btn-details w-48 mt-2'
                  >
                    show details
                  </button>
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
      {user?.email && (
        <NewCarsDetails open={openModal} close={closeModal} car={car} />
      )}
    </>
  );
};

export default NewCar;
