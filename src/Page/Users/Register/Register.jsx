/** @format */

import { useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const [error, setError] = useState({});
  const { googleSignIn } = useAuth();

  const handleGoogleSignin = (e) => {
    e.preventDefault();

    setError({});

    // googleSignIn(email, password)
    //   .then(() => {
    //     console.log("success");
    //   })
    //   .catch((err) => console.log(err.message));
  };

  return (
    <div className="md:w-1/2 mx-auto bg-base-100 rounded-md shadow-inner p-4 min-h-screen mt-10">
      <div className="flex items-center justify-between ">
        <h1 className="title">Welcome register with your email</h1>
        <span className="cursor-pointer">
          <Link to="/login/google">
            <FaTimes />
          </Link>
        </span>
      </div>
      <form
        onSubmit={handleGoogleSignin}
        className="flex flex-col md:justify-between h-4/5 mt-10 space-y-6"
      >
        <div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="input input-bordered mt-20 md:w-4/5"
            />
            <div className="h-5">
              {error?.email && !email && (
                <p className="text-red-600 font-semibold">{error?.email}</p>
              )}
            </div>
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Your password"
              className="input input-bordered mt-10 md:w-4/5"
            />
            <div className="h-5">
              {error?.password && !password && (
                <p className="text-red-600 font-semibold">{error?.password}</p>
              )}
            </div>
          </div>
        </div>

        <div>
          <p className="text-green-600 font-bold">
            Already have an account, please
            <Link to="/login/google" className="hover:underline font-bold px-2">
              Login
            </Link>
          </p>
        </div>

        <input
          type="submit"
          value="Register"
          className="md:w-1/2 w-4/5 mx-auto md:mx-0 otp-btn"
        />
      </form>
    </div>
  );
};

export default Register;
