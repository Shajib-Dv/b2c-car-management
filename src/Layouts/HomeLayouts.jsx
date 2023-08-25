import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Cover from './Sections/Cover';
import FeelNBrowseByBody from './Sections/FeelNBrowseByBody';
import Ads from './Sections/Ads';
import ByMakeNPre from './Sections/ByMakeNPre';
import SellingCar from './Sections/SellingCar';
import Reviews from './Sections/Reviews';
import FooterCoaver from './Sections/FooterCoaver';

const HomeLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Cover></Cover>
            <FeelNBrowseByBody></FeelNBrowseByBody>
            <Ads></Ads>
            <ByMakeNPre></ByMakeNPre>
            <Ads></Ads>
            <SellingCar></SellingCar>
            <Reviews></Reviews>
            <FooterCoaver></FooterCoaver>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayouts;  