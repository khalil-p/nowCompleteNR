import React from 'react'
import resList from "../utils/demoData.json";
import ResCard from './ResCard';
function Body() {
  return (
    <div className="grid grid-cols-3 gap-4">
    {resList.map((i) => {
      console.log(i.info);
      return <ResCard key={i.info.id} resData={i?.info} />;
    })}
  </div>
  )
}

export default Body