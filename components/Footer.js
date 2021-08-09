import React from "react";

const Footer = () => {
  return (
    <div className="h-20 bg-white flex flex-row justify-between items-center px-2 lg:px-20">
      <h1>New Eyes</h1>
      <div className="w-20 h-8 bg-black"></div>
      <div>
        <div className="flex-row flex items-center justify-between">
          <div className="w-8 h-4 bg-black"></div>
          <p>(778) 349-0840</p>
        </div>
        <div className="flex-row flex items-center justify-between">
          <div className="w-8 h-4 bg-black"></div>
          <p>info@neweyes.ca</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
