import React from "react";
import Router from "next/router";
import Image from "next/image";
import logo from "assets/logo.png";
import { Tab } from "@headlessui/react";

function Header() {
  const navItem = [
    {
      title: "最新消息",
      pathName: "/news",
      icon: (
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-50 hi-solid hi-home inline-block w-5 h-5"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      ),
    },
    {
      title: "二手車款",
      pathName: "/cars",
      icon: (
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-50 hi-solid hi-briefcase inline-block w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
        </svg>
      ),
    },
    {
      title: "汽車百科",
      pathName: "/information",
      icon: (
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-50 hi-solid hi-cog inline-block w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: "團隊成員",
      pathName: "/members",
      icon: (
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-50 hi-solid hi-user-circle inline-block w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: "買賣 Q&A",
      pathName: "/sellqa",
      icon: (
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-50 hi-solid hi-cog inline-block w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  const handleNavbar = (pathName) => Router.push(pathName);
  const handleBack = () => Router.push("/");

  return (
    <div className="w-full h-[90px] flex justify-around items-center">
      <div className="header-logo cursor-pointer" onClick={handleBack}>
        <Image src={logo} alt="logo" width={184} height={74} />
      </div>
      <div className="header-nav">
        <Tab.Group>
          <Tab.List className="flex justify-around items-center w-[600px]">
            {navItem.map((item) => (
              <Tab
                className="text-[#121212D9] border-none h-[36px] py-[10px] flex justify-center items-center"
                key={item.title}
                onClick={() => handleNavbar(item.pathName)}
              >
                <div className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded border-none">
                  {item.icon}
                </div>
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
