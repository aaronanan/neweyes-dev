import React from "react";
import Logo from "assets/logo.png";
import Image from "next/image";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="h-20 bg-white flex flex-row justify-between items-center px-2 lg:px-20">
      <h1 className="text-xl">New Eyes</h1>
      <Image src={Logo} width={80} height={30} />
      <div>
        <div className="flex-row flex items-center">
          <IoCallOutline size={19} />
          <p className="ml-1">(778) 349-0840</p>
        </div>
        <div className="flex-row flex items-center">
          <IoMailOutline size={19} />
          <p className="ml-1">info@neweyes.ca</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
