import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Cover from "./Sections/Cover";
import FeelNBrowseByBody from "./Sections/FeelNBrowseByBody";
import Ads from "./Sections/Ads";
import ByMakeNPre from "./Sections/ByMakeNPre";
import SellingCar from "./Sections/SellingCar";
import Reviews from "./Sections/Reviews";
import FooterCoaver from "./Sections/FooterCoaver";
import RecommendedCarsSection from "../sliders/RecommendedCars/RecommendedCarsSection";
import MostSearchedCarSection from "../sliders/MostSearchedCar/MostSearchedCarSection";
import UsedCarsByBudget from "../sliders/UsedCarsByBudget/UsedCarsByBudget";
import CompareCars from "../sliders/CompareCars/CompareCars";

const HomeLayouts = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Cover></Cover>
      <RecommendedCarsSection />
      <FeelNBrowseByBody></FeelNBrowseByBody>
      <Ads></Ads>
      <MostSearchedCarSection />
      <ByMakeNPre></ByMakeNPre>
      <Ads></Ads>
      <UsedCarsByBudget />
      <CompareCars />
      <SellingCar></SellingCar>
      <Reviews></Reviews>
      <FooterCoaver></FooterCoaver>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayouts;
