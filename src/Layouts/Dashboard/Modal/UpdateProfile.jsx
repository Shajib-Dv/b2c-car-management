/** @format */

import { LiaUserEditSolid } from "react-icons/lia";

const UpdateProfile = ({ openModal }) => {
  return (
    <>
      <button
        onClick={() => openModal()}
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        title="Edit your profile"
      >
        <LiaUserEditSolid className="text-2xl text-green-600 cursor-pointer" />
      </button>
    </>
  );
};

export default UpdateProfile;
