/** @format */

const CalculateEMI = () => {
  return (
    <div className="my-5 border rounded-md p-10">
      <h2 className="title">Calculate your EMI</h2>
      <div className="center-itm gap-5 flex-wrap md:flex-nowrap my-10">
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
      <div className="mt-10">
        <p className="text-2xl text-gray-400 font-bold">
          Loan Period {"( Years )"}
        </p>

        <div className="join md:w-1/2 my-5">
          <input
            className="btn-cmn flex-1 join-item px-4"
            type="radio"
            name="options"
            aria-label="1"
          />
          <input
            className="btn-cmn flex-1 join-item px-4"
            type="radio"
            name="options"
            aria-label="2"
          />
          <input
            className="btn-cmn flex-1 join-item px-4"
            type="radio"
            name="options"
            aria-label="3"
          />
          <input
            className="btn-cmn flex-1 join-item px-4"
            type="radio"
            name="options"
            aria-label="4"
          />
          <input
            className="btn-cmn flex-1 join-item px-4"
            type="radio"
            name="options"
            aria-label="5"
          />
          <input
            className="btn-cmn flex-1 join-item px-4"
            type="radio"
            name="options"
            aria-label="6"
          />
          <input
            className="btn-cmn flex-1 join-item px-4"
            type="radio"
            name="options"
            aria-label="7"
          />
        </div>

        <div className="line-title">
          <p>Total Loan Amount</p>
          <p>₹ 9,73,698</p>
        </div>
        <hr />
        <div className="line-title">
          <p>Payable Amount</p>
          <p>₹ 9,73,698</p>
        </div>
        <hr />
        <div className="line-title">
          <p>You'll pay extra</p>
          <p>₹ 9,73,698</p>
        </div>
        <hr />

        <div className="center-itm md:justify-evenly flex-col md:flex-row gap-20 md:gap-0 my-10">
          <div>
            <h2 className="text-5xl pb-2 font-bold">EMI</h2>
            <p>Per Month</p>
          </div>
          <div>
            <h2 className="text-5xl pb-2 font-bold">₹20,593</h2>
            <p>Calculated on On Road Price</p>
          </div>
        </div>
        <hr />

        <p className="text-center mt-10 font-bold">
          At CarDekho, we can help you get the best deal on your loans. Please
          call us on <span className="text-green-600">1800 200 3000</span> for
          help.
        </p>
      </div>
    </div>
  );
};

export default CalculateEMI;
