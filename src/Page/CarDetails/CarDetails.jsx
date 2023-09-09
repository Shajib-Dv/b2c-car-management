/** @format */

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
import Spec from "./sections/spec";
import Review from "./sections/Review";
import UserReview from "./sections/UserReview";

const CarDetails = () => {
  return (
    <div>
      <Tab></Tab>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-5">
        <div className="md:col-span-3 flex flex-col gap-10">
          <CarCover />
          <KeySpec />
          <VehicleDetailTab/>
          <CarEquipment/>
          <PriceCompare/>
          <CalculateEMI/>
          <ProsCons/>
          <Spec/>
          <Review/>
          <UserReview/>
        </div>
        <div className="w-full flex flex-col gap-10">
          <EmiBanner />
          <BalenoBanner />
          <TrendingCarBanner/>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
