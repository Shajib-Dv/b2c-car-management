import React from 'react';
import CarAddedByDateCount from './Analytics/CarAddedByDateCount';
import OldCarNewCar from './Analytics/OldCarNewCar';


const Analytics = () => {
  return (
    <div className='my-10 md:mt-[200px] w-full'>
      <CarAddedByDateCount/>
      <OldCarNewCar/>
    </div>
  );
};

export default Analytics;