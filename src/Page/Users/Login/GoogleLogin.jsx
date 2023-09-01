/** @format */

import { useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const GoogleLogin = () => {
  const mailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState({});

  const email = mailRef?.current?.value;
  const password = passwordRef?.current?.value;

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError((prev) => {
        return { ...prev, email: "Please provide a valid email !" };
      });
    }
    if (!password) {
      setError((prev) => {
        return { ...prev, password: "please provide a password !" };
      });
    }
  };

  return (
    <div className="md:w-1/2 mx-auto bg-base-100 rounded-md shadow-inner p-4 h-screen mt-10">
      <div className="flex items-center justify-between ">
        <h1 className="title">Welcome Back, Login with your email</h1>
        <span className="cursor-pointer">
          <Link to="/login">
            <FaTimes />
          </Link>
        </span>
      </div>
      <form
        onSubmit={handleGoogleLogin}
        className="flex flex-col md:justify-between h-4/5 mt-10 space-y-6"
      >
        <div>
          <div>
            <input
              type="email"
              name="email"
              ref={mailRef}
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
              ref={passwordRef}
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
            New Here, please
            <Link to="/register" className="hover:underline font-bold px-2">
              Register
            </Link>
          </p>
        </div>

        <input
          type="submit"
          value="Login"
          className="md:w-1/2 w-4/5 mx-auto md:mx-0 otp-btn"
        />
      </form>
    </div>
  );
};

export default GoogleLogin;
