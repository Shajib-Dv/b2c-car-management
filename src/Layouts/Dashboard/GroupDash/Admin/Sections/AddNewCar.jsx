/** @format */

const AddNewCar = () => {
  return <div className="pt-10 w-full">
    <h1 className="mb-5 font-bold text-xl text-[#3AB86C] font-sans">Add New Car</h1>
    <div className="pb-10">
      <form className='flex flex-col gap-5 w-full text-green-400'>
        <div>
          <h1 className="font-bold text-[#3AB86C] font-sans mb-1">Basic Info</h1>
          <div className="md:flex md:flex-row flex flex-col gap-5 mb-5">
            <input type="text" placeholder='Car name' className='p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
            <input type="text" placeholder='Price' className='p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
          </div>
          <input type="text" placeholder='Locations' className='p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
        </div>
        <div>
          <h1 className="font-bold text-[#3AB86C] font-sans mb-1">Key Specifications</h1>
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
          <h1 className="font-bold text-[#3AB86C] font-sans mb-1">EMI</h1>
          <div className="md:flex md:flex-row flex flex-col gap-5 ">
            <input type="text" placeholder='Down Payment' className='p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
            <input type="text" placeholder='Bank Interest Rate' className='p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
          </div>
        </div>
        <div>
          <h1 className="font-bold text-[#3AB86C] font-sans mb-1">Specification</h1>
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
          <div className="md:flex md:flex-row flex flex-col gap-5 ">
            <input type="text" placeholder='Max Torque (nm@rpm)' className='p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
            <input type="text" placeholder='TransmissionType' className='p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
            <input type="text" placeholder='Fuel Tank Capacity' className='p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
          </div>
        </div>
        <div>
          <h1 className="font-bold text-[#3AB86C] font-sans mb-1">Additional Info</h1>
          <div className="bg-gradient-to-r from-[#969595] to-[#dbfde8] py-[0.5px]"></div>
          <div>
            <div>
              <h1 className="font-bold text-[#3AB86C] font-sans mb-1">Review</h1>
              <div className="md:flex md:flex-row flex flex-col gap-5 ">
                <input type="text" placeholder='Max Torque (nm@rpm)' className='p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
                <input type="file" className="file-input file-input-bordered file-input-success w-full max-w-xs" required />
                <input type="text" placeholder='Fuel Tank Capacity' className='p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
              </div>
            </div>
            <div>
              <h1 className="font-bold text-[#3AB86C] font-sans mb-1">Interior</h1>
              <div className="md:flex md:flex-row flex flex-col gap-5 ">
                <input type="text" placeholder='Max Torque (nm@rpm)' className='p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
                <input type="file" className="file-input file-input-bordered file-input-success w-full max-w-xs" required />
                <input type="text" placeholder='Fuel Tank Capacity' className='p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
              </div>
            </div>
            <div>
              <h1 className="font-bold text-[#3AB86C] font-sans mb-1">Safety</h1>
              <div className="md:flex md:flex-row flex flex-col gap-5 ">
                <input type="text" placeholder='Max Torque (nm@rpm)' className='p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
                <input type="file" className="file-input file-input-bordered file-input-success w-full max-w-xs" required />
                <input type="text" placeholder='Fuel Tank Capacity' className='p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
              </div>
            </div>
            <div>
              <h1 className="font-bold text-[#3AB86C] font-sans mb-1">Performance</h1>
              <div className="md:flex md:flex-row flex flex-col gap-5 ">
                <input type="text" placeholder='Max Torque (nm@rpm)' className='p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
                <input type="file" className="file-input file-input-bordered file-input-success w-full max-w-xs" required />
                <input type="text" placeholder='Fuel Tank Capacity' className='p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
              </div>
            </div>
            <div>
              <h1 className="font-bold text-[#3AB86C] font-sans mb-1">Ride and Handling</h1>
              <div className="md:flex md:flex-row flex flex-col gap-5 ">
                <input type="text" placeholder='Max Torque (nm@rpm)' className='p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
                <input type="file" className="file-input file-input-bordered file-input-success w-full max-w-xs" required />
                <input type="text" placeholder='Fuel Tank Capacity' className='p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
              </div>
            </div>
            <div>
              <h1 className="font-bold text-[#3AB86C] font-sans mb-1">Verdict</h1>
              <div className="md:flex md:flex-row flex flex-col gap-5 ">
                <input type="text" placeholder='Max Torque (nm@rpm)' className='p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
                <input type="file" className="file-input file-input-bordered file-input-success w-full max-w-xs" required />
                <input type="text" placeholder='Fuel Tank Capacity' className='p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
              </div>
            </div>
          </div>
        </div>
        <input type="text" placeholder='email' className='p-[10px] bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
        <div className="relative md:mb-6" data-te-input-wrapper-init>
          <input type="text" placeholder='' className='p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold peer block focus:border-green-500 outline-none  placeholder:text-green-500 active:border-green-600' required />
          <label htmlFor="" className="pointer-events-none absolute left-3 top-1 mb-0 max-w-[90%] origin-[0_0]  pt-[0.37rem] leading-[1.6] font-bold  transition-all duration-200 ease-out peer-focus:-translate-y-[1.7rem] peer-focus:scale-[0.8] dark:text-green-500 dark:peer-focus:text-green-500">Max Torque (nm@rpm)</label>
          {/* <input
            type="text"
            className="peer block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] text-black outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-green-500 dark:placeholder:text-green-500 [&:not  ([data-te-input-placeholder-active])]:placeholder:opacity-0"
            
            placeholder="Email address" />
          <label
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-neutral-200 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-green-500 dark:peer-focus:text-green-500"
          >Email address
          </label> */}
        </div>
        <input
          type="text"
          placeholder="password"
          className="p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold focus:border-green-500 outline-none"
          required
        />
        <button className='btn text-[#3AB86C] font-bold'>Add New Car</button>
      </form>
    </div>
  </div>;
};

export default AddNewCar;
