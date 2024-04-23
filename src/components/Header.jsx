import React from "react";
import swiggyLogo from "../assets/swiggy.svg";
import { FaSearch } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FaSignInAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Input } from "antd";
const Header = () => {
  return (
    <>
      <nav className="flex items-center w-full justify-between mb-10 proxima-semi-bold text-base">
        <div className="w-8">
          <img src={swiggyLogo} alt="logo" />
        </div>
        <div className="container text-right">
          <ul className="flex justify-end gap-x-20 items-center ">
            <li className="flex items-center gap-x-2.5 cursor-pointer">
              <div className="w-80">
                <Input placeholder="Basic usage" />
              </div>
              <FaSearch /> Search
            </li>
            <li className="flex items-center gap-x-2.5 cursor-pointer">
              <BiSolidOffer /> Offers
            </li>
            <li className="flex items-center gap-x-2.5 cursor-pointer">
              <IoHelpBuoyOutline /> Help
            </li>
            <li className="flex items-center gap-x-2.5 cursor-pointer">
              <FaSignInAlt /> Sign In
            </li>
            <li className="flex items-center gap-x-2.5 cursor-pointer">
              <FaCartShopping /> Cart
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
