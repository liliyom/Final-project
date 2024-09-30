import React from "react";
import { Link } from "react-router-dom";
import Header from "../layout/header";
import Footer from "../layout/Footer";


const About = () => {
  return (
    <div>
      <Header></Header>
      <div className="  h-screen bg-cover bg-center  bg-[url('/public/image/img2.jpg')] bg-transparent h-60">
        <h1 className="p-4 text-7xl	 font-bold tracking-wide">About Us</h1>
      </div>
      <div>
        <h2 className="font-bold text-3xl justify">Health Care</h2>
        <h1>Compassionate Health Care for All</h1>
        <p>
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
      <Footer></Footer>
    </div>
  );
};

export default About;
