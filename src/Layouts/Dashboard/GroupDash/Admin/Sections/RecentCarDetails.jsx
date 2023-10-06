import { useParams } from "react-router-dom";
import getCarsById from "../../../../../utils/getCarsById";
import Loader from "../../../../../Shared/components/Loader";
import { AiFillInfoCircle } from "react-icons/ai";
import {
  BsCardChecklist,
  BsFiletypeKey,
  BsFillPiggyBankFill,
} from "react-icons/bs";
import { FcInspection } from "react-icons/fc";

const RecentCarDetails = () => {
  const { id } = useParams();
  const { car, isLoading } = getCarsById(id);

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

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="my-20 w-full">
      <div className="center-itm justify-center">
        <h2 className="title">
          Details For
          <span className="text-green-600"> {basicInfo?.carName}</span>
        </h2>
      </div>

      {/* basic info */}
      <div>
        <h1 className="font-bold text-[#618264] font-sans flex items-center gap-2">
          <span>
            <AiFillInfoCircle />
          </span>
          Basic Info
        </h1>
        <div className="space-y-2">
          {basic_info_key &&
            basic_info_key.map((key) => (
              <div
                key={key}
                className="center-itm justify-between border-y border-opacity-30 border-green-400 py-2 md:pr-10 pr-0"
              >
                <p className="uppercase">{key}</p>
                <p>{basicInfo[key]}</p>
              </div>
            ))}
        </div>
      </div>

      {/* key Specifications */}

      <div className="mt-10">
        <h1 className="font-bold text-[#618264] font-sans mt-5 md:mt-0 flex items-center gap-2">
          <span>
            <BsFiletypeKey />
          </span>
          Key Specifications
        </h1>
        <div className="space-y-2">
          {keySpecifications_key &&
            keySpecifications_key.map((key) => (
              <div
                key={key}
                className="center-itm justify-between border-y border-opacity-30 border-green-400 py-2 md:pr-10 pr-0"
              >
                <p className="uppercase">{key}</p>
                <p>{keySpecifications[key]}</p>
              </div>
            ))}
        </div>
      </div>

      {/* emi */}

      <div className="mt-10">
        <h1 className="font-bold text-[#618264] font-sans flex items-center gap-2 mt-5 md:mt-0">
          {" "}
          <span>
            <BsFillPiggyBankFill />
          </span>
          EMI
        </h1>
        <div className="space-y-2">
          {emi_key &&
            emi_key.map((key) => (
              <div
                key={key}
                className="center-itm justify-between border-y border-opacity-30 border-green-400 py-2 md:pr-10 pr-0"
              >
                <p className="uppercase">{key}</p>
                <p>{emi[key]}</p>
              </div>
            ))}
        </div>
      </div>

      {/* specifications */}

      <div className="mt-10">
        <h1 className="font-bold text-[#618264] font-sans flex items-center gap-2 mt-5 md:mt-0">
          <span>
            <FcInspection />
          </span>
          Specification
        </h1>
        <div className="space-y-2">
          {specification_key &&
            specification_key.map((key) => (
              <div
                key={key}
                className="center-itm justify-between border-y border-opacity-30 border-green-400 py-2 md:pr-10 pr-0"
              >
                <p className="uppercase">{key}</p>
                <p>{specification[key]}</p>
              </div>
            ))}
        </div>
      </div>

      {/* additional info */}

      <div className="mt-10">
        <h1 className="font-bold text-[#618264] font-sans justify-center flex items-center gap-2 mt-5 md:mt-0">
          <span>
            <BsCardChecklist />
          </span>
          Additional Info
        </h1>
        <div className="md:flex gap-10">
          <div className="space-y-2 flex-1">
            {additionalInfo_key &&
              additionalInfo_key.map((key) => (
                <div
                  key={key}
                  className="center-itm justify-between border-y border-opacity-30 border-green-400 py-2 md:pr-10 pr-0"
                >
                  <p className="uppercase">{key}</p>
                  <p>{additionalInfo[key]}</p>
                </div>
              ))}
          </div>
          <div className="flex-1 mt-10 md:mt-0">
            <div className="grid grid-cols-3 gap-4">
              {images &&
                images.map((img, idx) => <img key={idx} src={img} alt="car" />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentCarDetails;
