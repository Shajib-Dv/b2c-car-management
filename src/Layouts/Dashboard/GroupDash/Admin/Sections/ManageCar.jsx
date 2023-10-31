import React from "react";
import getCarsByUser from "../../../../../utils/getCarsByUser";
import { MdDeleteOutline } from "react-icons/md";
import { LiaListAlt } from "react-icons/lia";
import { CiEdit } from "react-icons/ci";
import Loader from "../../../../../Shared/components/Loader";
import Swal from "sweetalert2";
import { useState } from "react";
import UpdateSingleCarDataModal from "../../../Modal/UpdateSingleCarDataModal";
import EmptyData from "../../../../../Shared/components/EmptyData";

const ManageCar = () => {
  const [openModal, setOpenModal] = useState(null);
  const [car, setCar] = useState({});
  const { recentCars, isLoading, refetch } = getCarsByUser();
  const getRandomImage = (images) => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/add_new_car/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            //console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              refetch();
            }
          });
      }
    });
  };

  const handleOpenModal = (car) => {
    setOpenModal(true);
    setCar(car);
  };

  const closeModal = () => {
    setOpenModal(false);
    setCar({});
  };

  return (
    <>
      <div className='my-10 md:mt-[200px] w-full flex flex-col gap-5'>
        <h1 className='text-2xl font-bold mb-5 flex gap-2 justify-center items-center'>
          {" "}
          <span className='text-green-600'>
            <LiaListAlt />
          </span>{" "}
          Manage Cars{" "}
        </h1>

        {isLoading && <Loader />}

        {recentCars && Array.isArray(recentCars) && recentCars.length > 0 ? (
          <div className='flex flex-col gap-3'>
            {recentCars.map((car) => (
              <div className='flex flex-col gap-5' key={car?._id}>
                <div className='border border-green-400 p-5 rounded-md hover:shadow-green-200 hover:shadow-md flex flex-col md:flex-row justify-between'>
                  <div className='flex gap-2 flex-col md:flex-row '>
                    <div className='flex gap-1 font-semibold flex-col md:flex-row items-center '>
                      <img
                        className='h-9 w-16 rounded-md'
                        src={getRandomImage(car.images)}
                        alt=''
                      />
                      <h1>{car.basicInfo?.carName}</h1>
                    </div>
                  </div>
                  <div className='flex gap-3 text-lg justify-center '>
                    <button onClick={() => handleOpenModal(car)}>
                      <CiEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(car._id)}
                      className='hover:text-red-700'
                    >
                      <MdDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          !isLoading && (
            <EmptyData
              message={"No cars found"}
              go={"Add some cars"}
              to={"/dashboard/admin/add_new_car"}
            />
          )
        )}
      </div>
      <UpdateSingleCarDataModal open={openModal} close={closeModal} car={car} refetch={refetch}/>
    </>
  );
};

export default ManageCar;
