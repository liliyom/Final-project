import React from "react";

const Home = () => {
  return (
    <div className=" bg-fix bg-center bg-no-repeat bg-[url('/public/image/stethoscope.jpeg')]  h-[550px]">
      <div className="bg-[rgba(92,42,42,0.4)] h-full">
        <div className="font-bold p-4 ">
          <h2>Welcome To The Health Care</h2>
        </div>
        <div>
          <h1 className="font-bold p-8 text-color-white text-5xl text-black font-sans tracking-wide ">
            Navigating The Department Of The Health Care
          </h1>
        </div>
        <div className="font-bold py-[55px] text-color-white text-base text-black font-sans text-lg tracking-wide">
          <p>
            Health care refers to the maintenance and improvement of physical
            and mental health through the prevention, diagnosis, treatment, and
            recovery from illness or injury.
          </p>
        </div>
        <div>
          <div className="flex justify-center items-start py-[80px]  ">
            <button className="bg-white text-black font-bold  px-4 py-2 mr-8 rounded hover:bg-red-900 hover:text-white border border-white ">
              CHAT-BOT
            </button>
            <button className="bg-white text-black font-bold px-4 py-2 rounded hover:bg-red-900 hover:text-white border border-white">
              MAKE APPOINTMENT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
