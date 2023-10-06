import React from 'react';
import getUpComingCarData from '../../utils/getUpComingCarData';

const NewsAndReview = () => {
    const {carData, loading} = getUpComingCarData()
    console.log(carData)
    return (
        <div>
            <h1>NewsAndReview</h1>

        </div>
    );
};

export default NewsAndReview;