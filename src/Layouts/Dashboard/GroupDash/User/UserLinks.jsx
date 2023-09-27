/** @format */

import { MdOutlineCarRepair, MdOutlineCarRental } from "react-icons/md";
import ActiveDashLink from "../../ActiveDashLink";
import { BiDetail } from 'react-icons/bi';
import { FaAddressBook } from 'react-icons/fa';
import { HiOutlineBanknotes } from 'react-icons/hi2';
import { BsBookmarkHeart } from 'react-icons/bs';
import { AiOutlineTransaction } from 'react-icons/ai';
import { IoGitCompare } from 'react-icons/io5';

const UserLinks = () => {
  return (
    <>
      <ActiveDashLink to="/dashboard/user/home">
        <MdOutlineCarRepair className="text-2xl" /> Home
      </ActiveDashLink>
      <ActiveDashLink to="/dashboard/user/order_summary">
        <MdOutlineCarRental className="text-2xl" /> Order Summary
      </ActiveDashLink>
      <ActiveDashLink to="/dashboard/user/MY_Bids_List">
        <BiDetail className="text-2xl" />My Bids List
      </ActiveDashLink>
      <ActiveDashLink to="/dashboard/user/addresses">
        <FaAddressBook className="text-2xl" /> Addresses
      </ActiveDashLink>
      <ActiveDashLink to="/dashboard/user/EMI_Calculator">
        <HiOutlineBanknotes className="text-2xl" />EMI Calculator
      </ActiveDashLink>
      <ActiveDashLink to="/dashboard/user/Wish_List">
        <BsBookmarkHeart className="text-2xl" />Wish List
      </ActiveDashLink>
      <ActiveDashLink to="/dashboard/user/Transaction">
        <AiOutlineTransaction className="text-2xl" />Your Transactions
      </ActiveDashLink>
      <ActiveDashLink to="/dashboard/user/Compare_Car">
        <IoGitCompare className="text-2xl" />Compare Car
      </ActiveDashLink>
    </>
  );
};

export default UserLinks;
