/** @format */

import React, { useState } from "react";
import NewCar from "../UsedCar/Sections/NewCar";
import RecommendedCarsSection from "../../sliders/RecommendedCars/RecommendedCarsSection";
import Reviews from "../../Layouts/Sections/Reviews";

const AllNewCar = () => {
  return (
    <div className="my-10">
      <NewCar show_loader={true} />
      <RecommendedCarsSection />
      <Reviews />
    </div>
  );
};

export default AllNewCar;
