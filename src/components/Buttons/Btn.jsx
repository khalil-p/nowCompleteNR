import React from "react";
import { Button } from "antd";
function Btn({btnTxt, onclick}) {
  return (
    <>
      <Button type="primary" className="bg-blue-600" onClick={onclick}>{btnTxt}</Button>
    </>
  );
}

export default Btn;
