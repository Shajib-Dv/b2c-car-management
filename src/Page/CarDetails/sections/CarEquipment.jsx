import React from 'react';

const CarEquipment = ({carName}) => {
    return (
        <div className='rounded-lg shadow border py-10 px-10'>
            <h1 className='text-xl font-bold mb-7'>{carName} Specifications</h1>
            <div className='md:flex gap-16'>
                <div className='border px-5 py-1 rounded-3xl font-semibold w-52'>
                    <h1>Engine and <br />
                        Transmission</h1>
                </div>
                <div className='border px-5 py-1 rounded-3xl font-semibold w-52'>
                    <h1>Fuel & <br />
                        Performance</h1>
                </div>
                <div className='border px-5 py-1 rounded-3xl font-semibold w-52'>
                    <h1>Suspension, Steering <br />
                        & Brakes</h1>
                </div>
                <div className='border px-5 py-1 rounded-3xl font-semibold w-52'>
                    <h1>Dimensions & <br />
                        Capacity</h1>
                </div>
            </div>
        </div>
    );
};

export default CarEquipment;