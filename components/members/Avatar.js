import React from "react";

function Avatar(props) {
  const { img, name, role } = props;
  return (
    <div className="">
      <span className="inline-block rounded-full bg-white shadow-lg p-2 my-5">
        <img
          className="inline-block rounded-full"
          width={112}
          height={112}
          src={img}
          alt="avatar"
        />
      </span>

      <h4 className="text-xl font-semibold mb-1">{name}</h4>
      <p className="text-gray-600 fron-medium">{role}</p>
    </div>
  );
}

export default Avatar;
