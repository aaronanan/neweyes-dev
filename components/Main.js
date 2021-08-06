import React from "react";
import Image from "next/image";
import ShapeLeft from "assets/shape-left.png";
import ShapeRight from "assets/shape-right.png";

const Main = () => {
  return (
    <div className="w-screen absolute bg-primary">
      <div className="flex flex-row justify-between">
        <div className="mt-5">
          <Image src={ShapeLeft} height={270} width={120} />
        </div>
        <div className="mt-14">
          <Image src={ShapeRight} height={270} width={120} />
        </div>
      </div>

      <div className="text-white relative bottom-32 mx-10">
        <h1 className="text-3xl">Fresh eyes for thriving companies.</h1>
        <p className="text-sm">Business is always evoling. So should you.</p>
      </div>

      <div className="text-white text-center w-3/4 mx-auto relative bottom-10">
        <h1 className="text-md">
          Request a free custom software and desgin review
        </h1>
        <input
          type="button"
          value="Request Now"
          className="w-36 h-8 mt-3 bg-green-700 border-white border-2 rounded-md text-md uppercase"
        />
      </div>
      <div className="bg-white h-64 flex flex-row flex-wrap justify-between items-center px-4 border-t-4 border-b-4 border-black">
        <div className="w-40 bg-red-200 h-20"></div>
        <div className="w-40 bg-red-200 h-20"></div>
        <div className="w-40 bg-red-200 h-20 -mt-10"></div>
        <div className="w-40 bg-red-200 h-20 -mt-10"></div>
      </div>

      <div className="bg-secondary">
        <h1 className="text-xl ml-5 mx-auto py-10 text-white mr-3">
          Unsure about your website? How about digital designs? Sign up for a
          free website analysis.
        </h1>
      </div>

      <div className="bg-white px-4">
        <div className="flex flex-row justify-between">
          <input
            type="text"
            placeholder="Name"
            className="border-black border-2 rounded-md mt-5 w-40 h-9 pl-2"
          />
          <input
            type="text"
            placeholder="Email"
            className="border-black border-2 rounded-md mt-5 w-40 h-9 pl-2"
          />
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Website URL"
            className="border-black border-2 rounded-md mt-5 h-9 pl-2"
          />
          <input
            type="button"
            value="Accept"
            className="bg-green-500 rounded-md h-8 mt-5"
          />
        </div>
        <div className="w-80 bg-red-200 h-40 mx-auto mt-9"></div>
      </div>

      <div className="text-center pb-96">
        <h1 className="uppercase">Whats The Process</h1>
        <h1>Lets see how it works</h1>
      </div>
    </div>
  );
};

export default Main;
