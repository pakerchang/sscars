import React from "react";

function LayoutCars(props) {
  const { children } = props;
  return <div className="w-full grid grid-cols-3 gap-5 p-[15px]">{children}</div>;
}

export default LayoutCars;
