import React, { useState } from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import getAllNewCars from "../../../utils/getAllNewCars";
import Loader from "../../../Shared/components/Loader";
import EmptyData from "../../../Shared/components/EmptyData";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import getMyCart from "../../../utils/getMyCart";

const NewCar = ({ limit, show_menu, show_loader = false }) => {
  const { allCars, isLoading } = getAllNewCars(limit);
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { myCart, loading, refetch } = getMyCart();
  const randomImg = (images) =>
    images[Math.floor(Math.random() * (images.length - 1))];

  if (isLoading && show_loader) {
    return <Loader />;
  }
  // console.log(allCars)
  // console.log(user)
  //console.log(myCart)
  const handleAddToCart = (id, price, carName, images, locations) => {
    if (user && user.email) {
      const orderItem = {
        carId: id,
        email: user.email,
        price: price,
        carName: carName,
        images: images,
        locations: locations,
      };
      fetch("http://localhost:3000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Car added on the cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to order the car",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

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
          <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6 px-10'>
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
                  <div className='flex justify-between items-center flex-wrap gap-2'>
                    <Link
                      to={`/new_car/details/${car?._id}`}
                      className='btn-details'
                    >
                      show details
                    </Link>
                    <button
                      className='btn-details'
                      onClick={() =>
                        handleAddToCart(
                          car?._id,
                          car?.basicInfo?.price,
                          car?.basicInfo?.carName,
                          car?.images,
                          car?.basicInfo?.locations
                        )
                      }
                    >
                      add to cart
                    </button>
                  </div>
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
