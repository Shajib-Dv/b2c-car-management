/** @format */

import { Outlet } from "react-router-dom";
import {
  PiArrowFatLinesRightFill,
  PiArrowFatLinesLeftFill,
} from "react-icons/pi";
import { useRef, useState } from "react";
import AdminLinks from "./GroupDash/Admin/AdminLinks";
import UserLinks from "./GroupDash/User/UserLinks";
import useAuth from "../../hooks/useAuth";
import UpdateProfile from "./Modal/UpdateProfile";
import UpdateProfileModal from "./Modal/UpdateProfileModal";
import SendMsgModal from "./Modal/SendMsgModal";
import WelcomeUser from "./WelcomeUser/WelcomeUser";
const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const { testRole, user } = useAuth();

  const openModal = (action) => {
    if (action === "report") {
      setIsReportModalOpen(true);
    } else if (action === "support") {
      setIsSupportModalOpen(true);
    } else {
      setIsModalOpen(true);
    }
  };
  const closeModal = (action) => {
    if (action === "report") {
      setIsReportModalOpen(false);
    } else if (action === "support") {
      setIsSupportModalOpen(false);
    } else {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <WelcomeUser />
      <div className="drawer lg:drawer-open h-full">
        <input id="admin_drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center px-10 bg-gradient-to-r from-[#F2F2F2] to-[#dbfde8]">
          <Outlet />
          <label
            onClick={() => setIsOpen(true)}
            htmlFor="admin_drawer"
            className="h-[100vh] lg:hidden center-itm justify-center border-l-4 border-l-green-600 fixed left-0 top-0"
          >
            <span className="h-16 w-4  center-itm justify-center bg-green-600 btn-dr">
              <PiArrowFatLinesRightFill className="text-2xl text-white" />
            </span>
          </label>
        </div>
        {/* link content */}
        <div className="drawer-side">
          <div className="menu flex flex-col justify-between w-80 min-h-full bg-base-200 relative md:px-8 px-4 pt-0">
            <div className="space-y-2 flex flex-col gap-3">
              <div className="center-itm justify-center flex-col gap-3 pt-10">
                <div className="w-2h-24 h-24 rounded-full border border-green-500 relative">
                  <img
                    src={
                      user?.photoURL
                        ? user?.photoURL
                        : "https://i.ibb.co/kc20dsb/blank-profile-picture-973460-1280.png"
                    }
                    alt="Avatar"
                    className="w-full h-full rounded-full bg-cover"
                  />

                  <UpdateProfile openModal={openModal} />
                </div>
                <div className="relative w-fit">
                  <h2 className="title">{user?.displayName || "JOhn_Doe"}</h2>
                  <p className="absolute top-0 -right-10 text-green-600 font-semibold">
                    {testRole?.role || ""}
                  </p>
                </div>
              </div>

              {testRole?.role === "admin" ? (
                <AdminLinks sendReport={openModal} sendSupport={openModal} />
              ) : (
                testRole?.role === "user" && <UserLinks />
              )}
            </div>

            <label
              onClick={() => setIsOpen(false)}
              htmlFor="admin_drawer"
              className={`lg:hidden drawer-overlay absolute right-0 h-screen border-r-4 border-green-600 center-itm justify-center ${
                isOpen ? "mr-0" : "mr-32"
              }`}
            >
              <span className="h-16 w-4  center-itm justify-center bg-green-600 btn-dr -mr-5">
                <PiArrowFatLinesLeftFill className="text-white" />
              </span>
            </label>
          </div>
        </div>
      </div>
      <UpdateProfileModal
        ref={modalRef}
        close={closeModal}
        open={isModalOpen}
      />
      <SendMsgModal
        title="Report your opinion here..."
        open={isReportModalOpen}
        action="report"
        close={closeModal}
      />
      <SendMsgModal
        title="Welcome to our support station."
        open={isSupportModalOpen}
        action="support"
        close={closeModal}
      />
    </>
  );
};

export default Dashboard;
