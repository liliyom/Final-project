import React from "react";

const Home = () => {
  return (
    <div className="h-screen bg-fix bg-no-repeat bg-center bg-[url('/public/image/stethoscope.jpeg')]">
      <div className="font-bold p-4 ">
        <h2>Welcome To The Health Care</h2>
      </div>
      <div>
        <h1 className="font-bold p-4 text-color-white text-5xl">
          Navigating The Department Of The Health Care
        </h1>
      </div>
      <div className="font-bold p-4 text-color-white text-base">
        <p>
          Health care refers to the maintenance and improvement of physical and
          mental health through the prevention, diagnosis, treatment, and
          recovery from illness or injury.
        </p>
      </div>
      <div>
        <button className="bg-red-900 text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-red-900 border-4 border-red-900">
          CHAT-BOT
        </button>
      </div>
    </div>
  );
};

export default Home;
