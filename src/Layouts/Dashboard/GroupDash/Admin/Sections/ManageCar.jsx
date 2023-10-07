import React from 'react';
import getCarsByUser from '../../../../../utils/getCarsByUser';
import { CiEdit } from 'react-icons/ci';
import { BiSolidBookAdd } from 'react-icons/bi';
import { MdDeleteOutline } from 'react-icons/md';
import { LiaListAlt } from 'react-icons/lia';
import Loader from '../../../../../Shared/components/Loader';


const ManageCar = () => {
    const { recentCars, isLoading, refetch } = getCarsByUser()
    const getRandomImage = (images) => {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    };
    console.log(recentCars)
    if (isLoading) {
        return <Loader />;
    }
    return (
        <div className='mt-10 md:mt-[200px] w-full'>
            <h1 className='text-2xl font-bold mb-5 flex gap-2 justify-center items-center'> <span className='text-green-600'><LiaListAlt/></span> Manage Cars </h1>

            <div className='flex flex-col gap-3'>
                {
                    recentCars.map((car) => (
                        <div className='flex flex-col gap-5'>
                            <div className='border border-green-400 p-5 rounded-md hover:shadow-green-200 hover:shadow-md flex flex-col md:flex-row justify-between'>
                                <div className='flex gap-2 flex-col md:flex-row '>
                                    <div className='flex gap-1 font-semibold flex-col md:flex-row items-center '><img className='h-9 w-16 rounded-md' src={getRandomImage(car.images)} alt="" /><h1>{car.basicInfo?.carName}</h1></div>

                                </div>
                                <div className='flex gap-3 text-lg justify-center '>
                                    <button className='hover:text-green-700'><CiEdit /></button> <button className='hover:text-red-700'><MdDeleteOutline /></button>
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