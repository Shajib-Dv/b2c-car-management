import { MdOutlineCarRepair, MdOutlineCarRental } from "react-icons/md";
import ActiveDashLink from "../../ActiveDashLink";
import { BiDetail } from "react-icons/bi";
import { FaAddressBook } from "react-icons/fa";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { BsBookmarkHeart } from "react-icons/bs";
import { AiOutlineTransaction } from "react-icons/ai";
import { IoGitCompare } from "react-icons/io5";
import { MdOutlineSell } from 'react-icons/md';
import { BsFillBookmarkCheckFill, BsFillCartCheckFill } from 'react-icons/bs';
import { FaCartFlatbed } from 'react-icons/fa6';

const UserLinks = () => {
  return (
    <>
      <ActiveDashLink to="/dashboard/user/home">
        <MdOutlineCarRepair className="text-2xl" /> Home
      </ActiveDashLink>
      <ActiveDashLink to="/dashboard/user/my_cart">
        <FaCartFlatbed className="text-2xl" /> My Cart
      </ActiveDashLink>
      <ActiveDashLink to="/dashboard/user/order_summary">
        <BsFillCartCheckFill className="text-2xl" /> Order Summary
      </ActiveDashLink>
      <ActiveDashLink to="/dashboard/user/my_bids_list">
        <BiDetail className="text-2xl" />
        My Bids List
      </ActiveDashLink>
      <ActiveDashLink to="/dashboard/user/addresses">
        <FaAddressBook className="text-2xl" /> Addresses
      </ActiveDashLink>
      <ActiveDashLink to="/dashboard/user/emi_calculator">
        <HiOutlineBanknotes className="text-2xl" />
        EMI Calculator
      </ActiveDashLink>
      <ActiveDashLink to="/dashboard/user/wish_list">
        <BsBookmarkHeart className="text-2xl" />
        Wish List
      </ActiveDashLink>
      <ActiveDashLink to="/dashboard/user/transaction">
        <AiOutlineTransaction className="text-2xl" />
        Your Transactions
      </ActiveDashLink>
      <ActiveDashLink to="/dashboard/user/compare_car">
        <IoGitCompare className="text-2xl" />
        Compare Car
      </ActiveDashLink>
      <ActiveDashLink to="/dashboard/user/user_sell_car">
        <MdOutlineSell className="text-2xl" />
        Sell A Car
      </ActiveDashLink>
      <ActiveDashLink to="/dashboard/user/user_listing">
        <BsFillBookmarkCheckFill className="text-2xl" />
        My listing
      </ActiveDashLink>
    </>
  );
};

export default UserLinks;
