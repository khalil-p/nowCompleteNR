import React, { useState } from "react";
import resList from "../utils/demoData.json";
import ResCard from "./ResCard";
import Btn from "./Buttons/Btn.jsx";
function Body() {
  const [resToBeDisplayed, setResToBeDisplayed] = useState(resList);
  const [resFilterFlag, setResFilterFlag] = useState(false);

  const handleTopRatedRestro = (e) => {
    const topRatedRestraunt = resList.filter((res) => res.info.avgRating > 4.4);
    setResToBeDisplayed(topRatedRestraunt);
    setResFilterFlag(true);
  };
  const handleShowAllRestro = (e) => {
    console.log("resFilterFlag....", resFilterFlag);
    if (resFilterFlag) {
      setResToBeDisplayed(resList);
    }
    setResFilterFlag(false);
  };
  return (
    <>
      <div className="mb-2">
        <span>
          <Btn btnTxt="Top Rated Restaurant" onclick={handleTopRatedRestro} />
        </span>
        <span className="ml-2">
          <Btn btnTxt="Show All Restaurant" onclick={handleShowAllRestro} />
        </span>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {resToBeDisplayed.map((i) => {
          console.log(i.info);
          return <ResCard key={i.info.id} resData={i?.info} />;
        })}
      </div>
    </>
  );
}

export default Body;
