import React from "react";
import Header from "@/shared/Header";
import Footer from "@/shared/Footer";

function LayoutPublic(props) {
  const { children } = props;
  return (
    <div className="flex flex-col w-screen h-screen justify-between items-center">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default LayoutPublic;
