import React from 'react';
import CarAddedByDateCount from './Analytics/CarAddedByDateCount';
import OldCarNewCar from './Analytics/OldCarNewCar';
import CartOrders from './Analytics/CartOrders';


const Analytics = () => {
  return (
    <div className='my-10 md:mt-[200px] w-full'>
      <CarAddedByDateCount />
      <div className='flex'>
        <OldCarNewCar />
        <CartOrders/>
      </div>
    </div>
  );
};

export default Analytics;