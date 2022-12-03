import React from "react";
import LayoutCars from "layout/LayoutCars";
import Card from "@/cars/Card";
import carsData from "@/utils/carsData.json";

function Cars() {
  return (
    <LayoutCars>
      {carsData.map((item) => (
        <Card key={item.imgSrc} imgSrc={item.imgSrc} data={item.data} />
      ))}
    </LayoutCars>
  );
}

export default Cars;
