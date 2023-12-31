import React from "react";
import {
  MdSpeed,
  MdOutlineElectricBolt,
  MdOutlineAirlineSeatReclineExtra,
} from "react-icons/md";
import { SiLitiengine } from "react-icons/si";
import { ImLocation } from "react-icons/im";
import { BsFillCarFrontFill } from "react-icons/bs";

const KeySpec = ({ KeySpec,carName }) => {
  const {
    mileage,
    Engine,
    BHP,
    NumberOfCylinder,
    Transmission,
    Aribags,
    BootSpace,
    Seats,
    EmissionNorms,
    WheelDrive,
    Wheel,
  } = KeySpec;
  return (
    <div className='px-10 py-5 shadow-md rounded-lg'>
      <div>
        <h1 className='font-bold text-xl mb-10'>
          Key Specifications of {carName}
        </h1>
      </div>
      <div className='md:flex justify-between grid grid-cols-2'>
        <div className='flex flex-col items-center'>
          <div className='bg-[#9A9EA7] p-4 rounded-lg'>
            <span className='text-xl text-white'>
              <MdSpeed />
            </span>
          </div>
          <p className='text-[#9A9EA7] mb-1 mt-2'>Mileage (upto)</p>
          <p className='font-bold'>{mileage || 'unknown'} kmpl</p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='bg-[#9A9EA7] p-4 rounded-lg'>
            <span className='text-xl text-white'>
              <SiLitiengine />
            </span>
          </div>
          <p className='text-[#9A9EA7] mb-1 mt-2'>Engine (upto)</p>
          <p className='font-bold'>{Engine || 'unknown'} kmpl</p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='bg-[#9A9EA7] p-4 rounded-lg'>
            <span className='text-xl text-white'>
              <MdOutlineElectricBolt />
            </span>
          </div>
          <p className='text-[#9A9EA7] mb-1 mt-2'>BHP</p>
          <p className='font-bold'>
            {BHP || 'unknown'} kmpl</p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='bg-[#9A9EA7] p-4 rounded-lg'>
            <span className='text-xl text-white'>
              <ImLocation />
            </span>
          </div>
          <p className='text-[#9A9EA7] mb-1 mt-2'>Transmission</p>
          <p className='font-bold'>{Transmission || 'unknown'} kmpl</p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='bg-[#9A9EA7] p-4 rounded-lg'>
            <span className='text-xl text-white'>
              <MdOutlineAirlineSeatReclineExtra />
            </span>
          </div>
          <p className='text-[#9A9EA7] mb-1 mt-2'>Seats</p>
          <p className='font-bold'>{Seats || 'not_specified'}</p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='bg-[#9A9EA7] p-4 rounded-lg'>
            <span className='text-xl text-white'>
              <BsFillCarFrontFill />
            </span>
          </div>
          <p className='text-[#9A9EA7] mb-1 mt-2'>Boot Space</p>
          <p className='font-bold'>{BootSpace || 'unknown'} kmpl</p>
        </div>
      </div>
      <div className='md:flex justify-between lg:px-24 mt-10 mb-10 grid grid-cols-2'>
        <div className='flex flex-col items-center'>
          <div className='bg-[#9A9EA7] p-4 rounded-lg'>
            <span className='text-xl text-white'>
              <MdSpeed />
            </span>
          </div>
          <p className='text-[#9A9EA7] mb-1 mt-2'>Airbags</p>
          <p className='font-bold'>{Aribags}</p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='bg-[#9A9EA7] p-4 rounded-lg'>
            <span className='text-xl text-white'>
              <MdSpeed />
            </span>
          </div>
          <p className='text-[#9A9EA7] mb-1 mt-2'>Number of Cylinder</p>
          <p className='font-bold'>{NumberOfCylinder || 'not_specified'}</p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='bg-[#9A9EA7] p-4 rounded-lg'>
            <span className='text-xl text-white'>
              <MdSpeed />
            </span>
          </div>
          <p className='text-[#9A9EA7] mb-1 mt-2'>Emission Norms</p>
          <p className='font-bold'>{EmissionNorms || 'unknown'}</p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='bg-[#9A9EA7] p-4 rounded-lg'>
            <span className='text-xl text-white'>
              <MdSpeed />
            </span>
          </div>
          <p className='text-[#9A9EA7] mb-1 mt-2'>Wheel Drive</p>
          <p className='font-bold'>{WheelDrive || 'unknown'}</p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='bg-[#9A9EA7] p-4 rounded-lg'>
            <span className='text-xl text-white'>
              <MdSpeed />
            </span>
          </div>
          <p className='text-[#9A9EA7] mb-1 mt-2'>Wheel</p>
          <p className='font-bold'>{Wheel || "not_specified"}</p>
        </div>
      </div>
      <center>
        <button className='btn-act lg:mb-10'>Features and Specs</button>
      </center>
    </div>
  );
};

export default KeySpec;
