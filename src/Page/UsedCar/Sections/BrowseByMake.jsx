import React from 'react';
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const BrowseByMake = () => {
    return (
        <div>
            <div className="flex gap-7 items-center px-10 mb-8">
                <h1 className="text-xl font-bold">Browse by make</h1>
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
            <div className="lg:flex  justify-between px-5 lg:px-10 grid grid-cols-2 gap-2">
                <div className="bg-white py-8 px-5 rounded-xl w-40 shadow">
                    <img
                        src="https://cdn.discordapp.com/attachments/1094651413235253289/1144147151362986034/image_24.png"
                        alt=""
                    />
                    <div className="mt-2">
                        <h1 className="font-bold">Volkswagen</h1>
                        <p className="text-[#9A9EA7] font-semibold text-sm">1,287</p>
                    </div>
                </div>
                <div className="bg-white py-8 px-5 rounded-xl w-40 shadow">
                    <center>
                        {" "}
                        <img
                            src="https://cdn.discordapp.com/attachments/1094651413235253289/1144147149815291994/image_19.png"
                            alt=""
                        />
                    </center>
                    <div className="mt-6">
                        <h1 className="font-bold">Audi</h1>
                        <p className="text-[#9A9EA7] font-semibold text-sm">1,287</p>
                    </div>
                </div>
                <div className="bg-white py-8 px-5 rounded-xl w-40 shadow">
                    <center>
                        {" "}
                        <img
                            src="https://cdn.discordapp.com/attachments/1094651413235253289/1144147150163410975/image_20.png"
                            alt=""
                        />
                    </center>
                    <div className="mt-5">
                        <h1 className="font-bold">Ford</h1>
                        <p className="text-[#9A9EA7] font-semibold text-sm">1,287</p>
                    </div>
                </div>
                <div className="bg-white py-8 px-5 rounded-xl w-40 shadow">
                    <center>
                        {" "}
                        <img
                            src="https://cdn.discordapp.com/attachments/1094651413235253289/1144147150482182154/image_21.png"
                            alt=""
                        />
                    </center>
                    <div className="mt-2">
                        <h1 className="font-bold">BMW</h1>
                        <p className="text-[#9A9EA7] font-semibold text-sm">1,287</p>
                    </div>
                </div>
                <div className="bg-white py-8 px-5 rounded-xl w-40 shadow">
                    <center>
                        {" "}
                        <img
                            src="https://cdn.discordapp.com/attachments/1094651413235253289/1144147150863867934/image_22.png"
                            alt=""
                        />
                    </center>
                    <div className="mt-5">
                        <h1 className="font-bold">Chevrolet</h1>
                        <p className="text-[#9A9EA7] font-semibold text-sm">1,287</p>
                    </div>
                </div>
                <div className="bg-white py-8 px-5 rounded-xl w-40 shadow">
                    <center>
                        {" "}
                        <img
                            src="https://cdn.discordapp.com/attachments/1094651413235253289/1144147151098740847/image_23.png"
                            alt=""
                        />
                    </center>
                    <div className="mt-4">
                        <h1 className="font-bold">Honda</h1>
                        <p className="text-[#9A9EA7] font-semibold text-sm">1,287</p>
                    </div>
                </div>
                <div className="bg-white py-8 px-5 rounded-xl w-40 shadow">
                    <center>
                        {" "}
                        <img
                            src="https://cdn.discordapp.com/attachments/1094651413235253289/1144147151098740847/image_23.png"
                            alt=""
                        />
                    </center>
                    <div className="mt-4">
                        <h1 className="font-bold">Honda</h1>
                        <p className="text-[#9A9EA7] font-semibold text-sm">1,287</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrowseByMake;