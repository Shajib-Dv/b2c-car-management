/** @format */

import { LiaUserEditSolid } from "react-icons/lia";

const UpdateProfile = ({ openModal }) => {
  return (
    <>
      <button
        onClick={() => openModal()}
        className="absolute bottom-0 left-[40%]"
        title="Edit your profile"
      >
        <LiaUserEditSolid className="text-4xl text-green-600 cursor-pointer" />
      </button>
    </>
  );
};

export default UpdateProfile;
