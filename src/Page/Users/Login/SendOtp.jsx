/** @format */

import { useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const SendOtp = ({ setOtp }) => {
  const otpRef = useRef(null);
  const [error, setError] = useState("");
  const [navigate, setNavigate] = useState("");

  const handleSendOTP = async (e) => {
    e.preventDefault();

    const number = otpRef?.current?.value;

    setError("");
    setNavigate("");

    if (number === "" || number === undefined) {
      return setError("Please enter a valid phone number!");
    }

    // setOtp((prev) => {
    //   return { ...prev, phone: number };
    // });

    setNavigate("/login/google");
  };

  return (
    <div className="md:w-1/2 mx-auto bg-base-100 rounded-md shadow-inner p-4 h-screen mt-10">
      <div className="flex items-center justify-between ">
        <h1 className="title">
          Login or Register for best VhicleMall experience
        </h1>
        <span className="cursor-pointer">
          <FaTimes />
        </span>
      </div>
      <form
        onSubmit={handleSendOTP}
        className="flex flex-col md:justify-between h-4/5 mt-10 space-y-6"
      >
        <div>
          <input
            type="tel"
            name="tel"
            ref={otpRef}
            placeholder="Enter mobile number"
            className="input input-bordered mt-20 md:w-4/5"
          />
          <div id="recaptcha-container"></div>
          <div className="h6">
            {error && (
              <p className="text-red-600 font-semibold pt-4">{error}</p>
            )}
            {navigate && (
              <p className="text-green-600 font-semibold pt-4">
                Something went wrong, use{" "}
                <Link to={navigate} className="font-bold hover:underline">
                  Google
                </Link>
              </p>
            )}
          </div>
        </div>

        <input
          type="submit"
          value="Send OTP"
          className="md:w-1/2 w-4/5 mx-auto md:mx-0 otp-btn"
        />
      </form>
    </div>
  );
};

export default SendOtp;
