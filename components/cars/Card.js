import React from "react";
import Image from "next/image";

const CardItem = (props) => {
  const { title, price } = props;
  return (
    <div className="flex flex-col  justify-between items-start mt-2">
      <h3 className="text-sm text-gray-700">{title}</h3>
      <p className="text-lg font-medium text-gray-900">NT$ {price}</p>
    </div>
  );
};

function Card(props) {
  const { imgSrc, data } = props;
  return (
    <div className="flex flex-col justify-around">
      <Image className="rounded-md" src={imgSrc} width={360} height={280} alt="images" />
      <CardItem title={data.title} price={data.price} />
    </div>
  );
}

export default Card;
