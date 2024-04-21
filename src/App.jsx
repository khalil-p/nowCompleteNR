import React from "react";
import swiggyLogo from "./assets/swiggy.svg";
import { FaSearch } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FaSignInAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Input } from "antd";
import { MdStars } from "react-icons/md";
import resList from "./demoData.json";
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
// linear-gradient(rgba(27, 30, 36, 0) 0%, rgb(27, 30, 36) 84.21%)
const ResCard = ({ resData }) => {
  return (
    <>
      <div className="w-[calc(100%-920px)] hover:scale-90 cursor-pointer transition-all">
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.info.cloudinaryImageId}`}
            alt="res_img"
            className=" object-cover w-[100%] h-[calc(150px)]"
          />
          <div
            className="absolute bottom-0 left-0 right-0 text-white pl-2 "
            style={{
              background:
                "linear-gradient(rgba(27, 30, 36, 0) 0%, rgb(27, 30, 36) 84.21%)",
            }}
          >
            <h3 className="proxima-cond-black font-extrabold text-[22px] ">
              ITEMS AT ₹179
            </h3>
          </div>
        </div>
        <div className="resInfo">
          <div className="basis-grotesque-pro-medium text-lg">
            {resData.info.name}
          </div>
          <div className="basis-grotesque-pro-medium text-base flex items-center gap-1">
            <MdStars size={20} color="green" /> {resData.info.avgRating} •{" "}
            {resData.info.sla.slaString}
          </div>
          <div className="cusines basis-grotesque-pro-regular text-base color-cl">
            {resData.info.cuisines.join(", ")}
          </div>
          <div className="basis-grotesque-pro-regular text-base color-cl">
            {resData.info.areaName}
          </div>
        </div>
      </div>
    </>
  );
};
function App() {
  return (
    <>
      <div className="py-5 px-20">
        <Header />
        <div className="flex flex-wrap justify-between gap-y-7">
          {resList.map((i) => {
            return <ResCard resData={i} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
