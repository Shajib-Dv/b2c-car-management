import React from 'react';
import getCarsByUser from '../../../../../utils/getCarsByUser';
import { CiEdit } from 'react-icons/ci';
import { BiSolidBookAdd } from 'react-icons/bi';
import { MdDeleteOutline } from 'react-icons/md';
import { LiaListAlt } from 'react-icons/lia';
import Loader from '../../../../../Shared/components/Loader';
import Swal from 'sweetalert2';


const ManageCar = () => {
    const { recentCars, isLoading, refetch } = getCarsByUser()
    const getRandomImage = (images) => {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    };
    // console.log(recentCars)
    // if (isLoading) {
    //     return <Loader />;
    // }

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/add_new_car/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        //console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            refetch()
                        }
                    })
            }
        })

    }
    return (
        <div className='mt-10 md:mt-[200px] w-full'>
            <h1 className='text-2xl font-bold mb-5 flex gap-2 justify-center items-center'> <span className='text-green-600'><LiaListAlt /></span> Manage Cars </h1>

            <div className='flex flex-col gap-3'>
                {isLoading ? <Loader /> :
                    recentCars.map((car) => (
                        <div className='flex flex-col gap-5'>
                            <div className='border border-green-400 p-5 rounded-md hover:shadow-green-200 hover:shadow-md flex flex-col md:flex-row justify-between'>
                                <div className='flex gap-2 flex-col md:flex-row '>
                                    <div className='flex gap-1 font-semibold flex-col md:flex-row items-center '><img className='h-9 w-16 rounded-md' src={getRandomImage(car.images)} alt="" /><h1>{car.basicInfo?.carName}</h1></div>

                                </div>
                                <div className='flex gap-3 text-lg justify-center '>
                                    <button className='hover:text-green-700'><CiEdit /></button>
                                    <button className="hover:text-green-700" onClick={() => document.getElementById('my_modal_4').showModal()}><CiEdit /></button>
                                    <dialog id="my_modal_4" className="modal">
                                        <div className="modal-box w-full max-w-5xl border border-green-600">
                                            <h3 className="font-bold text-lg">Hello!</h3>
                                            <p className="py-4">Click the button below to close Click the button below to close</p>
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    {/* if there is a button, it will close the modal */}
                                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>

                                    <button onClick={() => handleDelete(car._id)} className='hover:text-red-700'><MdDeleteOutline /></button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default ManageCar;