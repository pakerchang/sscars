import React from "react";

function SecondaryLayout(props) {
  const { children } = props;
  return (
    <div className="w-full h-full bg-gray-100 flex flex-col justify-center items-center">
      <div className="w-3/5 h-max bg-white rounded-md my-10 py-14">{children}</div>
    </div>
  );
}

export default SecondaryLayout;
