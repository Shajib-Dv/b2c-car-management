/** @format */

import { useState } from "react";
import CustomInput from "../../../../../Shared/components/CustomInput";
import CustomInput2 from "../../../../../Shared/components/CustomInput2";

const AddNewCar = () => {
  // const [isFocused, setIsFocused] = useState(false);
  // const [inputValue, setInputValue] = useState('');

  // const handleInputChange = (e) => {
  //   setInputValue(e.target.value);
  // };

  // const toggleFocus = () => {
  //   setIsFocused(!isFocused);
  // };
  const [inputValue, setInputValue] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

  };
  console.log(inputValue);
  return (
    <div className="pt-10 w-full">
      <h1 className="mb-5 font-bold text-xl text-[#3AB86C] font-sans">
        Add New Car
      </h1>
      <div className="pb-10">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-full text-green-400"
        >
          <div>
            <h1 className="font-bold text-[#3AB86C] font-sans mb-1">
              Basic Info
            </h1>
            <div className="md:flex md:flex-row flex flex-col gap-5 mb-5">
              <input
                type="text"
                placeholder="Car name"
                className="p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold "
                required
              />
              <input
                type="text"
                placeholder="Price"
                className="p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold "
                required
              />
            </div>
            <input
              type="text"
              placeholder="Locations"
              className="p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold "
              required
            />
          </div>
          <div>
            <h1 className="font-bold text-[#3AB86C] font-sans mb-1">
              Key Specifications
            </h1>
            <div className="md:flex md:flex-row flex flex-col gap-5 mb-5">
              <input
                type="text"
                placeholder="Mileage"
                className="p-[10px] md:w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold "
                required
              />
              <input
                type="text"
                placeholder="Engine"
                className="p-[10px] md:w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold "
                required
              />
              <input
                type="text"
                placeholder="BHP"
                className="p-[10px] md:w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold "
                required
              />
              <input
                type="text"
                placeholder="Transmission"
                className="p-[10px] md:w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold "
                required
              />
            </div>
            <div className="md:flex md:flex-row flex flex-col gap-5 mb-5">
              <input
                type="text"
                placeholder="Seats"
                className="p-[10px] md:w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold "
                required
              />
              <input
                type="text"
                placeholder="Boot Space"
                className="p-[10px] md:w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold "
                required
              />
              <input
                type="text"
                placeholder="Aribags"
                className="p-[10px] md:w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold "
                required
              />
              <input
                type="text"
                placeholder="Number of Cylinder"
                className="p-[10px] md:w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold "
                required
              />
            </div>
            <div className="md:flex md:flex-row flex flex-col gap-5">
              <input
                type="text"
                placeholder="Emission Norms"
                className="p-[10px] md:w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold "
                required
              />
              <input
                type="text"
                placeholder="Wheel Drive"
                className="p-[10px] md:w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold "
                required
              />
              <input
                type="text"
                placeholder="Wheel "
                className="p-[10px] md:w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold "
                required
              />
            </div>
          </div>
          <div>
            <h1 className="font-bold text-[#3AB86C] font-sans mb-1">EMI</h1>
            <div className="md:flex md:flex-row flex flex-col gap-5 ">
              <input
                type="text"
                placeholder="Down Payment"
                className="p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold "
                required
              />
              <input
                type="text"
                placeholder="Bank Interest Rate"
                className="p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold "
                required
              />
            </div>
          </div>
          <div>
            <h1 className="font-bold text-[#3AB86C] font-sans mb-1">
              Specification
            </h1>
            <div className="md:flex md:flex-row flex flex-col gap-5 mb-5">
              <input
                type="text"
                placeholder="Spacious interior"
                className="p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold "
                required
              />
              <input
                type="text"
                placeholder="Engine Displacement (cc)"
                className="p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold "
                required
              />
            </div>
            <div className="md:flex md:flex-row flex flex-col gap-5 mb-5">
              <input
                type="text"
                placeholder="Max Power (bhp@rpm)"
                className="p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold "
                required
              />
              <input
                type="text"
                placeholder="Seating Capacity"
                className="p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold "
                required
              />
            </div>
            <div className="md:flex md:flex-row flex flex-col gap-5 mb-5">
              <input
                type="text"
                placeholder="Boot Space (Litres)"
                className="p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold "
                required
              />
              <input
                type="text"
                placeholder="Body Type"
                className="p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold "
                required
              />
            </div>
            <div className="md:flex md:flex-row flex flex-col gap-5 mb-5">
              <input
                type="text"
                placeholder="Fuel Type"
                className="p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold "
                required
              />
              <input
                type="text"
                placeholder="No. of cylinder"
                className="p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold "
                required
              />
            </div>
            <div className="md:flex md:flex-row flex flex-col gap-5 ">
              <input
                type="text"
                placeholder="Max Torque (nm@rpm)"
                className="p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold "
                required
              />
              <input
                type="text"
                placeholder="TransmissionType"
                className="p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold "
                required
              />
              <input
                type="text"
                placeholder="Fuel Tank Capacity"
                className="p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold "
                required
              />
            </div>
          </div>
          <div>
            <h1 className="font-bold text-[#3AB86C] font-sans mb-1">
              Additional Info
            </h1>
            <div className="bg-gradient-to-r from-[#969595] to-[#dbfde8] py-[0.5px]"></div>
            <div>
              <div>
                <h1 className="font-bold text-[#3AB86C] font-sans mb-1">
                  Review
                </h1>
                <div className="md:flex md:flex-row flex flex-col gap-5 ">
                  <input
                    type="text"
                    placeholder="Max Torque (nm@rpm)"
                    className="p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold "
                    required
                  />
                  <input
                    type="file"
                    className="file-input file-input-bordered file-input-success w-full max-w-xs"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Fuel Tank Capacity"
                    className="p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold "
                    required
                  />
                </div>
              </div>
              <div>
                <h1 className="font-bold text-[#3AB86C] font-sans mb-1">
                  Interior
                </h1>
                <div className="md:flex md:flex-row flex flex-col gap-5 ">
                  <input
                    type="text"
                    placeholder="Max Torque (nm@rpm)"
                    className="p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold "
                    required
                  />
                  <input
                    type="file"
                    className="file-input file-input-bordered file-input-success w-full max-w-xs"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Fuel Tank Capacity"
                    className="p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold "
                    required
                  />
                </div>
              </div>
              <div>
                <h1 className="font-bold text-[#3AB86C] font-sans mb-1">
                  Safety
                </h1>
                <div className="md:flex md:flex-row flex flex-col gap-5 ">
                  <input
                    type="text"
                    placeholder="Max Torque (nm@rpm)"
                    className="p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold "
                    required
                  />
                  <input
                    type="file"
                    className="file-input file-input-bordered file-input-success w-full max-w-xs"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Fuel Tank Capacity"
                    className="p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold "
                    required
                  />
                </div>
              </div>
              <div>
                <h1 className="font-bold text-[#3AB86C] font-sans mb-1">
                  Performance
                </h1>
                <div className="md:flex md:flex-row flex flex-col gap-5 ">
                  <input
                    type="text"
                    placeholder="Max Torque (nm@rpm)"
                    className="p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold "
                    required
                  />
                  <input
                    type="file"
                    className="file-input file-input-bordered file-input-success w-full max-w-xs"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Fuel Tank Capacity"
                    className="p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold "
                    required
                  />
                </div>
              </div>
              <div>
                <h1 className="font-bold text-[#3AB86C] font-sans mb-1">
                  Ride and Handling
                </h1>
                <div className="md:flex md:flex-row flex flex-col gap-5 ">
                  <input
                    type="text"
                    placeholder="Max Torque (nm@rpm)"
                    className="p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold "
                    required
                  />
                  <input
                    type="file"
                    className="file-input file-input-bordered file-input-success w-full max-w-xs"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Fuel Tank Capacity"
                    className="p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold "
                    required
                  />
                </div>
              </div>
              <div>
                <h1 className="font-bold text-[#3AB86C] font-sans py-3">
                  Verdict
                </h1>
                <div className="md:flex md:flex-row flex flex-col gap-5 ">
                  <div
                    className="relative md:mb-6 w-full"
                    data-te-input-wrapper-init
                  >
                    <input
                      type="text"
                      placeholder=""
                      className="inputCustom peer"
                      required
                    />
                    <label htmlFor="" className="labelCustom">
                      Max Torque (nm@rpm)
                    </label>
                  </div>
                  <input
                    type="file"
                    className="file-input file-input-bordered file-input-success w-full max-w-xs"
                    required
                  />
                  <div
                    className="relative md:mb-6 w-full"
                    data-te-input-wrapper-init
                  >
                    <input
                      type="text"
                      placeholder=""
                      className="inputCustom peer"
                      required
                    />
                    <label htmlFor="" className="labelCustom">
                      Max Torque (nm@rpm)
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <input
            type="text"
            placeholder="email"
            className="p-[10px] bg-transparent rounded-md border-[1px] border-gray-600 font-semibold "
            required
          />
          <div className="relative md:mb-6" data-te-input-wrapper-init>
            <input
              type="text"
              placeholder=""
              className="inputCustom peer"
              required
            />
            <label htmlFor="" className="labelCustom">
              Max Torque (nm@rpm)
            </label>
          </div>

          <div>
            <CustomInput
              label="Max Torque (nm@rpm)"
              value={inputValue?.maxTorque}
              onChange={(value) =>
                setInputValue({ ...inputValue, maxTorque: value })
              }
            />

            <CustomInput
              label="Min Torque (nm@rpm)"
              value={inputValue?.minTorque}
              onChange={(value) =>
                setInputValue({ ...inputValue, minTorque: value })
              }
            />

          </div>
          <div className="">
            <CustomInput
              type={`guu`}
              label="Min Torque (nm@rpm)"
              value={inputValue?.minTorque}
              onChange={(value) =>
                setInputValue({ ...inputValue, minTorque: value })
              }
            />
            <CustomInput
              type={`guu`}
              label="Min Torque (nm@rpm)"
              value={inputValue?.minTorque}
              onChange={(value) =>
                setInputValue({ ...inputValue, minTorque: value })
              }
            />
          </div>

          {/* <div>
            <CustomInput2 label="Max Torque (nm@rpm) 1" name="maxnm" />
            <CustomInput2 label="Min Torque (nm@rpm) " name="minnm" />
          </div> */}
          <input
            type="text"
            placeholder="password"
            className="p-[10px] w-full bg-transparent rounded-md border-[1px] border-gray-600 font-semibold focus:border-green-500 outline-none"
            required
          />
          <button className="btn text-[#3AB86C] font-bold">Add New Car</button>
        </form>
      </div>
    </div>
  );
};

export default AddNewCar;
