/** @format */

import { useState } from "react";

const VehicleDetailTab = () => {
  const [option, setOption] = useState("A");
  const handleOptionSelect = (op) => {
    setOption(op);
  };
  return (
    <div className="border bg-base-100 rounded-md mt-10">
      <div className="center-itm justify-between bg-base-300 px-10">
        <button
          onClick={() => handleOptionSelect("A")}
          className={`flex-1 capitalize font-bold ${
            option === "A" && "btn-act-tab"
          }`}
        >
          Vehicle Overview
        </button>
        <button
          onClick={() => handleOptionSelect("B")}
          className={`flex-1 capitalize font-bold ${
            option === "B" && "btn-act-tab"
          }`}
        >
          Technical Specification
        </button>
        <button
          onClick={() => handleOptionSelect("C")}
          className={`flex-1 capitalize font-bold ${
            option === "C" && "btn-act-tab"
          }`}
        >
          Accessories
        </button>
      </div>
      <div className="space-y-5 px-10 my-10">
        <h2 className="title">What is Lorem Ipsum?</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
          veritatis similique sint quas voluptatem labore dolorem accusamus quod
          excepturi natus. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Vero illo repellendus rem dolorem voluptate suscipit, ipsa
          tempore sit, recusandae ex aspernatur nam labore minus ab neque soluta
          natus magnam vel error exercitationem. Deserunt non recusandae quas
          blanditiis praesentium sunt ex?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
          veritatis similique sint quas voluptatem labore dolorem accusamus quod
          excepturi natus. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Ex unde nemo ea quidem, ad iure sequi accusamus iusto molestiae
          officia.
        </p>
      </div>
      <div className="space-y-5 px-10 my-10">
        <h2 className="title">What is Lorem Ipsum?</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
          veritatis similique sint quas voluptatem labore dolorem accusamus quod
          excepturi natus. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Vero illo repellendus rem dolorem voluptate suscipit, ipsa
          tempore sit, recusandae ex aspernatur nam labore minus ab neque soluta
          natus magnam vel error exercitationem. Deserunt non recusandae quas
          blanditiis praesentium sunt ex?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
          veritatis similique sint quas voluptatem labore dolorem accusamus quod
          excepturi natus. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Ex unde nemo ea quidem, ad iure sequi accusamus iusto molestiae
          officia.
        </p>
      </div>
    </div>
  );
};

export default VehicleDetailTab;
