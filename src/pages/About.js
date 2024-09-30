import React from "react";
import { Link } from "react-router-dom";
import Header from "../layout/header";
import Footer from "../layout/Footer";

const About = () => {
  return (
    <div>
      <Header></Header>
      <div className="bg-cover bg-center bg-[url('/public/image/img2.jpg')] bg-transparent h-[350px] bg-blend-darken">
        <div className="bg-[rgba(0,0,0,0.4)] h-full">
          <h1 className="py-[60px] text-7xl font-bold text-black">About Us</h1>
        </div>
      </div>
      <div className="border border-black">
        <h2 className="font-bold text-3xl text-left p-4 ">Health Care</h2>
        <h1 className="font-bold text-l text-left p-4">
          Compassionate Health Care for All
        </h1>
        <p className="font-bold text-left p-4">
          At [Your Organization Name], we are dedicated to providing
          compassionate, patient-centered health care for individuals of all
          ages and backgrounds. Our team of experienced professionals is
          committed to delivering high-quality medical services with empathy,
          respect, and a focus on holistic well-being. Whether you need routine
          check-ups, specialized treatments, or ongoing support, we are here to
          ensure your health and comfort are our top priorities. We believe that
          every person deserves access to excellent care, and we strive to
          create a welcoming environment where your health is in trusted hands.
        </p>
      </div>
    </div>
  );
};

export default About;
