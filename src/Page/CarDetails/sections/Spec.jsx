import React from 'react';

const Spec = () => {
    return (
        <div className='rounded-lg shadow border px-5 py-10 md:px-10'>
            <div className='title mb-10'>Specification of Maruti Baleno</div>
            <div className='md:flex md:pl-5 gap-8'>
                <div className='md:w-5/12 '>
                    <div className='flex justify-between py-3'>
                        <h1>Spacious interior</h1>
                        <h1>22.94 kmpl</h1>
                    </div>
                    <hr />
                    <div className='flex justify-between py-3'>
                        <h1>Engine Displacement (cc)</h1>
                        <h1>1197</h1>
                    </div>
                    <hr />
                    <div className='flex justify-between py-3'>
                        <h1>Max Power (bhp@rpm)</h1>
                        <h1>88.50bhp@6000rpm</h1>
                    </div>
                    <hr />
                    <div className='flex justify-between py-3'>
                        <h1>Seating Capacity</h1>
                        <h1>5</h1>
                    </div>
                    <hr />
                    <div className='flex justify-between py-3'>
                        <h1>Boot Space (Litres)</h1>
                        <h1>318</h1>
                    </div>
                    <hr />
                    <div className='flex justify-between py-3'>
                        <h1>Body Type</h1>
                        <h1>Hatchback</h1>
                    </div>
                    <hr />
                </div>
                <div className='md:w-5/12 '>
                    <div className='flex justify-between py-3'>
                        <h1>Fuel Type</h1>
                        <h1>Petrol</h1>
                    </div>
                    <hr />
                    <div className='flex justify-between py-3'>
                        <h1>No. of cylinder</h1>
                        <h1>4</h1>
                    </div>
                    <hr />
                    <div className='flex justify-between py-3'>
                        <h1>Max Torque (nm@rpm)</h1>
                        <h1>113Nm@4400rpm</h1>
                    </div>
                    <hr />
                    <div className='flex justify-between py-3'>
                        <h1>TransmissionType</h1>
                        <h1>Automatic</h1>
                    </div>
                    <hr />
                    <div className='flex justify-between py-3'>
                        <h1>Fuel Tank Capacity</h1>
                        <h1>37.0</h1>
                    </div>
                    <hr />
                    
                </div>

            </div>
        </div>
    );
};

export default Spec;