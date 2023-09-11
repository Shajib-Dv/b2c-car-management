import React from 'react';
import BodyStyleSlider from '../../../Shared/SectionSliders/BodyStyleSlider/BodyStyleSlider';
import { BsDot, BsFillArrowRightSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const BrowseByBody = () => {
    return (
        <div>
            <div className="py-16 overflow-hidden">
                <div>
                    <div className="flex gap-7 items-center px-10 mb-5">
                        <h1 className="text-xl font-bold">Browse by Body Style</h1>
                        <Link>
                            <div className="flex gap-2">
                                <h1 className="text-sm mt-1 font-bold text-[#00A541]">
                                    View All
                                </h1>
                                <span className="text-[#00A541] text-2xl ">
                                    <BsFillArrowRightSquareFill></BsFillArrowRightSquareFill>
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div className="px-9 flex items-center gap-10">
                        <div className="w-[100%]">
                            <BodyStyleSlider />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrowseByBody;