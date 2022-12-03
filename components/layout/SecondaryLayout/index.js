import React from "react";

function SecondaryLayout(props) {
  const { children } = props;
  return (
    <div className="w-full h-4/5 bg-gray-100 flex flex-col justify-center items-center">
      {children}
    </div>
  );
}

export default SecondaryLayout;
