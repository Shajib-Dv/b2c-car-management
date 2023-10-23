import React from "react";
import UsedCarCover from "./Sections/UsedCarCover";
import BrowseByMake from "./Sections/BrowseByMake";
import BrowseByBody from "./Sections/BrowseByBody";
import Ads from "../../Layouts/Sections/Ads";
import Reviews from "../../Layouts/Sections/Reviews";
import FooterCoaver from "../../Layouts/Sections/FooterCoaver";
import UsedCardByCity from "./Sections/UsedCardByCity";
import TrustedUsedCarByFuel from "./Sections/TrustedUsedCarByFuel";
import UpcomingCar from "./Sections/UpcomingCar";
import NewCar from "./Sections/NewCar";

const UsedCar = () => {
  return (
    <div>
      <div className='mb-20'>
        <UsedCarCover />
      </div>
      <UsedCardByCity />
      <BrowseByMake />
      <TrustedUsedCarByFuel />
      <UpcomingCar limit={4} show_menu={true}  />
      <NewCar limit={4} show_menu={true} />
      <BrowseByBody />
      <Ads />
      <div className='mt-10'>
        <Reviews />
      </div>
      <FooterCoaver />
    </div>
  );
};

export default UsedCar;
