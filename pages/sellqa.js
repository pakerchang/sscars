import React from "react";
import SellQA from "@/sellqa";
import LayoutSellQA from "layout/LayoutSellQA";

export default function SellQAPage() {
  return <SellQA />;
}

SellQAPage.getLayout = function getLayout(page) {
  return <LayoutSellQA>{page}</LayoutSellQA>;
};
