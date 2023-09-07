/** @format */

import React from "react";
import Tab from "./sections/Tab";
import CarCover from "./sections/CarCover";
import EmiBanner from "./sections/EmiBanner";
import KeySpec from "./sections/KeySpec";
import BalenoBanner from "./sections/BalenoBanner";

const CarDetails = () => {
  return (
    <div>
      <Tab></Tab>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="md:col-span-3">
          <CarCover />
          <KeySpec />
        </div>
        <div className="w-full">
          <EmiBanner />
          <BalenoBanner />
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
