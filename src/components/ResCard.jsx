import React from "react";
import { MdStars } from "react-icons/md";
import { CDN_URL } from "../utils/common";
const ResCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    sla,
    cuisines,
    areaName,
    avgRating,
  } = resData;
  return (
    <>
      <div className="hover:scale-90 cursor-pointer transition-all">
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={`${CDN_URL}/${cloudinaryImageId}`}
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
          <div className="basis-grotesque-pro-medium text-lg">{name}</div>
          <div className="basis-grotesque-pro-medium text-base flex items-center gap-1">
            <MdStars size={20} color="green" /> {avgRating} • {sla.slaString}
          </div>
          <div className="cusines basis-grotesque-pro-regular text-base color-cl">
            {cuisines.join(", ")}
          </div>
          <div className="basis-grotesque-pro-regular text-base color-cl">
            {areaName}
          </div>
        </div>
      </div>
    </>
  );
};

export default ResCard;
