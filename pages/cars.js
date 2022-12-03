import React from "react";
import Cars from "@/cars";
import LayoutCars from "layout/LayoutCars";

export default function CarsPage() {
  return <Cars />;
}

CarsPage.getLayout = function getLayout(page) {
  return <LayoutCars>{page}</LayoutCars>;
};
