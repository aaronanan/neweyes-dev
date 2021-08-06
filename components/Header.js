import React from "react";
import { IoEyeOutline, IoMenuOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="mx-3 relative top-1">
      <div className="h-8 bg-gray-100 rounded-t-2xl flex flex-row justify-around items-center">
        <p className="text-xs">(778) 349-0840</p>
        <p className="text-xs">info@neweyes.ca</p>
      </div>
      <div className="h-14 bg-white rounded-b-2xl flex flex-row justify-around items-center">
        <IoEyeOutline size={30} />
        <h1 className="text-2xl mb-1">New Eyes</h1>
        <IoMenuOutline size={30} />
      </div>
    </div>
  );
};

export default Header;
