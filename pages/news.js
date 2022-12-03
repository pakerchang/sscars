import React from "react";
import News from "@/news";
import LayoutNews from "layout/LayoutNews";

export default function NewsPage() {
  return <News />;
}

NewsPage.getLayout = function getLayout(page) {
  return <LayoutNews>{page}</LayoutNews>;
};
