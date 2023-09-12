import React from 'react';
import UsedCarCover from './Sections/UsedCarCover';
import BrowseByMake from './Sections/BrowseByMake';
import BrowseByBody from './Sections/BrowseByBody';
import Ads from '../../Layouts/Sections/Ads';
import Reviews from '../../Layouts/Sections/Reviews';
import FooterCoaver from '../../Layouts/Sections/FooterCoaver';
import UsedCardByCity from './Sections/UsedCardByCity';
import TrustedUsedCarByFuel from './Sections/TrustedUsedCarByFuel';
import UpcomingCar from './Sections/UpcomingCar';

const UsedCar = () => {
    return (
        <div>
            <div className='mb-20'>
                <UsedCarCover />
            </div>
            <UsedCardByCity />
            <BrowseByMake />
            <TrustedUsedCarByFuel />
            <UpcomingCar/>
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