/** @format */

import { useState } from "react";
import { forwardRef } from "react";

const UpdateProfileModal = ({ open, close }, ref) => {
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
    close();
    alert("OK");
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
              <div className="w-24 h-24 rounded-full">
                <img
                  src={userInfo?.avatar}
                  alt="avatar"
                  className="rounded-full w-full h-full bg-cover"
                />
              </div>
              <div className="center-itm gap-4">
                <input
                  type="file"
                  className="file-input w-full"
                  onChange={handleImageChange}
                />
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
