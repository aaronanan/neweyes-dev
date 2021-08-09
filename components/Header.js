import React from "react";
import { IoCallOutline, IoMenuOutline, IoMailOutline } from "react-icons/io5";
import Image from "next/image";

import Logo from "assets/logo.png";

const Header = () => {
  return (
    <div className="mx-3 relative top-2 md:top-4 lg:mx-14">
      <div className="h-8 bg-gray-100 rounded-t-2xl flex flex-row justify-around items-center">
        <div className="flex flex-row items-center">
          <IoCallOutline size={19} />
          <p className="text-sm ml-1">(778) 349-0840</p>
        </div>
        <div className="flex-row flex items-center">
          <IoMailOutline size={19} />
          <p className="text-sm ml-1">info@neweyes.ca</p>
        </div>
      </div>
      <div className="h-16 bg-white rounded-b-2xl flex flex-row justify-around items-center">
        <Image src={Logo} width={90} height={35} />
        <h1 className="text-3xl mb-1 -ml-3">New Eyes</h1>
        <IoMenuOutline size={30} />
      </div>
    </div>
  );
};

export default Header;
