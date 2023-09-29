/** @format */

import { useState } from "react";
import CustomInput from "../../../../../Shared/components/CustomInput";
import { AiOutlineFileAdd, AiFillInfoCircle } from "react-icons/ai";
import {
  BsFillAwardFill,
  BsFiletypeKey,
  BsFillPiggyBankFill,
  BsCardChecklist,
} from "react-icons/bs";
import { FcInspection } from "react-icons/fc";
import { GoCodeReview } from "react-icons/go";
import { CgPerformance } from "react-icons/cg";
import { BiSolidAddToQueue } from "react-icons/bi";
import { PiSteeringWheelFill } from "react-icons/pi";
import { MdDesignServices, MdConveyorBelt } from "react-icons/md";

const AddNewCar = () => {
  const [renderNext, setRenderNext] = useState({});
  const [inputValue, setInputValue] = useState({});
  const [basicInfo, setBasicInfo] = useState({});
  const [keySpecifications, setKeySpecifications] = useState({});
  const [emi, setEmi] = useState({});
  const [specification, setSpecification] = useState({});
  const [additionalInfo, setAdditionalInfo] = useState({});

  const basicInfoLength = Object.keys(basicInfo || {}).length;
  const keySpecificationsLength = Object.keys(keySpecifications || {}).length;
  const emiLength = Object.keys(emi || {}).length;
  const specificationLength = Object.keys(specification || {}).length;
  const additionalInfoLength = Object.keys(additionalInfo || {}).length;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };
  return (
    <div className="pt-10 w-full">
      <h1 className="mb-5 font-bold text-xl text-[#004225] font-sans flex items-center gap-2 justify-center">
        <span>
          <AiOutlineFileAdd />
        </span>
        Add New Car
      </h1>
      <div className="pb-10">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full text-green-400"
        >
          {!renderNext?.basicInfo && (
            <>
              <div>
                <h1 className="font-bold text-[#618264] font-sans flex items-center gap-2">
                  <span>
                    <AiFillInfoCircle />
                  </span>
                  Basic Info
                </h1>
                <div className="mb-5 md:mb-0 md:flex md:flex-row flex flex-col gap-5 mt-5">
                  <CustomInput
                    label="Car name"
                    value={basicInfo?.carName}
                    onChange={(value) =>
                      setBasicInfo({ ...basicInfo, carName: value })
                    }
                  />
                  <CustomInput
                    label="Price"
                    value={basicInfo?.price}
                    onChange={(value) =>
                      setBasicInfo({ ...basicInfo, price: value })
                    }
                  />
                </div>
                <CustomInput
                  label="Locations"
                  value={basicInfo?.locations}
                  onChange={(value) =>
                    setBasicInfo({ ...basicInfo, locations: value })
                  }
                />
              </div>
              <button
                disabled={
                  basicInfoLength < 3 || Object.values(basicInfo).includes("")
                }
                onClick={() =>
                  setRenderNext({ ...renderNext, basicInfo: true })
                }
                className="btn-act md:w-32 w-full"
              >
                Next
              </button>
            </>
          )}
          {renderNext?.basicInfo && (
            <>
              <div>
                <h1 className="font-bold text-[#618264] font-sans mt-5 md:mt-0 flex items-center gap-2">
                  <span>
                    <BsFiletypeKey />
                  </span>
                  Key Specifications
                </h1>
                <div className="md:flex md:flex-row flex flex-col gap-5 mt-5 mb-5 md:mb-0">
                  <CustomInput
                    label="Mileage"
                    value={keySpecifications?.mileage}
                    onChange={(value) =>
                      setKeySpecifications({
                        ...keySpecifications,
                        mileage: value,
                      })
                    }
                  />
                  <CustomInput
                    label="Engine"
                    value={keySpecifications?.Engine}
                    onChange={(value) =>
                      setKeySpecifications({
                        ...keySpecifications,
                        Engine: value,
                      })
                    }
                  />
                  <CustomInput
                    label="BHP"
                    value={keySpecifications?.BHP}
                    onChange={(value) =>
                      setKeySpecifications({ ...keySpecifications, BHP: value })
                    }
                  />
                  <CustomInput
                    label="Transmission"
                    value={keySpecifications?.Transmission}
                    onChange={(value) =>
                      setKeySpecifications({
                        ...keySpecifications,
                        Transmission: value,
                      })
                    }
                  />
                </div>
                <div className="md:flex md:flex-row flex flex-col gap-5 mb-5 md:mb-0">
                  <CustomInput
                    label="Seats"
                    value={keySpecifications?.Seats}
                    onChange={(value) =>
                      setKeySpecifications({
                        ...keySpecifications,
                        Seats: value,
                      })
                    }
                  />
                  <CustomInput
                    label="Boot Space"
                    value={keySpecifications?.BootSpace}
                    onChange={(value) =>
                      setKeySpecifications({
                        ...keySpecifications,
                        BootSpace: value,
                      })
                    }
                  />
                  <CustomInput
                    label="Aribags"
                    value={keySpecifications?.Aribags}
                    onChange={(value) =>
                      setKeySpecifications({
                        ...keySpecifications,
                        Aribags: value,
                      })
                    }
                  />
                  <CustomInput
                    label="Number Of Cylinder"
                    value={keySpecifications?.NumberOfCylinder}
                    onChange={(value) =>
                      setKeySpecifications({
                        ...keySpecifications,
                        NumberOfCylinder: value,
                      })
                    }
                  />
                </div>
                <div className="md:flex md:flex-row flex flex-col gap-5">
                  <CustomInput
                    label="Emission Norms"
                    value={keySpecifications?.EmissionNorms}
                    onChange={(value) =>
                      setKeySpecifications({
                        ...keySpecifications,
                        EmissionNorms: value,
                      })
                    }
                  />
                  <CustomInput
                    label="Wheel Drive"
                    value={keySpecifications?.WheelDrive}
                    onChange={(value) =>
                      setKeySpecifications({
                        ...keySpecifications,
                        WheelDrive: value,
                      })
                    }
                  />
                  <CustomInput
                    label="Wheel"
                    value={keySpecifications?.Wheel}
                    onChange={(value) =>
                      setKeySpecifications({
                        ...keySpecifications,
                        Wheel: value,
                      })
                    }
                  />
                </div>
              </div>
              <button
                disabled={
                  basicInfoLength < 11 ||
                  Object.values(keySpecifications).includes("")
                }
                onClick={() =>
                  setRenderNext({ ...renderNext, keySpecifications: true })
                }
                className="btn-act md:w-32 w-full"
              >
                Next
              </button>
            </>
          )}
          {
            <div>
              <h1 className="font-bold text-[#618264] font-sans flex items-center gap-2 mt-5 md:mt-0">
                {" "}
                <span>
                  <BsFillPiggyBankFill />
                </span>
                EMI
              </h1>
              <div className="md:flex md:flex-row flex flex-col gap-5 mt-5">
                <CustomInput
                  label="Down Payment"
                  value={inputValue?.DownPayment}
                  onChange={(value) =>
                    setInputValue({ ...inputValue, DownPayment: value })
                  }
                />
                <CustomInput
                  label="Bank Interest Rate"
                  value={inputValue?.BankInterestRate}
                  onChange={(value) =>
                    setInputValue({ ...inputValue, BankInterestRate: value })
                  }
                />
              </div>
            </div>
          }
          {
            <div>
              <h1 className="font-bold text-[#618264] font-sans flex items-center gap-2 mt-5 md:mt-0">
                <span>
                  <FcInspection />
                </span>
                Specification
              </h1>
              <div className="md:flex md:flex-row flex flex-col gap-5 mt-5 mb-5 md:mb-0">
                <CustomInput
                  label="Spacious Interior"
                  value={inputValue?.SpaciousInterior}
                  onChange={(value) =>
                    setInputValue({ ...inputValue, SpaciousInterior: value })
                  }
                />
                <CustomInput
                  label="Engine Displacement (cc)"
                  value={inputValue?.EngineDisplacement}
                  onChange={(value) =>
                    setInputValue({ ...inputValue, EngineDisplacement: value })
                  }
                />
              </div>
              <div className="md:flex md:flex-row flex flex-col gap-5 mb-5 md:mb-0">
                <CustomInput
                  label="Max Power (bhp@rpm)"
                  value={inputValue?.MaxPower}
                  onChange={(value) =>
                    setInputValue({ ...inputValue, MaxPower: value })
                  }
                />
                <CustomInput
                  label="Seating Capacity"
                  value={inputValue?.SeatingCapacity}
                  onChange={(value) =>
                    setInputValue({ ...inputValue, SeatingCapacity: value })
                  }
                />
              </div>
              <div className="md:flex md:flex-row flex flex-col gap-5 mb-5 md:mb-0">
                <CustomInput
                  label="Boot Space (Litres)"
                  value={inputValue?.BootSpace}
                  onChange={(value) =>
                    setInputValue({ ...inputValue, BootSpace: value })
                  }
                />
                <CustomInput
                  label="Body Type"
                  value={inputValue?.BodyType}
                  onChange={(value) =>
                    setInputValue({ ...inputValue, BodyType: value })
                  }
                />
              </div>
              <div className="md:flex md:flex-row flex flex-col gap-5 mb-5 md:mb-0">
                <CustomInput
                  label="Fuel Type"
                  value={inputValue?.FuelType}
                  onChange={(value) =>
                    setInputValue({ ...inputValue, FuelType: value })
                  }
                />
                <CustomInput
                  label="No. of cylinder"
                  value={inputValue?.NoOfCylinder}
                  onChange={(value) =>
                    setInputValue({ ...inputValue, NoOfCylinder: value })
                  }
                />
              </div>
              <div className="md:flex md:flex-row flex flex-col gap-5 ">
                <CustomInput
                  label="Max Torque (nm@rpm)"
                  value={inputValue?.MaxTorque}
                  onChange={(value) =>
                    setInputValue({ ...inputValue, MaxTorque: value })
                  }
                />
                <CustomInput
                  label="Transmission Type"
                  value={inputValue?.TransmissionType}
                  onChange={(value) =>
                    setInputValue({ ...inputValue, TransmissionType: value })
                  }
                />
                <CustomInput
                  label="Fuel Tank Capacity"
                  value={inputValue?.FuelTankCapacity}
                  onChange={(value) =>
                    setInputValue({ ...inputValue, FuelTankCapacity: value })
                  }
                />
                <CustomInput
                  label="Wheel"
                  value={inputValue?.Wheel}
                  onChange={(value) =>
                    setInputValue({ ...inputValue, Wheel: value })
                  }
                />
              </div>
            </div>
          }
          {
            <div>
              <h1 className="font-bold text-[#618264] font-sans justify-center flex items-center gap-2 mt-5 md:mt-0">
                <span>
                  <BsCardChecklist />
                </span>
                Additional Info
              </h1>
              <div className="bg-gradient-to-r from-[#969595] to-[#dbfde8] py-[0.5px]"></div>
              <div>
                <div>
                  <h1 className="font-bold text-[#618264] font-sans flex items-center gap-2">
                    <span>
                      <GoCodeReview />
                    </span>
                    Review
                  </h1>
                  <div className="md:flex md:flex-row flex flex-col gap-5 mt-3 md:-mb-5">
                    <CustomInput
                      label="ReviewText1"
                      value={inputValue?.ReviewText1}
                      onChange={(value) =>
                        setInputValue({ ...inputValue, ReviewText1: value })
                      }
                    />
                    <input
                      type="file"
                      className="file-input file-input-bordered file-input-success w-full max-w-xs"
                      required
                    />
                    <CustomInput
                      label="ReviewText2"
                      value={inputValue?.ReviewText2}
                      onChange={(value) =>
                        setInputValue({ ...inputValue, ReviewText2: value })
                      }
                    />
                  </div>
                </div>
                <div>
                  <h1 className="font-bold text-[#618264] font-sans flex items-center gap-2">
                    <span>
                      <MdDesignServices />
                    </span>
                    Interior
                  </h1>
                  <div className="md:flex md:flex-row flex flex-col gap-5 mt-3 md:-mb-5">
                    <CustomInput
                      label="Interior Text 1"
                      value={inputValue?.InteriorText1}
                      onChange={(value) =>
                        setInputValue({ ...inputValue, InteriorText1: value })
                      }
                    />
                    <input
                      type="file"
                      className="file-input file-input-bordered file-input-success w-full max-w-xs"
                      required
                    />
                    <CustomInput
                      label="Interior Text 2"
                      value={inputValue?.InteriorText2}
                      onChange={(value) =>
                        setInputValue({ ...inputValue, InteriorText2: value })
                      }
                    />
                  </div>
                </div>
                <div>
                  <h1 className="font-bold text-[#618264] font-sans flex items-center gap-2">
                    <span>
                      <MdConveyorBelt />
                    </span>
                    Safety
                  </h1>
                  <div className="md:flex md:flex-row flex flex-col gap-5 mt-3 md:-mb-5">
                    <CustomInput
                      label="Safety Text1"
                      value={inputValue?.SafetyText1}
                      onChange={(value) =>
                        setInputValue({ ...inputValue, SafetyText1: value })
                      }
                    />
                    <input
                      type="file"
                      className="file-input file-input-bordered file-input-success w-full max-w-xs"
                      required
                    />
                    <CustomInput
                      label="Safety Text2"
                      value={inputValue?.SafetyText2}
                      onChange={(value) =>
                        setInputValue({ ...inputValue, SafetyText2: value })
                      }
                    />
                  </div>
                </div>
                <div>
                  <h1 className="font-bold text-[#618264] font-sans flex items-center gap-2">
                    <span>
                      <CgPerformance />
                    </span>
                    Performance
                  </h1>
                  <div className="md:flex md:flex-row flex flex-col gap-5 mt-3 md:-mb-5">
                    <CustomInput
                      label="PerformanceText1"
                      value={inputValue?.PerformanceText1}
                      onChange={(value) =>
                        setInputValue({
                          ...inputValue,
                          PerformanceText1: value,
                        })
                      }
                    />
                    <input
                      type="file"
                      className="file-input file-input-bordered file-input-success w-full max-w-xs"
                      required
                    />
                    <CustomInput
                      label="Performance Text2"
                      value={inputValue?.PerformanceText2}
                      onChange={(value) =>
                        setInputValue({
                          ...inputValue,
                          PerformanceText2: value,
                        })
                      }
                    />
                  </div>
                </div>
                <div>
                  <h1 className="font-bold text-[#618264] font-sans flex items-center gap-2">
                    <span>
                      <PiSteeringWheelFill />
                    </span>
                    Ride and Handling
                  </h1>
                  <div className="md:flex md:flex-row flex flex-col gap-5 mt-3 md:-mb-5">
                    <CustomInput
                      label="Ride and Handling Text 1"
                      value={inputValue?.RideAndHandlingText1}
                      onChange={(value) =>
                        setInputValue({
                          ...inputValue,
                          RideAndHandlingText1: value,
                        })
                      }
                    />
                    <input
                      type="file"
                      className="file-input file-input-bordered file-input-success w-full max-w-xs"
                      required
                    />
                    <CustomInput
                      label="Ride and Handling Text 2"
                      value={inputValue?.RideAndHandlingText2}
                      onChange={(value) =>
                        setInputValue({
                          ...inputValue,
                          RideAndHandlingText2: value,
                        })
                      }
                    />
                  </div>
                </div>
                <div>
                  <h1 className="font-bold text-[#618264] font-sans flex items-center gap-2">
                    <span>
                      <BsFillAwardFill />
                    </span>
                    Verdict
                  </h1>
                  <div className="md:flex md:flex-row flex flex-col gap-5 mt-3 mb-5">
                    <CustomInput
                      label="Verdict Text 1"
                      value={inputValue?.VerdictText1}
                      onChange={(value) =>
                        setInputValue({ ...inputValue, VerdictText1: value })
                      }
                    />
                    <input
                      type="file"
                      className="file-input file-input-bordered file-input-success w-full max-w-xs"
                      required
                    />
                    <CustomInput
                      label="Verdict Text 2"
                      value={inputValue?.VerdictText2}
                      onChange={(value) =>
                        setInputValue({ ...inputValue, VerdictText2: value })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          }
          <button className="btn text-[#618264] font-bold flex gap-1">
            <span>
              <BiSolidAddToQueue />
            </span>
            Add New Car
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewCar;
