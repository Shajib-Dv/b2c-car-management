import { useState } from "react";

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
import { useContext } from "react";

import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";
import CustomInput from "../../../Shared/components/CustomInput";

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const UpdateCarData = ({ car, modal }) => {

  const {_id, basicInfo, keySpecifications, emi, specification, additionalInfo} = car

  const { user } = useContext(AuthContext);

  const [renderNext, setRenderNext] = useState({});
  const [basicInfos, setBasicInfo] = useState({});
  const [keySpecification, setKeySpecifications] = useState({});
  const [getEmi, setEmi] = useState({});
  const [specifications, setSpecification] = useState({});
  const [additionalInfos, setAdditionalInfo] = useState({});

  const basicInfoLength = Object.keys(basicInfo || {}).length;
  const keySpecificationsLength = Object.keys(keySpecifications || {}).length;
  const emiLength = Object.keys(emi || {}).length;
  const specificationLength = Object.keys(specification || {}).length;
  const additionalInfoLength = Object.keys(additionalInfo || {}).length;

  const handleNextRender = (element) => {
    setRenderNext({ ...renderNext, [element]: true });
  };

  const handlePreviewRender = (element) => {
    setRenderNext({ ...renderNext, [element]: false });
  };


  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const uploadImage = async (imageFile) => {
    const formData = new FormData();
    formData.append("image", imageFile);

    const res = await fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    });
    const imgResponse = await res.json();

    if (imgResponse.success) {
      return imgResponse.data.display_url;
    }
    return null;
  };
  

  const handleSubmit = async (e) => {
  
    const basicInfo = basicInfos;
    const keySpecifications = keySpecification
    const emi = getEmi
    const specification = specifications
    const additionalInfo = additionalInfos
    e.preventDefault();

    const form = e.target;
    const imageFiles = [
      form.querySelector('input[name="image"]').files[0],
      form.querySelector('input[name="image1"]').files[0],
      form.querySelector('input[name="image2"]').files[0],
      form.querySelector('input[name="image3"]').files[0],
      form.querySelector('input[name="image4"]').files[0],
      form.querySelector('input[name="image5"]').files[0],
    ];

    const imgURLs = await Promise.all(
      imageFiles.map(async (imageFile) => {
        if (imageFile) {
          return await uploadImage(imageFile);
        }
        return null;
      })
    );

    // const additional = {
    //   img: imgURLs[0],
    //   img1: imgURLs[1],
    //   img2: imgURLs[2],
    //   img3: imgURLs[3],
    //   img4: imgURLs[4],
    //   img5: imgURLs[5],
    // };
    

    const storableData = {
      // email: user?.email,
      basicInfo,
      keySpecifications,
      emi,
      specification,
      // images: imgURLs,
      additionalInfo,
      date: new Date(),
    };
    console.log(storableData)

    fetch(`http://localhost:3000/add_new_car/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(storableData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK!'
                    })
                }
            })
  };

  //console.log(car)
  return (
    <div className="pb-5">
      <div className='flex justify-between mb-5'>
        <div className="flex items-center gap-2">
          <img className="w-8 rounded-full" src="https://lordicon.com/icons/wired/flat/245-edit-document.gif" alt="" />
          <h1 className="font-bold">{car.basicInfo?.carName}</h1>
        </div>
        <button className="font-bold" onClick={modal}></button>
      </div>
      <>

        <div className=" w-full h-full center-itm justify-center">
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
                          setBasicInfo({ ...basicInfos, carName: value })
                        }
                      />
                      <CustomInput
                        label="Price"
                        value={basicInfo?.price}
                        onChange={(value) =>
                          setBasicInfo({ ...basicInfos, price: value })
                        }
                      />
                    </div>
                    <CustomInput
                      label="Locations"
                      value={basicInfo?.locations}
                      onChange={(value) =>
                        setBasicInfo({ ...basicInfos, locations: value })
                      }
                    />
                  </div>
                  <button
                    disabled={
                      basicInfoLength < 3 || Object.values(basicInfo).includes("")
                    }
                    onClick={() => handleNextRender("basicInfo")}
                    className="btn-act md:w-32 w-full md:mt-0 mt-4"
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
                            ...keySpecification,
                            mileage: value,
                          })
                        }
                      />
                      <CustomInput
                        label="Engine"
                        value={keySpecifications?.Engine}
                        onChange={(value) =>
                          setKeySpecifications({
                            ...keySpecification,
                            Engine: value,
                          })
                        }
                      />
                      <CustomInput
                        label="BHP"
                        value={keySpecifications?.BHP}
                        onChange={(value) =>
                          setKeySpecifications({
                            ...keySpecification,
                            BHP: value,
                          })
                        }
                      />
                      <CustomInput
                        label="Transmission"
                        value={keySpecifications?.Transmission}
                        onChange={(value) =>
                          setKeySpecifications({
                            ...keySpecification,
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
                            ...keySpecification,
                            Seats: value,
                          })
                        }
                      />
                      <CustomInput
                        label="Boot Space"
                        value={keySpecifications?.BootSpace}
                        onChange={(value) =>
                          setKeySpecifications({
                            ...keySpecification,
                            BootSpace: value,
                          })
                        }
                      />
                      <CustomInput
                        label="Aribags"
                        value={keySpecifications?.Aribags}
                        onChange={(value) =>
                          setKeySpecifications({
                            ...keySpecification,
                            Aribags: value,
                          })
                        }
                      />
                      <CustomInput
                        label="Number Of Cylinder"
                        value={keySpecifications?.NumberOfCylinder}
                        onChange={(value) =>
                          setKeySpecifications({
                            ...keySpecification,
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
                            ...keySpecification,
                            EmissionNorms: value,
                          })
                        }
                      />
                      <CustomInput
                        label="Wheel Drive"
                        value={keySpecifications?.WheelDrive}
                        onChange={(value) =>
                          setKeySpecifications({
                            ...keySpecification,
                            WheelDrive: value,
                          })
                        }
                      />
                      <CustomInput
                        label="Wheel"
                        value={keySpecifications?.Wheel}
                        onChange={(value) =>
                          setKeySpecifications({
                            ...keySpecification,
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
                    className="btn-act md:w-32 w-full md:mt-0 mt-4"
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
                          setEmi({ ...getEmi, DownPayment: value })
                        }
                      />
                      <CustomInput
                        label="Bank Interest Rate"
                        value={emi?.BankInterestRate}
                        onChange={(value) =>
                          setEmi({ ...getEmi, BankInterestRate: value })
                        }
                      />
                    </div>
                  </div>
                  <button
                    disabled={emiLength < 2 || Object.values(emi).includes("")}
                    onClick={() => handleNextRender("emi")}
                    className="btn-act md:w-32 w-full md:mt-0 mt-4"
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
                            ...specifications,
                            SpaciousInterior: value,
                          })
                        }
                      />
                      <CustomInput
                        label="Engine Displacement (cc)"
                        value={specification?.EngineDisplacement}
                        onChange={(value) =>
                          setSpecification({
                            ...specifications,
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
                          setSpecification({ ...specifications, MaxPower: value })
                        }
                      />
                      <CustomInput
                        label="Seating Capacity"
                        value={specification?.SeatingCapacity}
                        onChange={(value) =>
                          setSpecification({
                            ...specifications,
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
                          setSpecification({ ...specifications, BootSpace: value })
                        }
                      />
                      <CustomInput
                        label="Body Type"
                        value={specification?.BodyType}
                        onChange={(value) =>
                          setSpecification({ ...specifications, BodyType: value })
                        }
                      />
                    </div>
                    <div className="md:flex md:flex-row flex flex-col gap-5 mb-5 md:mb-0">
                      <CustomInput
                        label="Fuel Type"
                        value={specification?.FuelType}
                        onChange={(value) =>
                          setSpecification({ ...specifications, FuelType: value })
                        }
                      />
                      <CustomInput
                        label="No. of cylinder"
                        value={specification?.NoOfCylinder}
                        onChange={(value) =>
                          setSpecification({
                            ...specifications,
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
                          setSpecification({ ...specifications, MaxTorque: value })
                        }
                      />
                      <CustomInput
                        label="Transmission Type"
                        value={specification?.TransmissionType}
                        onChange={(value) =>
                          setSpecification({
                            ...specifications,
                            TransmissionType: value,
                          })
                        }
                      />
                      <CustomInput
                        label="Fuel Tank Capacity"
                        value={specification?.FuelTankCapacity}
                        onChange={(value) =>
                          setSpecification({
                            ...specifications,
                            FuelTankCapacity: value,
                          })
                        }
                      />
                      <CustomInput
                        label="Wheel"
                        value={specification?.Wheel}
                        onChange={(value) =>
                          setSpecification({ ...specifications, Wheel: value })
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
                    className="btn-act md:w-32 w-full md:mt-0 mt-4"
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
                                ...additionalInfos,
                                ReviewText1: value,
                              })
                            }
                          />
                          <input
                            type="file"
                            className="file-input file-input-bordered file-input-success w-full max-w-xs"
                            name="image"
                            required={false}
                          />
                          <CustomInput
                            label="ReviewText2"
                            value={additionalInfo?.ReviewText2}
                            onChange={(value) =>
                              setAdditionalInfo({
                                ...additionalInfos,
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
                                ...additionalInfos,
                                InteriorText1: value,
                              })
                            }
                          />
                          <input
                            type="file"
                            className="file-input file-input-bordered file-input-success w-full max-w-xs"
                            required={false}
                            name="image1"
                          />
                          <CustomInput
                            label="Interior Text 2"
                            value={additionalInfo?.InteriorText2}
                            onChange={(value) =>
                              setAdditionalInfo({
                                ...additionalInfos,
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
                                ...additionalInfos,
                                SafetyText1: value,
                              })
                            }
                          />
                          <input
                            type="file"
                            className="file-input file-input-bordered file-input-success w-full max-w-xs"
                            required={false}
                            name="image2"
                          />
                          <CustomInput
                            label="Safety Text2"
                            value={additionalInfo?.SafetyText2}
                            onChange={(value) =>
                              setAdditionalInfo({
                                ...additionalInfos,
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
                                ...additionalInfos,
                                PerformanceText1: value,
                              })
                            }
                          />
                          <input
                            type="file"
                            className="file-input file-input-bordered file-input-success w-full max-w-xs"
                            required={false}
                            name="image3"
                          />
                          <CustomInput
                            label="Performance Text2"
                            value={additionalInfo?.PerformanceText2}
                            onChange={(value) =>
                              setAdditionalInfo({
                                ...additionalInfos,
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
                                ...additionalInfos,
                                RideAndHandlingText1: value,
                              })
                            }
                          />
                          <input
                            type="file"
                            className="file-input file-input-bordered file-input-success w-full max-w-xs"
                            required={false}
                            name="image4"
                          />
                          <CustomInput
                            label="Ride and Handling Text 2"
                            value={additionalInfo?.RideAndHandlingText2}
                            onChange={(value) =>
                              setAdditionalInfo({
                                ...additionalInfos,
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
                                ...additionalInfos,
                                VerdictText1: value,
                              })
                            }
                          />
                          <input
                            type="file"
                            className="file-input file-input-bordered file-input-success w-full max-w-xs"
                            required={false}
                            name="image5"
                          />
                          <CustomInput
                            label="Verdict Text 2"
                            value={additionalInfo?.VerdictText2}
                            onChange={(value) =>
                              setAdditionalInfo({
                                ...additionalInfos,
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
                    Update Car
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </>

    </div>
  );
};

export default UpdateCarData;