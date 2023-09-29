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
import {
  MdDesignServices,
  MdConveyorBelt,
  MdArrowCircleLeft,
} from "react-icons/md";

const AddNewCar = () => {
  const [renderNext, setRenderNext] = useState({});
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

    const storableData = {
      basicInfo,
      keySpecifications,
      emi,
      specification,
      additionalInfo,
    };

    console.log(storableData);
  };

  const handleNextRender = (element) => {
    setRenderNext({ ...renderNext, [element]: true });
  };

  const handlePreviewRender = (element) => {
    setRenderNext({ ...renderNext, [element]: false });
  };
  return (
    <>
      <h1 className="pt-10 font-bold text-xl text-[#004225] font-sans flex items-center gap-2 justify-center">
        <span>
          <AiOutlineFileAdd />
        </span>
        Add New Car
      </h1>
      <div className="pt-10 w-full h-full center-itm justify-center">
        <div className="w-full">
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
                  onClick={() => handleNextRender("basicInfo")}
                  className="btn-act md:w-32 w-full"
                >
                  Next
                </button>
              </>
            )}
            {renderNext?.basicInfo && !renderNext?.keySpecifications && (
              <>
                <div>
                  <div className="center-itm justify-between">
                    <h1 className="font-bold text-[#618264] font-sans mt-5 md:mt-0 flex items-center gap-2">
                      <span>
                        <BsFiletypeKey />
                      </span>
                      Key Specifications
                    </h1>
                    <button onClick={() => handlePreviewRender("basicInfo")}>
                      <MdArrowCircleLeft className="text-3xl" />
                    </button>
                  </div>
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
                        setKeySpecifications({
                          ...keySpecifications,
                          BHP: value,
                        })
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
                    keySpecificationsLength < 11 ||
                    Object.values(keySpecifications).includes("")
                  }
                  onClick={() => handleNextRender("keySpecifications")}
                  className="btn-act md:w-32 w-full"
                >
                  Next
                </button>
              </>
            )}
            {renderNext?.keySpecifications && !renderNext?.emi && (
              <>
                <div>
                  <div className="center-itm justify-between">
                    <h1 className="font-bold text-[#618264] font-sans flex items-center gap-2 mt-5 md:mt-0">
                      {" "}
                      <span>
                        <BsFillPiggyBankFill />
                      </span>
                      EMI
                    </h1>

                    <button
                      onClick={() => handlePreviewRender("keySpecifications")}
                    >
                      <MdArrowCircleLeft className="text-3xl" />
                    </button>
                  </div>
                  <div className="md:flex md:flex-row flex flex-col gap-5 mt-5">
                    <CustomInput
                      label="Down Payment"
                      value={emi?.DownPayment}
                      onChange={(value) =>
                        setEmi({ ...emi, DownPayment: value })
                      }
                    />
                    <CustomInput
                      label="Bank Interest Rate"
                      value={emi?.BankInterestRate}
                      onChange={(value) =>
                        setEmi({ ...emi, BankInterestRate: value })
                      }
                    />
                  </div>
                </div>
                <button
                  disabled={emiLength < 2 || Object.values(emi).includes("")}
                  onClick={() => handleNextRender("emi")}
                  className="btn-act md:w-32 w-full"
                >
                  Next
                </button>
              </>
            )}
            {renderNext?.emi && !renderNext?.specification && (
              <>
                <div>
                  <div className="center-itm justify-between">
                    <h1 className="font-bold text-[#618264] font-sans flex items-center gap-2 mt-5 md:mt-0">
                      <span>
                        <FcInspection />
                      </span>
                      Specification
                    </h1>

                    <button onClick={() => handlePreviewRender("emi")}>
                      <MdArrowCircleLeft className="text-3xl" />
                    </button>
                  </div>
                  <div className="md:flex md:flex-row flex flex-col gap-5 mt-5 mb-5 md:mb-0">
                    <CustomInput
                      label="Spacious Interior"
                      value={specification?.SpaciousInterior}
                      onChange={(value) =>
                        setSpecification({
                          ...specification,
                          SpaciousInterior: value,
                        })
                      }
                    />
                    <CustomInput
                      label="Engine Displacement (cc)"
                      value={specification?.EngineDisplacement}
                      onChange={(value) =>
                        setSpecification({
                          ...specification,
                          EngineDisplacement: value,
                        })
                      }
                    />
                  </div>
                  <div className="md:flex md:flex-row flex flex-col gap-5 mb-5 md:mb-0">
                    <CustomInput
                      label="Max Power (bhp@rpm)"
                      value={specification?.MaxPower}
                      onChange={(value) =>
                        setSpecification({ ...specification, MaxPower: value })
                      }
                    />
                    <CustomInput
                      label="Seating Capacity"
                      value={specification?.SeatingCapacity}
                      onChange={(value) =>
                        setSpecification({
                          ...specification,
                          SeatingCapacity: value,
                        })
                      }
                    />
                  </div>
                  <div className="md:flex md:flex-row flex flex-col gap-5 mb-5 md:mb-0">
                    <CustomInput
                      label="Boot Space (Litres)"
                      value={specification?.BootSpace}
                      onChange={(value) =>
                        setSpecification({ ...specification, BootSpace: value })
                      }
                    />
                    <CustomInput
                      label="Body Type"
                      value={specification?.BodyType}
                      onChange={(value) =>
                        setSpecification({ ...specification, BodyType: value })
                      }
                    />
                  </div>
                  <div className="md:flex md:flex-row flex flex-col gap-5 mb-5 md:mb-0">
                    <CustomInput
                      label="Fuel Type"
                      value={specification?.FuelType}
                      onChange={(value) =>
                        setSpecification({ ...specification, FuelType: value })
                      }
                    />
                    <CustomInput
                      label="No. of cylinder"
                      value={specification?.NoOfCylinder}
                      onChange={(value) =>
                        setSpecification({
                          ...specification,
                          NoOfCylinder: value,
                        })
                      }
                    />
                  </div>
                  <div className="md:flex md:flex-row flex flex-col gap-5 ">
                    <CustomInput
                      label="Max Torque (nm@rpm)"
                      value={specification?.MaxTorque}
                      onChange={(value) =>
                        setSpecification({ ...specification, MaxTorque: value })
                      }
                    />
                    <CustomInput
                      label="Transmission Type"
                      value={specification?.TransmissionType}
                      onChange={(value) =>
                        setSpecification({
                          ...specification,
                          TransmissionType: value,
                        })
                      }
                    />
                    <CustomInput
                      label="Fuel Tank Capacity"
                      value={specification?.FuelTankCapacity}
                      onChange={(value) =>
                        setSpecification({
                          ...specification,
                          FuelTankCapacity: value,
                        })
                      }
                    />
                    <CustomInput
                      label="Wheel"
                      value={specification?.Wheel}
                      onChange={(value) =>
                        setSpecification({ ...specification, Wheel: value })
                      }
                    />
                  </div>
                </div>
                <button
                  disabled={
                    specificationLength < 12 ||
                    Object.values(specification).includes("")
                  }
                  onClick={() => handleNextRender("specification")}
                  className="btn-act md:w-32 w-full"
                >
                  Next
                </button>
              </>
            )}
            {renderNext?.specification && (
              <>
                <div>
                  <div className="center-itm justify-between">
                    <h1 className="font-bold text-[#618264] font-sans justify-center flex items-center gap-2 mt-5 md:mt-0">
                      <span>
                        <BsCardChecklist />
                      </span>
                      Additional Info
                    </h1>

                    <button
                      onClick={() => handlePreviewRender("specification")}
                    >
                      <MdArrowCircleLeft className="text-3xl" />
                    </button>
                  </div>
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
                          value={additionalInfo?.ReviewText1}
                          onChange={(value) =>
                            setAdditionalInfo({
                              ...additionalInfo,
                              ReviewText1: value,
                            })
                          }
                        />
                        <input
                          type="file"
                          className="file-input file-input-bordered file-input-success w-full max-w-xs"
                          required
                        />
                        <CustomInput
                          label="ReviewText2"
                          value={additionalInfo?.ReviewText2}
                          onChange={(value) =>
                            setAdditionalInfo({
                              ...additionalInfo,
                              ReviewText2: value,
                            })
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
                          value={additionalInfo?.InteriorText1}
                          onChange={(value) =>
                            setAdditionalInfo({
                              ...additionalInfo,
                              InteriorText1: value,
                            })
                          }
                        />
                        <input
                          type="file"
                          className="file-input file-input-bordered file-input-success w-full max-w-xs"
                          required
                        />
                        <CustomInput
                          label="Interior Text 2"
                          value={additionalInfo?.InteriorText2}
                          onChange={(value) =>
                            setAdditionalInfo({
                              ...additionalInfo,
                              InteriorText2: value,
                            })
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
                          value={additionalInfo?.SafetyText1}
                          onChange={(value) =>
                            setAdditionalInfo({
                              ...additionalInfo,
                              SafetyText1: value,
                            })
                          }
                        />
                        <input
                          type="file"
                          className="file-input file-input-bordered file-input-success w-full max-w-xs"
                          required
                        />
                        <CustomInput
                          label="Safety Text2"
                          value={additionalInfo?.SafetyText2}
                          onChange={(value) =>
                            setAdditionalInfo({
                              ...additionalInfo,
                              SafetyText2: value,
                            })
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
                          value={additionalInfo?.PerformanceText1}
                          onChange={(value) =>
                            setAdditionalInfo({
                              ...additionalInfo,
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
                          value={additionalInfo?.PerformanceText2}
                          onChange={(value) =>
                            setAdditionalInfo({
                              ...additionalInfo,
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
                          value={additionalInfo?.RideAndHandlingText1}
                          onChange={(value) =>
                            setAdditionalInfo({
                              ...additionalInfo,
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
                          value={additionalInfo?.RideAndHandlingText2}
                          onChange={(value) =>
                            setAdditionalInfo({
                              ...additionalInfo,
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
                          value={additionalInfo?.VerdictText1}
                          onChange={(value) =>
                            setAdditionalInfo({
                              ...additionalInfo,
                              VerdictText1: value,
                            })
                          }
                        />
                        <input
                          type="file"
                          className="file-input file-input-bordered file-input-success w-full max-w-xs"
                          required
                        />
                        <CustomInput
                          label="Verdict Text 2"
                          value={additionalInfo?.VerdictText2}
                          onChange={(value) =>
                            setAdditionalInfo({
                              ...additionalInfo,
                              VerdictText2: value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  disabled={
                    additionalInfoLength < 12 ||
                    Object.values(additionalInfo).includes("")
                  }
                  onClick={() => handleNextRender("additionalInfo")}
                  className="btn text-[#618264] font-bold flex gap-1 disabled:text-red-400"
                >
                  <span>
                    <BiSolidAddToQueue />
                  </span>
                  Add New Car
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNewCar;
