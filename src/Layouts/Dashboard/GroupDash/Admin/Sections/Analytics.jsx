import React from 'react';
import CarAddedByDateCount from './Analytics/CarAddedByDateCount';
import OldCarNewCar from './Analytics/OldCarNewCar';
import CartOrders from './Analytics/CartOrders';
import { TbDeviceAnalytics } from 'react-icons/tb';


const Analytics = () => {
  return (
    <div className='w-full my-20'>
      <h1 className='text-2xl font-bold mb-10 flex justify-center items-center gap-2'>
        <span className='text-green-600 text-3xl'>
          <TbDeviceAnalytics/>
        </span>
        Analytics</h1>
      <div className='flex'>
        <OldCarNewCar />
        <CartOrders />
      </div>
      <CarAddedByDateCount />
    </div>
  );
};

export default Analytics;