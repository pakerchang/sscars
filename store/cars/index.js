import { atom } from "recoil";
import carsData from "@/utils/carsData.json";

const generateFakeData = new Array(5).fill(carsData).flat();

export const carsDataState = atom({
  key: "carsDataState",
  default: {
    carsData: generateFakeData ?? [],
  },
});
