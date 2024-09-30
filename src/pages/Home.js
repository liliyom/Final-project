import React from "react";
import Footer from "../layout/Footer";

const Home = () => {
  return (
    <div className="h-screen bg-cover bg-center  bg-[url('/public/image/img2.jpg')] bg-transparent h-96 bg-blend-overlay">
      <div className="font-bold p-4 text-red-900 font-sans text-lg tracking-wide">
        <h2>Welcome To The Health Care</h2>
      </div>
      <div>
        <h1 className="font-bold p-4 text-color-white text-5xl text-red-900 font-sans tracking-wide ">
          Navigating The Department Of The Health Care
        </h1>
      </div>
      <div className="font-bold p-4 text-color-white text-base text-red-900 font-sans text-lg tracking-wide">
        <p>
          Health care refers to the maintenance and improvement of physical and
          mental health through the prevention, diagnosis, treatment, and
          recovery from illness or injury.
        </p>
      </div>
      <div>
        <div className="flex justify-center items-start  ">
          <button className="bg-white text-red-900 font-bold  px-4 py-2 mr-8 rounded hover:bg-red-900 hover:text-white border border-white ">
            CHAT-BOT
          </button>
          <button className="bg-white text-red-900 font-bold px-4 py-2 rounded hover:bg-red-900 hover:text-white border border-white">
            MAKE APPOINTMENT
          </button>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default Home;
