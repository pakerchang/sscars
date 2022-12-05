import React from "react";
import LayoutCars from "layout/LayoutCars";
import Card from "@/cars/Card";
import carsData from "@/utils/carsData.json";
import Pagination from "@/shared/Pagination";

function Cars() {
  // For fake cars data
  const generateFakeData = new Array(5).fill(carsData).flat();

  return (
    <LayoutCars>
      {carsData.map((item) => (
        <Card key={item.imgSrc} imgSrc={item.imgSrc} data={item.data} />
      ))}
      <Pagination />
    </LayoutCars>
  );
}

export default Cars;
