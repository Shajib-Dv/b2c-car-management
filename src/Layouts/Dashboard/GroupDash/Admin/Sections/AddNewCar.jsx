/** @format */

const AddNewCar = () => {
  return <div className="mt-10">
    AddNewCar
    <div>
      <form className='flex flex-col gap-5 md:w-[1000px] text-green-400'>
        <div>
          <h1>Basic Info</h1>
          <div className="md:flex md:flex-row flex flex-col gap-5 mb-5">
            <input type="text" placeholder='Car name' className='p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
            <input type="text" placeholder='Price' className='p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
          </div>
          <input type="text" placeholder='Locations' className='p-[10px] md:w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
        </div>
        <div>
          <h1>Key Specifications</h1>
          <div className="md:flex md:flex-row flex flex-col gap-5 mb-5">

            <input type="text" placeholder='Mileage' className='p-[10px] md:w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
            <input type="text" placeholder='Engine' className='p-[10px] md:w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
            <input type="text" placeholder='BHP' className='p-[10px] md:w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
            <input type="text" placeholder='Transmission' className='p-[10px] md:w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
          </div>
          <div className="md:flex md:flex-row flex flex-col gap-5 mb-5">

            <input type="text" placeholder='Seats' className='p-[10px] md:w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
            <input type="text" placeholder='Boot Space' className='p-[10px] md:w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
            <input type="text" placeholder='Aribags' className='p-[10px] md:w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
            <input type="text" placeholder='Number of Cylinder' className='p-[10px] md:w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
          </div>
          <div className="md:flex md:flex-row flex flex-col gap-5">

            <input type="text" placeholder='Emission Norms' className='p-[10px] md:w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
            <input type="text" placeholder='Wheel Drive' className='p-[10px] md:w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
            <input type="text" placeholder='Wheel ' className='p-[10px] md:w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
            
          </div>
        </div>
        <div>
          <h1>EMI</h1>
          <div className="md:flex md:flex-row flex flex-col gap-5 ">
            <input type="text" placeholder='Down Payment' className='p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
            <input type="text" placeholder='Bank Interest Rate' className='p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
          </div>
        </div>
        <div>
          <h1>Specification</h1>
          <div className="md:flex md:flex-row flex flex-col gap-5 mb-5">
            <input type="text" placeholder='Spacious interior' className='p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
            <input type="text" placeholder='Engine Displacement (cc)' className='p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
          </div>
          <div className="md:flex md:flex-row flex flex-col gap-5 mb-5">
            <input type="text" placeholder='Max Power (bhp@rpm)' className='p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
            <input type="text" placeholder='Seating Capacity' className='p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
          </div>
          <div className="md:flex md:flex-row flex flex-col gap-5 mb-5">
            <input type="text" placeholder='Boot Space (Litres)' className='p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
            <input type="text" placeholder='Body Type' className='p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
          </div>
          <div className="md:flex md:flex-row flex flex-col gap-5 mb-5">
            <input type="text" placeholder='Fuel Type' className='p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
            <input type="text" placeholder='No. of cylinder' className='p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
          </div>
          <div className="md:flex md:flex-row flex flex-col gap-5 mb-5">
            <input type="text" placeholder='Max Torque (nm@rpm)' className='p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
            <input type="text" placeholder='TransmissionType' className='p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
            <input type="text" placeholder='Fuel Tank Capacity' className='p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
          </div>
        </div>

        <input type="text" placeholder='email' className='p-[10px] bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
        <input type="text" placeholder='password' className='p-[10px] bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
        <button className='btn'>Add New Car</button>
      </form>
    </div>
  </div>;
};

export default AddNewCar;
