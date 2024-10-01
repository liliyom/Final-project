import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-red-900 text-white py-4">
      <div>
        <div className="text-left pl-20 flex flex-row">
          <div className="p-10 text-left w-[500px]">
            <h1 className="text-decoration underline font-bold text-2xl">Medical ChatBot</h1>
            <p className="font-extralight">Health & Counselling</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eum
              enim sequi nisi fuga odit libero? Repellat explicabo, optio
              tempora facere asperiores, assumenda inventore aperiam velit rem
              perferendis ea qui
            </p>
          </div>
          <div className="p-10 w-[500px]">
            <h1 className="font-bold text-decoration underline text-2xl">Quick links</h1>
            <div className="">
              <p>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </p>
              <p>
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </p>
              <p>
                <Link to="/services" className="hover:underline">
                  Our Services
                </Link>
              </p>
              <p>
                <Link to="/contact" className="hover:underline">
                  Contact us
                </Link>
              </p>
            </div>
          </div>
          <div className="p-10 w-[500px]">
            <h1 className="font-bold text-decoration underline text-2xl">Services</h1>
            <div>
              <p>Individual Counselling</p>
              <p>Couple Counselling</p>
              <p>Family Counselling</p>
              <p>Career Counselling</p>
            </div>
          </div>
        </div>
        <hr/>
        <div className="container mx-auto text-center">
          <p className="mt-2">© 2024 MyWebsite. All rights reserved.</p>
          <p>
            Contact us at{" "}
            <a href="mailto:info@mywebsite.com" className="underline">
              info@mywebsite.com
            </a>
          </p>
        </div>
      </div>  
    </footer>
  );
}
export default Footer;
