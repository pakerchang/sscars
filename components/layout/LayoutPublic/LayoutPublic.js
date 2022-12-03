import React from "react";
import Header from "layout/LayoutPublic/Header";
import Footer from "layout/LayoutPublic/Footer";

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
