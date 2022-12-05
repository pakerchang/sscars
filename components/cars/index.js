import React from "react";
import LayoutCars from "layout/LayoutCars";
import Card from "@/cars/Card";
import Pagination from "@/shared/Pagination";
import { useRecoilValue } from "recoil";
import { carsDataState } from "store/cars";

function Cars() {
  const data = useRecoilValue(carsDataState);
  const handlePageSwitch = (data) => {};

  return (
    <LayoutCars>
      {data.carsData.map((item, index) => (
        <Card key={index} imgSrc={item.imgSrc} data={item.data} />
      ))}
      <Pagination />
    </LayoutCars>
  );
}

export default Cars;
