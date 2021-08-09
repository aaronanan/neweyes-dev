import React from "react";
import Image from "next/image";

// Images
import ShapeLeft from "assets/shape-left.png";
import ShapeRight from "assets/shape-right.png";
import Process from "assets/howitworks.png";
import CustomSoftware from "assets/customsoftware.png";
import DigitalDesign from "assets/digitaldesign.png";
import WebDev from "assets/webdev.png";
import ContactUs from "assets/contactus.png";

// Components
import Footer from "./Footer";

const Main = () => {
  return (
    <div className="w-screen absolute bg-primary">
      {/* // Phone Display */}
      <div className="flex flex-row justify-between md:hidden">
        <div className="mt-5">
          <Image src={ShapeLeft} height={270} width={120} />
        </div>
        <div className="mt-14">
          <Image src={ShapeRight} height={270} width={120} />
        </div>
      </div>

      {/* // Desktop Display */}
      <div className="md:flex flex-row justify-between hidden">
        <div className="mt-5">
          <Image src={ShapeLeft} height={470} width={320} />
        </div>
        <div className="mt-14">
          <Image src={ShapeRight} height={470} width={320} />
        </div>
      </div>

      <div className="text-white relative bottom-32 mx-10 lg:left-1/3 lg:text-black md:left-1/4 md:bottom-96 md:w-96">
        <h1 className="text-3xl md:text-4xl">
          Fresh eyes for thriving companies.
        </h1>
        <p className="text-sm md:text-md mt-2">
          Business is always evoling. So should you.
        </p>
      </div>

      <div className="text-white text-center w-3/4 md:w-1/2 mx-auto relative bottom-10 md:bottom-60">
        <h1 className="text-xl md:text-3xl">
          Request a free custom software and desgin review
        </h1>
        <input
          type="button"
          value="Request Now"
          className="w-44 h-12 mt-5 bg-secondary border-white border-4 rounded-md text-lg uppercase"
        />
      </div>

      <div className="bg-white px-4 border-t-4 border-b-4 border-black text-white md:pb-32 pb-20 pt-8 lg:pb-52 lg:px-60">
        <div className="flex flex-row flex-wrap md:justify-around justify-between items-center mt-5">
          <div className="w-40 h-20 md:w-52 lg:w-64">
            <div className="absolute rounded-xl brightness-50 filter flex md:hidden">
              <Image
                src={WebDev}
                width={160}
                height={105}
                className="rounded-lg"
              />
            </div>

            <div className="absolute rounded-xl brightness-50 filter hidden md:flex lg:hidden">
              <Image
                src={WebDev}
                width={200}
                height={150}
                className="rounded-lg"
              />
            </div>

            <div className="absolute rounded-xl brightness-50 filter hidden lg:flex md:hidden">
              <Image
                src={WebDev}
                width={250}
                height={200}
                className="rounded-lg"
              />
            </div>
            <h2 className="relative text-center mt-2">Web Development</h2>
          </div>

          <div className="w-40 h-20 md:w-52 lg:w-64">
            <div className="absolute rounded-xl brightness-50 filter flex md:hidden">
              <Image
                src={CustomSoftware}
                width={160}
                height={105}
                className="rounded-lg"
              />
            </div>
            <div className="absolute rounded-xl brightness-50 filter hidden md:flex lg:hidden">
              <Image
                src={CustomSoftware}
                width={200}
                height={150}
                className="rounded-lg"
              />
            </div>
            <div className="absolute rounded-xl brightness-50 filter hidden lg:flex">
              <Image
                src={CustomSoftware}
                width={250}
                height={200}
                className="rounded-lg"
              />
            </div>
            <h2 className="relative text-center mt-2">Custom Software</h2>
          </div>
        </div>
        <div className="flex flex-row flex-wrap md:justify-around justify-between items-center md:mt-40 mt-28 lg:mt-52">
          <div className="w-40 h-20 -mt-12 md:w-52 lg:w-64">
            <div className="absolute rounded-xl brightness-50 filter flex md:hidden">
              <Image
                src={DigitalDesign}
                width={160}
                height={105}
                className="rounded-lg"
              />
            </div>
            <div className="absolute rounded-xl brightness-50 filter hidden md:flex lg:hidden">
              <Image
                src={DigitalDesign}
                width={200}
                height={150}
                className="rounded-lg"
              />
            </div>
            <div className="absolute rounded-xl brightness-50 filter hidden lg:flex">
              <Image
                src={DigitalDesign}
                width={250}
                height={200}
                className="rounded-lg"
              />
            </div>
            <h2 className="relative text-center mt-2">Digital Design</h2>
          </div>

          <div className="w-40 h-20 -mt-12 md:w-52 lg:w-64">
            <div className="absolute rounded-xl brightness-50 filter flex md:hidden">
              <Image
                src={CustomSoftware}
                width={160}
                height={105}
                className="rounded-lg"
              />
            </div>
            <div className="absolute rounded-xl brightness-50 filter hidden md:flex lg:hidden">
              <Image
                src={CustomSoftware}
                width={200}
                height={150}
                className="rounded-lg"
              />
            </div>
            <div className="absolute rounded-xl brightness-50 filter hidden lg:flex">
              <Image
                src={CustomSoftware}
                width={250}
                height={200}
                className="rounded-lg"
              />
            </div>
            <h2 className="relative text-center mt-2">App Development</h2>
          </div>
        </div>
      </div>

      <div className="bg-secondary">
        <h1 className="text-2xl ml-6 mx-auto py-14 text-white mr-4 lg:text-3xl md:w-2/3 md:mx-auto md:py-40">
          Unsure about your website? How about digital designs? Sign up for a
          free website analysis.
        </h1>
      </div>

      <div className="bg-white px-4 pb-40 pt-5 lg:px-96">
        <div className="flex flex-row justify-between">
          <input
            type="text"
            placeholder="Name"
            className="border-black border-2 rounded-md mt-5 w-40 h-9 pl-2 lg:w-72"
          />
          <input
            type="text"
            placeholder="Email"
            className="border-black border-2 rounded-md mt-5 w-40 h-9 pl-2 lg:w-72"
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
            className="rounded-md h-10 mt-5 text-white text-2xl"
            style={{ backgroundColor: "#2E402B" }}
          />
        </div>
        <div className="w-80 h-40 mx-auto mt-9">
          <Image src={ContactUs} />
        </div>
      </div>

      <div className="text-center py-20 w-screen">
        <h1 className="uppercase text-lg">Whats The Process</h1>
        <h1 className="text-2xl">Lets see how it works</h1>
        <Image src={Process} />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
