/** @format */

import React from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ByMakeNPre = () => {
  return (
    <div>
      <div className="py-16 bg-[#FAFAFA]">
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
          <div className="flex  justify-between px-10">
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

        {/* The prefect pre-owend car for you */}

        <div className="px-10 lg:mt-20 ">
          <h1 className="text-2xl font-bold mb-10">
            The prefect pre-owend car for you
          </h1>
          <div className="flex justify-between px-20">
            <div className="rounded-xl bg-[#FEF6DF]">
              <div className="hover:bg-[#FEF6DF] py-2 px-7 flex justify-center h-32">
                <img
                  className=""
                  src="https://cdn.discordapp.com/attachments/1094651413235253289/1144157782380126238/handshake_1.png"
                  alt=""
                />
              </div>
              <div className="bg-white rounded-b-2xl py-2 px-7">
                <h1 className="font-medium text-lg">
                  Vmall Quality <br /> Promise
                </h1>
                <p className="mb-8 mt-5 text-sm">
                  We test each car on 150+ points, <br /> check RTO, finance and
                  service <br /> history, AND give a 6 month <br /> warranty!
                </p>
              </div>
            </div>
            <div className="rounded-xl bg-[#FEF6DF]">
              <div className="hover:bg-[#FEF6DF] py-2 px-7 flex justify-center h-32">
                <img
                  className=""
                  src="https://cdn.discordapp.com/attachments/1094651413235253289/1144157782086520913/hand_1.png"
                  alt=""
                />
              </div>
              <div className="bg-white rounded-b-2xl py-2 px-7">
                <h1 className="font-medium text-lg">
                  Fast <br />
                  financing!{" "}
                </h1>
                <p className="mb-8 mt-5 text-sm">
                  We test each car on 150+ points, <br /> check RTO, finance and
                  service <br /> history, AND give a 6 month <br /> warranty!
                </p>
              </div>
            </div>
            <div className="rounded-xl bg-[#FEF6DF]">
              <div className="hover:bg-[#FEF6DF] py-2 px-7 flex justify-center h-32">
                <img
                  className=""
                  src="https://cdn.discordapp.com/attachments/1094651413235253289/1144157781809700864/delivered_1.png"
                  alt=""
                />
              </div>
              <div className="bg-white rounded-b-2xl py-2 px-7">
                <h1 className="font-medium text-lg">
                  Convenience,
                  <br /> delivered to you Promise
                </h1>
                <p className="mb-8 mt-5 text-sm">
                  We test each car on 150+ points, <br /> check RTO, finance and
                  service <br /> history, AND give a 6 month <br /> warranty!
                </p>
              </div>
            </div>
            <div className="rounded-xl bg-[#FEF6DF]">
              <div className="hover:bg-[#FEF6DF] py-2 px-7 flex justify-center h-32">
                <img
                  className=""
                  src="https://cdn.discordapp.com/attachments/1094651413235253289/1144157781369294849/return_1.png"
                  alt=""
                />
              </div>
              <div className="bg-white rounded-b-2xl py-2 px-7">
                <h1 className="font-medium text-lg">
                  7-day return, <br />
                  100% refund
                </h1>
                <p className="mb-8 mt-5 text-sm">
                  We test each car on 150+ points, <br /> check RTO, finance and
                  service <br /> history, AND give a 6 month <br /> warranty!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ByMakeNPre;
