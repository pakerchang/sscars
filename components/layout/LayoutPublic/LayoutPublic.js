import React from "react";
import Header from "@/shared/Header";
import Footer from "@/shared/Footer";
import SecondaryLayout from "layout/SecondaryLayout";

function LayoutPublic(props) {
  const { children } = props;
  return (
    <div className="flex flex-col w-screen h-screen justify-between">
      <Header />
      <SecondaryLayout>{children}</SecondaryLayout>
      <Footer />
    </div>
  );
}

export default LayoutPublic;
