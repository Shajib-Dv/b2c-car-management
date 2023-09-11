import React from 'react';
import { BiSearch } from "react-icons/bi";

const UsedCarCover = () => {
    return (
        <div className="shadow-inner  lg:px-20 lg:py-10 p-5">
            <div className="lg:flex justify-between items-center mb-5 lg:mb-0">
                <div className="mb-5 lg:mb-0">
                    <h1 className="text-5xl font-bold mb-5">
                        Say hello to your next <br /> awesome vehicle
                    </h1>
                    <p className="text-lg">
                        Featuring Used, Wholesale and Salvage <br /> Cars, Trucks & SUVs for
                        Sale
                    </p>
                    <div className="flex gap-5 mt-5">
                        <button className="border bg-[#00A541] text-white font-medium px-7 py-2 rounded">
                            Used Car
                        </button>
                        <button className="border font-medium px-7 py-2 rounded">
                            New Car
                        </button>
                    </div>
                </div>
                <div className="">
                    <div className="bg-[#FF7D05] rounded-lg ">
                        <img
                            className=""
                            src="https://cdn.discordapp.com/attachments/1094651413235253289/1143837253987209297/image_25.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="border-2 border-gray-300 lg:px-10 lg:py-10 rounded-lg lg:flex lg:gap-9   justify-center lg:absolute lg:-mt-20 bg-[#FAFAFA]">
                <select className="select select-bordered lg:w-44 lg:max-w-xs">
                    <option defaultValue="BMW">BMW</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>
                <select className="select select-bordered lg:w-44 lg:max-w-xs">
                    <option defaultValue="BMW">BMW</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>
                <select className="select select-bordered lg:w-44 lg:max-w-xs">
                    <option defaultValue="BMW">BMW</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>
                <button className="mt-5 lg:mt-0 border bg-[#00A541] text-white font-medium px-7 py-2 rounded flex items-center">
                    {" "}
                    <span className="text-lg">
                        <BiSearch></BiSearch>
                    </span>{" "}
                    Search Vehicle
                </button>
            </div>
            
            
        </div>
    );
};

export default UsedCarCover;