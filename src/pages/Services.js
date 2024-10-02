import React from "react";
import Header from "../layout/header";

const Services = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url('/public/image/img2.jpg')] bg-transparent h-[350px] bg-blend-darken">
        <div className="bg-[rgba(0,0,0,0.4)] h-full">
          <h1 className="py-[60px]  text-7xl font-bold text-black">Services</h1>
        </div>
      </div>
      <div className="border border-black rounded-md">
        <h2 className="font-bold text-3xl text-left p-4">Health Care</h2>
        <h1 className="font-bold text-l text-left p-4">
          Comprehensive Health Care Solutions
        </h1>
        <p className="font-bold text-left p-4">
          Our health care solution offers comprehensive, patient-centered
          services designed to meet a wide range of medical needs. With a focus
          on personalized care, we provide preventive, diagnostic, and treatment
          services to ensure optimal health and well-being. Our expert team is
          dedicated to delivering high-quality care with compassion and
          efficiency, ensuring a seamless experience for all patients.
        </p>
      </div>
    </div>
  );
};

export default Services;
