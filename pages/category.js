import React from "react";
import Category from "@/category";
import LayoutCategory from "layout/LayoutCategory";

export default function CategoryPage() {
  return <Category />;
}

CategoryPage.getLayout = function getLayout(page) {
  return <LayoutCategory>{page}</LayoutCategory>;
};
