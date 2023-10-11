import React from 'react';

const UpdateCarData = ({car, modal}) => {
  console.log(car)
  return (
    <div>
      {/* <h1>{car}</h1> */}
      <button onClick={modal}>close</button>
    </div>
  );
};

export default UpdateCarData;