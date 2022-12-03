import React from "react";
import Image from "next/image";
import logo from "assets/logo.png";
import { Tab } from "@headlessui/react";

function Header() {
  const navItem = [
    { title: "最新消息", pathName: "/news" },
    { title: "二手車款", pathName: "/cars" },
    { title: "汽車百科", pathName: "/category" },
    { title: "買賣 Q & A", pathName: "/sellqa" },
    { title: "聯絡我們", pathName: "contact" },
  ];

  return (
    <div className="w-full h-[90px] flex justify-around items-center">
      <div className="header-logo">
        <Image src={logo} alt="logo" width={184} height={74} />
      </div>
      <div className="header-nav">
        <Tab.Group>
          <Tab.List className="flex justify-around items-center w-[552px]">
            {navItem.map((item) => (
              <Tab
                className="text-[#121212D9] border-none h-[36px] py-[10px] flex justify-center items-center"
                key={item.title}
              >
                {item.title}
              </Tab>
            ))}
          </Tab.List>
        </Tab.Group>
      </div>
    </div>
  );
}

export default Header;
