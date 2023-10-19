import React from 'react';
import getUserSellCar from '../../../../../utils/getUserSellCar';
import Swal from 'sweetalert2';
import EmptyData from '../../../../../Shared/components/EmptyData';
import { MdDeleteOutline, MdDoneAll, MdOutlinePending } from 'react-icons/md';
import { LiaListAlt } from 'react-icons/lia';
import Loader from '../../../../../Shared/components/Loader';

const ManageSellerCar = () => {
    const { carData, loading, refetch } = getUserSellCar();
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
                fetch(`http://localhost:3000/sell_car/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        //console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Car has been deleted.", "success");
                            refetch();
                        }
                    });
            }
        });
    };

    const handleApprove = (car) => {
        fetch(`http://localhost:3000/sell_car/${car._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${car.basicInfo?.carName} car is approved!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <>
            <div className='mt-10 md:mt-[200px] w-full'>
                <h1 className='text-2xl font-bold mb-5 flex gap-2 justify-center items-center'>
                    <span className='text-green-600'>
                        <LiaListAlt />
                    </span>
                    Manage Seller Car
                </h1>

                {loading && <Loader />}

                {carData && Array.isArray(carData) && carData.length > 0 ? (
                    <div className='flex flex-col gap-3'>
                        {carData.map((car) => (
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
                                    <div className='flex gap-3 text-lg justify-center items-center'>
                                        {car.status === 'approved' ? (<div className='text-green-600 tooltip tooltip-success'data-tip="Status: Approved"><MdDoneAll /></div>): (<button onClick={() => handleApprove(car)} className='text-xs btn btn-xs btn-outline btn-info'>
                                            Approve
                                        </button>)}
                                        
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
                    !loading && (
                        <EmptyData
                            message={"No cars found"}
                            go={"Add some cars"}
                            to={"/dashboard/admin/add_new_car"}
                        />
                    )
                )}
            </div>

        </>
    );
};

export default ManageSellerCar;