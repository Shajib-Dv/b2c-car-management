import React from "react";
import Tab from "./sections/Tab";
import CarCover from "./sections/CarCover";
import EmiBanner from "./sections/EmiBanner";
import KeySpec from "./sections/KeySpec";
import BalenoBanner from "./sections/BalenoBanner";
import VehicleDetailTab from "./sections/VehicleDetailTab";
import TrendingCarBanner from "./sections/TrendingCarBanner";
import CarEquipment from "./sections/CarEquipment";
import PriceCompare from "./sections/PriceCompare";
import CalculateEMI from "./sections/CalculateEMI";
import ProsCons from "./sections/ProsCons";
import Spec from "./sections/Spec";
import Review from "./sections/Review";
import UserReview from "./sections/UserReview";
import CompareCarsSlider from "../../sliders/CompareCars/CompareCarsSlider";
import { useParams } from "react-router-dom";
import getCarsById from "../../utils/getCarsById";
import Loader from "../../Shared/components/Loader";

const CarDetails = () => {
  const { id } = useParams();
  const { car, isLoading } = getCarsById(id);

  const {
    _id,
    basicInfo,
    keySpecifications,
    emi,
    specification,
    images,
    additionalInfo,
  } = car;

  // const basic_info_key = Object.keys(basicInfo || {});
  // const keySpecifications_key = Object.keys(keySpecifications || {});
  // const specification_key = Object.keys(specification || {});
  // const emi_key = Object.keys(emi || {});
  // const additionalInfo_key = Object.keys(additionalInfo || {});

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <Tab carName={basicInfo?.carName}></Tab>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mt-5'>
        <div className='md:col-span-3 flex flex-col gap-10'>
          <CarCover carInfo={basicInfo} images={images} />
          <KeySpec carName={basicInfo?.carName} KeySpec={keySpecifications} />
          <VehicleDetailTab carName={basicInfo?.carName} />
          <CarEquipment carName={basicInfo?.carName} />
          <PriceCompare carName={basicInfo?.carName} />
          <CalculateEMI carName={basicInfo?.carName} />
          <div>
            <CompareCarsSlider carName={basicInfo?.carName} />
          </div>
          <ProsCons carName={basicInfo?.carName} />
          <Spec specification={specification} carName={basicInfo?.carName} />
          <Review carName={basicInfo?.carName} images={images} />
          <UserReview carName={basicInfo?.carName} carId={_id} />
        </div>
        <div className='w-full flex flex-col gap-10'>
          <EmiBanner carName={basicInfo?.carName} />
          <BalenoBanner carName={basicInfo?.carName} />
          <TrendingCarBanner carName={basicInfo?.carName} />
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
