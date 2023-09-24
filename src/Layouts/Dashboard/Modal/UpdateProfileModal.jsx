/** @format */

import { useRef } from "react";
import { useState } from "react";
import { forwardRef } from "react";

const UpdateProfileModal = ({ open, close }, ref) => {
  const avatarRef = useRef(null);
  const [userInfo, setUserInfo] = useState({});

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setUserInfo({ ...userInfo, avatar: e.target.result });
      };

      reader.readAsDataURL(file);
    } else {
      setUserInfo({ ...userInfo, avatar: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    // setUserInfo({});
    close();
  };

  return (
    <>
      <dialog className="modal" open={open} ref={ref}>
        <div className="modal-box md:w-1/2  border border-green-600">
          <h3 className="font-bold text-lg">
            Welcome <span className="text-green-600">{"User_name"}</span>.
            Update your information here...
          </h3>

          <div>
            <form
              method="dialog"
              onSubmit={handleSubmit}
              className="flex flex-col mt-4 gap-2"
            >
              <div className="flex gap-4 md:flex-row flex-col items-center">
                <div
                  onClick={() => avatarRef.current.click()}
                  className="w-24 h-24 rounded-full border border-green-600 cursor-pointer relative overflow-hidden"
                  title="Choose your avatar"
                >
                  <img
                    src={
                      userInfo?.avatar
                        ? userInfo?.avatar
                        : "https://i.ibb.co/kc20dsb/blank-profile-picture-973460-1280.png"
                    }
                    alt="avatar"
                    className="rounded-full w-full h-full bg-cover"
                  />
                  <input
                    ref={avatarRef}
                    type="file"
                    className="hidden"
                    onChange={handleImageChange}
                  />

                  <p className="absolute bottom-0 left-1/2 -translate-x-1/2 text-green-600 font-semibold  w-full text-center bg-black bg-opacity-40">
                    {userInfo?.avatar ? "Change" : "Choose"} Avatar
                  </p>
                </div>
                <div className="md:flex-1 w-full space-y-2">
                  <input
                    type="text"
                    placeholder="Your full name"
                    defaultValue={"User_name"}
                    className="data-input"
                    required
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, name: e.target.value })
                    }
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    defaultValue={"user@email.com"}
                    className="data-input"
                    required
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, email: e.target.value })
                    }
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn-details font-bold hover:text-green-600"
              >
                Update
              </button>
            </form>
            <button
              onClick={() => close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-0 top-0"
            >
              ✕
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default forwardRef(UpdateProfileModal);
