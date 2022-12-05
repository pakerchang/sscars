import React from "react";

function LayoutCars(props) {
  const { children } = props;
  return (
    <div className="w-full h-full overflow-y-scroll grid grid-cols-3 gap-5 p-[15px]">
      {children}
    </div>
  );
}

export default LayoutCars;
