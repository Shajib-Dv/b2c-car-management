/** @format */

const CalculateEMI = () => {
  return (
    <div className="mt-5 border rounded-md p-10">
      <h2 className="title">Calculate your EMI</h2>
      <div className="center-itm gap-5 justify-between my-10">
        <select className="select-btn">
          <option defaultValue={"Select Brand"}>Select Brand</option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
        <select className="select-btn">
          <option defaultValue={"Select Brand"}>Select Model</option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
        <select className="select-btn">
          <option defaultValue={"Select Brand"}>Select Variant</option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
      </div>
      <div>
        <div className="center-itm justify-between md:w-4/5">
          <p className="title text-gray-400 font-semibold">Down Payment</p>
          <p className="title">₹ 87,000</p>
        </div>

        <input type="range" min={0} max={100} className="range my-4" />

        <div className="center-itm justify-between md:w-4/5 font-semibold">
          <p>0</p>
          <p>₹ 87,000</p>
        </div>
      </div>
      <div className="my-10">
        <div className="center-itm justify-between md:w-4/5">
          <p className="title text-gray-400 font-semibold">Down Payment</p>
          <p className="title">₹ 87,000</p>
        </div>

        <input type="range" min={0} max={100} className="range my-4" />

        <div className="center-itm justify-between md:w-4/5 font-semibold">
          <p>0</p>
          <p>₹ 87,000</p>
        </div>
      </div>
    </div>
  );
};

export default CalculateEMI;
