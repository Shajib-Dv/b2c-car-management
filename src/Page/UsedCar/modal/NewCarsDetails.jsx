import { AiFillInfoCircle } from "react-icons/ai";
import {
  BsCardChecklist,
  BsFiletypeKey,
  BsFillPiggyBankFill,
} from "react-icons/bs";
import { FcInspection } from "react-icons/fc";

const NewCarsDetails = ({ open = false, car, close }) => {
  const {
    basicInfo,
    keySpecifications,
    emi,
    specification,
    images,
    additionalInfo,
  } = car;

  const basic_info_key = Object.keys(basicInfo || {});
  const keySpecifications_key = Object.keys(keySpecifications || {});
  const specification_key = Object.keys(specification || {});
  const emi_key = Object.keys(emi || {});
  const additionalInfo_key = Object.keys(additionalInfo || {});

  return (
    <div>
      <dialog className={`${open ? "flex z-50" : "hidden"}`} open={open}>
        <div className='modal-box max-w-7xl w-11/12  border border-black border-opacity-40 p-4 hidden-scroll'>
          <div>
            <div className='my-20 w-full overflow-hidden'>
              <div className='center-itm justify-center'>
                <h2 className='title'>
                  Details For
                  <span className='text-green-600'>
                    {" "}
                    {basicInfo?.carName || "unknown"}
                  </span>
                </h2>
              </div>
              {/* basic info */}
              <div>
                <h1 className='font-bold text-[#618264] font-sans flex items-center gap-2'>
                  <span>
                    <AiFillInfoCircle />
                  </span>
                  Basic Info
                </h1>
                <div className='space-y-2'>
                  {basic_info_key && basic_info_key.length > 0 ? (
                    basic_info_key.map((key) => (
                      <div
                        key={key}
                        className='center-itm justify-between border-y border-opacity-20 border-black py-2 md:pr-10 pr-0'
                      >
                        <p className='uppercase'>{key}</p>
                        <p>{basicInfo[key] || "unknown"}</p>
                      </div>
                    ))
                  ) : (
                    <h2 className='text-red-500'>
                      No basic information found !
                    </h2>
                  )}
                </div>
              </div>

              {/* key Specifications */}

              <div className='mt-10 over'>
                <h1 className='font-bold text-[#618264] font-sans mt-5 md:mt-0 flex items-center gap-2'>
                  <span>
                    <BsFiletypeKey />
                  </span>
                  Key Specifications
                </h1>
                <div className='space-y-2'>
                  {keySpecifications_key && keySpecifications_key.length > 0 ? (
                    keySpecifications_key.map((key) => (
                      <div
                        key={key}
                        className='center-itm justify-between border-y border-opacity-20 border-black py-2 md:pr-10 pr-0'
                      >
                        <p className='uppercase'>{key}</p>
                        <p>{keySpecifications[key] || "unknown"}</p>
                      </div>
                    ))
                  ) : (
                    <h2 className='text-red-500'>
                      No key specification found !
                    </h2>
                  )}
                </div>
              </div>

              {/* emi */}

              <div className='mt-10'>
                <h1 className='font-bold text-[#618264] font-sans flex items-center gap-2 mt-5 md:mt-0'>
                  {" "}
                  <span>
                    <BsFillPiggyBankFill />
                  </span>
                  EMI
                </h1>
                <div className='space-y-2'>
                  {emi_key && emi_key.length > 0 ? (
                    emi_key.map((key) => (
                      <div
                        key={key}
                        className='center-itm justify-between border-y border-opacity-20 border-black py-2 md:pr-10 pr-0'
                      >
                        <p className='uppercase'>{key}</p>
                        <p>{emi[key] || "unknown"}</p>
                      </div>
                    ))
                  ) : (
                    <h2 className='text-red-500'>No EMI found !</h2>
                  )}
                </div>
              </div>

              {/* specifications */}

              <div className='mt-10'>
                <h1 className='font-bold text-[#618264] font-sans flex items-center gap-2 mt-5 md:mt-0'>
                  <span>
                    <FcInspection />
                  </span>
                  Specification
                </h1>
                <div className='space-y-2'>
                  {specification_key && specification_key.length > 0 ? (
                    specification_key.map((key) => (
                      <div
                        key={key}
                        className='center-itm justify-between border-y border-opacity-20 border-black py-2 md:pr-10 pr-0'
                      >
                        <p className='uppercase'>{key}</p>
                        <p>{specification[key] || "unknown"}</p>
                      </div>
                    ))
                  ) : (
                    <h2 className='text-red-500'>
                      No specification data found !
                    </h2>
                  )}
                </div>
              </div>

              {/* additional info */}

              <div className='mt-10'>
                <h1 className='font-bold text-[#618264] font-sans justify-center flex items-center gap-2 mt-5 md:mt-0'>
                  <span>
                    <BsCardChecklist />
                  </span>
                  Additional Info
                </h1>
                <div className='md:flex gap-10'>
                  <div className='space-y-2 flex-1'>
                    {additionalInfo_key && additionalInfo_key.length > 0 ? (
                      additionalInfo_key.map((key) => (
                        <div
                          key={key}
                          className='center-itm justify-between border-y border-opacity-20 border-black py-2 md:pr-10 pr-0'
                        >
                          <p className='uppercase'>{key}</p>
                          <p>{additionalInfo[key] || "unknown"}</p>
                        </div>
                      ))
                    ) : (
                      <h2 className='text-red-500'>
                        No additional information found !
                      </h2>
                    )}
                  </div>
                  <div className='flex-1 mt-10 md:mt-0'>
                    <div className='flex gap-4 flex-wrap h-full hidden-scroll overflow-auto'>
                      {images &&
                        images.map((img, idx) => (
                          <div
                            key={idx}
                            className='rounded-md grow basis-[200px] h-64 overflow-hidden'
                          >
                            <img
                              src={img}
                              alt='car'
                              className='object-cover w-full h-full hover:scale-105 transition-all duration-1000'
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => close()}
              className='btn btn-sm btn-circle btn-ghost text-2xl text-error absolute right-0 top-0'
            >
              ✕
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default NewCarsDetails;
