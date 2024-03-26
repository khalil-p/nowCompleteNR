import React from "react";
import swiggyLogo from "./assets/swiggy.svg";
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
        <div className="w-10">
          <img src={swiggyLogo} alt="logo" />
        </div>
        <div className="container text-right">
          <ul className="flex justify-end gap-x-20 items-center">
            <li className="flex items-center gap-x-2.5">
              <div className="w-80">
                <Input placeholder="Basic usage" />
              </div>
              <FaSearch /> Search
            </li>
            <li className="flex items-center gap-x-2.5">
              <BiSolidOffer /> Offers
            </li>
            <li className="flex items-center gap-x-2.5">
              <IoHelpBuoyOutline /> Help
            </li>
            <li className="flex items-center gap-x-2.5">
              <FaSignInAlt /> Sign In
            </li>
            <li className="flex items-center gap-x-2.5">
              <FaCartShopping /> Cart
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
const ResCard = () => {
  return (
    <>
      <div>
        <div>
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"
            alt="res_img"
          />
        </div>
      </div>
    </>
  );
};
function App() {
  return (
    <>
      <div className="py-10 px-20">
        <Header />
        <div>
        <ResCard/>
        </div>
      </div>
    </>
  );
}

export default App;
